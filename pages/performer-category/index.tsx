import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { performerCategories } from 'src/services/perfomer-categories.service';
import { updateUIValue } from 'src/redux/ui/actions';
import {
  IPerformerCategogies,
  IResponse,
  IPerformer,
  IPerformSearch
} from 'src/interfaces';
import Head from 'next/head';
import PerformerGrid from '@components/performer/performer-grid';
import {
  searchPerformer,
  updatePerformerFavourite
} from '@redux/performer/actions';
import { favouriteService } from 'src/services';
import { getResponseError } from 'src/lib';
import { SocketContext } from 'src/socket';

interface IProps {
  category: IPerformerCategogies;
  data: IPerformer[];
  searchPerformer: Function;
  total: number;
  success: boolean;
  searching: boolean;
  loggedIn: boolean;
  error: any;
  updatePerformerFavourite: Function;
  pluralTextModel: string;
}

interface IStates {
  query: IPerformSearch;
  sort?: {
    name: string;
    sortBy?: string;
  };
}

const initQueryState: IPerformSearch = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

class PerformerCategoryPage extends PureComponent<IProps, IStates> {
  static authenticate = false;

  static layout = 'public';

  private socket;

  static async getInitialProps({ ctx }) {
    try {
      if (process.browser && ctx.query.category) {
        return {
          category: JSON.parse(ctx.query.category)
        };
      }

      if (!ctx.query.slug) {
        return {};
      }

      const resp: IResponse<IPerformerCategogies> = await performerCategories.details(
        ctx.query.slug
      );

      return {
        category: resp.data
      };
    } catch (err) {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      query: initQueryState
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context;
    this.socket.on('modelUpdateStatus', this.search);
    this.socket.on('modelUpdateStreamingStatus', this.search);
  }

  componentDidUpdate(prevProps: IProps) {
    const { category, loggedIn } = this.props;
    if (category !== prevProps.category) {
      this.search();
    }
    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context;
    if (this.socket) {
      this.socket.off('modelUpdateStatus');
      this.socket.off('modelUpdateStreamingStatus');
    }
  }

  async onLike(performer: IPerformer) {
    const { _id, isFavorite } = performer;
    const { updatePerformerFavourite: dispatchUpdatePerformerFavourite } = this.props;
    try {
      await favouriteService.favorite(_id, isFavorite);
      dispatchUpdatePerformerFavourite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      message.error(getResponseError(e));
    }
  }

  setFilter(name: string, value: any) {
    const { query } = this.state;
    this.setState({
      query: {
        ...query,
        [name]: value
      }
    });
  }

  search = () => {
    const { searchPerformer: dispatchSearchPerformer, category } = this.props;
    const { query } = this.state;
    dispatchSearchPerformer({
      ...query,
      category: category ? category._id : ''
    });
  }

  render() {
    const { category, pluralTextModel } = this.props;
    const { query } = this.state;

    return (
      <>
        <Head>
          <title>
            {category ? `Category - ${category.name}` : `All ${pluralTextModel || 'Performers'}`}
          </title>
        </Head>
        <PageHeader title={category ? category.name : `All ${pluralTextModel || 'Performers'}`} />
        <div className="">
          <PerformerGrid
            {...this.props}
            {...query}
            isPage
            setFilter={this.setFilter.bind(this)}
            onLike={this.onLike.bind(this)}
          />
        </div>
      </>
    );
  }
}

PerformerCategoryPage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  ...state.performer.performers,
  ...state.ui
});
const mapDispatch = { searchPerformer, updatePerformerFavourite, updateUIValue };

export default connect(mapStateToProps, mapDispatch)(PerformerCategoryPage);
