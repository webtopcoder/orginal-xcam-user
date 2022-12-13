import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFavoritePerformers, removeFavorite } from 'src/redux/user/actions';
import FavouritePerformerGrid from 'src/components/user/favourite-performer-grid';
import { favouriteService } from 'src/services';
import './index.less';
import { ICountry, IFavourite, IPerformer } from 'src/interfaces';
import { getResponseError } from '@lib/utils';
import Loader from '@components/common/base/loader';

interface P {
  getFavoritePerformers: Function;
  removeFavorite: Function;
  searching: boolean;
  data: IFavourite[];
  total: number;
  error: any;
  success: boolean;
  loading: boolean;
  countries: ICountry[]
}
interface S {
  query: {
    offset: number;
    limit: number;
  };
}

class MyFavoutitePage extends PureComponent<P, S> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props) {
    super(props);
    this.state = {
      query: {
        offset: 0,
        limit: 100
      }
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(_, prevStates: S) {
    const { query } = this.state;
    if (query !== prevStates.query) {
      this.getData();
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

  async getData() {
    const { getFavoritePerformers: dispatchGetFavoritePerformers } = this.props;
    const { query } = this.state;

    try {
      dispatchGetFavoritePerformers({ ...query });
    } catch (error) {
      const err = Promise.resolve(error);
      message.error(getResponseError(err));
    }
  }

  async dislike(performer: IPerformer) {
    const { _id } = performer;
    const { removeFavorite: dispatchRemoveFavorite } = this.props;
    try {
      await favouriteService.unlike(_id);
      dispatchRemoveFavorite(_id);
    } catch (error) {
      const e = Promise.resolve(error);
      message.error(getResponseError(e));
    }
  }

  render() {
    const { searching } = this.props;
    const { query } = this.state;
    return (
      <>
        <Head>
          <title>My Favorite </title>
        </Head>
        <div className="favorite-page">
          <PageHeader title="My Favorites" />
          <Loader spinning={searching} />
          <FavouritePerformerGrid
            {...this.props}
            query={query}
            dislike={this.dislike.bind(this)}
            setFilter={this.setFilter.bind(this)}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user.favourites,
  countries: state.settings.countries
});
const mapDispatchs = { getFavoritePerformers, removeFavorite };
export default connect(mapStateToProps, mapDispatchs)(MyFavoutitePage);
