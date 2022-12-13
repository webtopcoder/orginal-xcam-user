import React, { PureComponent } from 'react';
import Head from 'next/head';
import Router, { withRouter, NextRouter } from 'next/router';
import { connect } from 'react-redux';
import { IPerformer, IPerformSearch } from 'src/interfaces';
import PerformerGrid from '@components/performer/performer-grid';
import {
  searchPerformer,
  updatePerformerFavourite
} from '@redux/performer/actions';
import Error from 'pages/_error';
import {
  Button, Row, Col, message
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { GENNDER_PERFORMER } from '@services/perfomer.service';
import { favouriteService } from 'src/services';
import { getResponseError } from 'src/lib';

import './index.less';
import { SocketContext } from 'src/socket';

interface Props {
  success: boolean;
  searching: boolean;
  loggedIn: boolean;
  data: IPerformer[];
  error: any;
  router: NextRouter;
  searchPerformer: Function;
  total: number;
  updatePerformerFavourite: Function;
}

interface States {
  query: IPerformSearch;
  sort?: {
    name: string;
    sortBy?: string;
  };
}

const initQueryState: IPerformSearch = {
  offset: 0,
  limit: 100,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

const focusStyle: React.CSSProperties = {
  color: '#ff2977',
  backgroundColor: '#fff',
  borderColor: '#ff2977'
};

class PerformerTagPage extends PureComponent<Props, States> {
  private socket;

  constructor(props: Props) {
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

  componentDidUpdate(prevProps: Props) {
    const { router, loggedIn } = this.props;
    if (router.query !== prevProps.router.query) {
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
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavourite
    } = this.props;
    try {
      await favouriteService.favorite(_id, isFavorite);
      dispatchUpdatePerformerFavourite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      message.error(getResponseError(e));
    }
  }

  search = () => {
    const { searchPerformer: dispatchSearchPerformer, router } = this.props;
    const { query } = this.state;
    dispatchSearchPerformer({ ...router.query, ...query });
  }

  filter(name: string, value: any) {
    const { router } = this.props;
    const { query } = this.state;
    Router.push({
      pathname: '/tag',
      query: {
        ...router.query,
        ...query,
        [name]: value
      }
    });
  }

  render() {
    const { router } = this.props;
    const { query } = this.state;
    const { tags } = router.query;
    if (!router.query.tags) return <Error statusCode={404} />;

    return (
      <>
        <Head>
          <title>
            Models -
            {tags}
          </title>
        </Head>
        <div className="">
          <PageHeader title={tags} />
          <Row align="middle" justify="center" className="filter">
            <Col span={24}>
              {GENNDER_PERFORMER.map((gender) => (
                <Button
                  key={gender}
                  onClick={this.filter.bind(this, 'gender', gender)}
                  type="dashed"
                  style={gender === query.gender ? { ...focusStyle } : {}}
                >
                  {gender}
                </Button>
              ))}
            </Col>
          </Row>
          <PerformerGrid
            {...this.props}
            {...query}
            setFilter={this.filter.bind(this)}
            onLike={this.onLike.bind(this)}
            isPage
          />
        </div>
      </>
    );
  }
}

PerformerTagPage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  ...state.performer.performers
});
const mapDispatch = { searchPerformer, updatePerformerFavourite };
export default withRouter(
  connect(mapStateToProps, mapDispatch)(PerformerTagPage)
);
