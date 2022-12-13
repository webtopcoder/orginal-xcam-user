/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
import {
  Row, Alert, message, Col
} from 'antd';
import { getResponseError } from '@lib/utils';
import Head from 'next/head';
import PageHeader from '@components/common/layout/page-header';
import {
  getPerformerProducts,
  loadMorePerformerProduct,
  purchaseProductSuccess
} from '@redux/products/actions';
import { updateCurrentUserBalance } from '@redux/user/actions';
import { connect } from 'react-redux';
import {
  IProduct,
  IPerformer,
  IDataResponse,
  IResponse,
  ITransaction
} from 'src/interfaces';
import { PureComponent } from 'react';
import ProductCard from 'src/components/products/product-card';
import { withRouter, NextRouter } from 'next/router';
import { performerService, productService } from 'src/services';
import InfiniteScroll from 'react-infinite-scroller';
import ModalBuyAssets from 'src/components/performer-assets/common/modal-buy-assets';

interface IProps {
  router: NextRouter;
  performer: IPerformer;
  getPerformerProducts: Function;
  loadMorePerformerProduct: Function;
  updateCurrentUserBalance: Function;
  purchaseProductSuccess: Function;
  data: IProduct[];
  total: number;
  searching: boolean;
  success: boolean;
  ids: string[];
  loggedIn: boolean;
}
interface IStates {
  limit: number;
  offset: number;
}

class ProductsPage extends PureComponent<IProps, IStates> {
  private ref;

  static async getInitialProps({ ctx }) {
    const { query } = ctx;
    try {
      if (query.performer) {
        return {
          performer: JSON.parse(query.performer)
        };
      }
      if (query.username) {
        const resp = await performerService.details(query.username);
        return {
          performer: resp.data
        };
      }

      return {};
    } catch (error) {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = { limit: 12, offset: 0 };
  }

  componentDidMount() {
    this.getProducts();
  }

  onPurchaseSuccess(data: IResponse<ITransaction>, id: string) {
    updateCurrentUserBalance(-data.data.totalPrice);
    purchaseProductSuccess(id);
  }

  async getProducts() {
    const { router, performer, getPerformerProducts: dispatchGetPerformerProducts } = this.props;
    const performerId = performer ? performer._id : '';
    await dispatchGetPerformerProducts({
      ...router.query,
      ...this.state,
      performerId
    });
  }

  async infinityScroll() {
    try {
      const { limit } = this.state;
      let { offset } = this.state;
      offset = limit + offset;
      const { router, performer, loadMorePerformerProduct: dispatchLoadMorePerformerProduct } = this.props;
      const performerId = performer ? performer._id : '';
      const resp: IResponse<IDataResponse<
        IProduct
      >> = await productService.search({
        ...router.query,
        limit,
        offset,
        performerId
      });
      dispatchLoadMorePerformerProduct(resp.data.data);
      this.setState({ offset });
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    }
  }

  purchase(item: IProduct) {
    if (item.type === 'digital' && item.isBought) {
      return message.success('You have bought this product, please check your email to get link.');
    }
    this.ref.showModalBuyAssets(item, 'product');
    return {};
  }

  render() {
    const {
      data,
      total,
      searching,
      success,
      performer,
      router: { query },
      ids
    } = this.props;
    const hasMore = ids.length < total;
    const username = performer && performer.username;
    return (
      <>
        <Head>
          <title>
            {' '}
            {username || ''}
            {' '}
            Products
          </title>
        </Head>
        <div className="main-container">
          <PageHeader title={`${username || ''} Products`} />
          {success && (
            <div className="products-page">
              {query.username && !performer && (
              <Alert message="Performer not found." banner />
              )}
              {searching ? (
                <p>Loading...</p>
              ) : (
                <InfiniteScroll
                  loadMore={this.infinityScroll.bind(this)}
                  hasMore={hasMore}
                  loader={<p>Loading...</p>}
                >
                  <Row gutter={20}>
                    {ids && ids.length > 0 ? (
                      ids.map((id) => (
                        <Col xl={4} md={6} sm={8} xs={24} key={id}>
                          <ProductCard
                            product={data[id]}
                            onHandlePurchase={this.purchase.bind(this)}
                          />
                        </Col>
                      ))
                    ) : (
                      <p className="no-items-found">No product found.</p>
                    )}
                  </Row>
                </InfiniteScroll>
              )}
            </div>
          )}
          <ModalBuyAssets
            {...this.props}
            ref={(ref) => (this.ref = ref)}
            onSucess={this.onPurchaseSuccess.bind(this)}
          />
        </div>
      </>
    );
  }
}
const mapStates = (state) => ({
  ...state.product,
  loggedIn: state.auth.loggedIn
});
const mapDispatch = {
  getPerformerProducts,
  loadMorePerformerProduct,
  updateCurrentUserBalance,
  purchaseProductSuccess
};
export default withRouter(connect(mapStates, mapDispatch)(ProductsPage));
