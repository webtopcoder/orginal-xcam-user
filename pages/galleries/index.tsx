/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import {
  message, Alert, Row, Col
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { getResponseError } from '@lib/utils';
import {
  IPerformer,
  IPerformerGallery,
  IResponse,
  ITransaction
} from 'src/interfaces';
import { galleryService, performerService } from 'src/services';
import { connect } from 'react-redux';
import Router, { withRouter, NextRouter } from 'next/router';
import {
  getPerformerGalleries,
  purchaseGallerySuccess,
  addPerformerGalleries
} from '@redux/galleries/actions';
import { updateCurrentUserBalance } from '@redux/user/actions';
import InfiniteScroll from 'react-infinite-scroller';
import ModalBuyAssets from 'src/components/performer-assets/common/modal-buy-assets';
import GalleryCard from '@components/galleries/gallery-card';

interface IProps {
  router: NextRouter;
  performer: IPerformer;
  getPerformerGalleries: Function;
  addPerformerGalleries: Function;
  updateCurrentUserBalance: Function;
  purchaseGallerySuccess: Function;
  data: IPerformerGallery[];
  total: number;
  success: boolean;
  searching: boolean;
  ids: string[];
  loggedIn: boolean;
}
interface IStates {
  limit: number;
  offset: number;
}

class GalleriesPage extends PureComponent<IProps, IStates> {
  private ref;

  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      if (query.performer) {
        return { performer: JSON.parse(query.performer) };
      }
      if (query.username) {
        const resp = await performerService.details(query.username);
        return { performer: resp.data };
      }

      return {};
    } catch (error) {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = { limit: 60, offset: 0 };
  }

  componentDidMount() {
    this.getGalleries();
  }

  onPurchaseSuccess(data: IResponse<ITransaction>, id: string) {
    const {
      updateCurrentUserBalance: dispatchUpdateCurrentUserBalance,
      purchaseGallerySuccess: dispatchPurchaseGallerySuccess
    } = this.props;
    dispatchUpdateCurrentUserBalance(-data.data.totalPrice);
    dispatchPurchaseGallerySuccess(id);
  }

  async getGalleries() {
    const {
      performer,
      router,
      getPerformerGalleries: dispatchGetPerformerGalleries
    } = this.props;
    try {
      const performerId = performer ? performer._id : '';
      dispatchGetPerformerGalleries({
        ...this.state,
        ...router.query,
        performerId
      });
    } catch (error) {
      const err = await Promise.resolve(error);
      message.error(getResponseError(err));
    }
  }

  async loadMore() {
    try {
      let { offset } = this.state;
      const { limit } = this.state;
      const {
        router: { query },
        performer,
        addPerformerGalleries: dispatchAddPerformerGalleries
      } = this.props;
      const performerId = performer ? performer._id : '';
      offset = limit + offset;
      const resp = await galleryService.search(
        {
          ...query,
          performerId,
          limit,
          offset
        },
        false
      );
      dispatchAddPerformerGalleries(resp.data.data);
      this.setState({ offset });
    } catch (error) {
      const err = await Promise.resolve(error);
      message.error(getResponseError(err));
    }
  }

  purchase(item: IPerformerGallery) {
    if (item.isBought) {
      return Router.push(
        {
          pathname: '/photos',
          query: {
            data: JSON.stringify(item),
            id: item._id
          }
        },
        `/photos/${item._id}`
      );
    }
    this.ref.showModalBuyAssets(item, 'gallery');
    return {};
  }

  render() {
    const {
      performer,
      router: { query },
      searching,
      ids,
      total,
      data,
      success
    } = this.props;
    const hasMore = ids.length < total;
    return (
      <>
        <Head>
          <title>
            {performer?.username ? `${performer?.username}'s ` : ''}
            Galleries
            {' '}
          </title>
        </Head>
        <div className="main-container">
          <PageHeader
            title={`${performer?.username ? `${performer?.username}'s ` : ''}
            Galleries`}
          />
          {query.username && !performer && (
            <Alert message="Performer not found." banner />
          )}
          <div className="galleries-page">
            {searching ? (
              <p>Loading...</p>
            ) : success ? (
              <InfiniteScroll
                loadMore={this.loadMore.bind(this)}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
              >
                <Row gutter={20}>
                  {ids && ids.length > 0 ? (
                    ids.map(
                      (id) => data[id].numOfItems > 0 && (
                      <Col xl={4} md={6} sm={8} xs={24} key={id}>
                        <GalleryCard
                          gallery={data[id]}
                          onHandlePurchase={this.purchase.bind(this)}
                        />
                      </Col>
                      )
                    )
                  ) : (
                    <p className="no-items-found">No gallery found.</p>
                  )}
                </Row>
              </InfiniteScroll>
            ) : (
              <p>Server error</p>
            )}
          </div>
          <ModalBuyAssets
            ref={(ref) => { this.ref = ref; }}
            onSucess={this.onPurchaseSuccess.bind(this)}
            {...this.props}
          />
        </div>
      </>
    );
  }
}
const mapStates = (state) => ({
  ...state.galleries,
  loggedIn: state.auth.loggedIn
});
const mapDispatchs = {
  getPerformerGalleries,
  addPerformerGalleries,
  updateCurrentUserBalance,
  purchaseGallerySuccess
};

export default withRouter(connect(mapStates, mapDispatchs)(GalleriesPage));
