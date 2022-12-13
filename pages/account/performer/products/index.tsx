import React, { PureComponent } from 'react';
import { Button, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Router from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';
import { getMyProducts, removeMyProduct } from '@redux/performer/actions';
import { IProduct, ISearch } from 'src/interfaces';
import ProductsTable from '@components/products/products-table';
import { performerService } from '@services/perfomer.service';
import { getResponseError, getSearchData } from '@lib/utils';

import './index.less';

interface IProps {
  data: IProduct[];
  total: number;
  searching: boolean;
  success: boolean;
  getMyProducts: Function;
  removeMyProduct: Function;
}

interface IStates extends ISearch {
  filter?: any;
}

class PerformerProductsPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      filter: {}
    };
  }

  componentDidMount() {
    const { getMyProducts: dispatchGetMyProducts } = this.props;
    dispatchGetMyProducts({ ...this.state });
  }

  componentDidUpdate(prevProps: IProps, prevStates: IStates) {
    const { getMyProducts: dispatchGetMyProducts } = this.props;
    if (prevStates !== this.state) {
      dispatchGetMyProducts({ ...this.state });
    }
  }

  onChange(pagination, filters, sorter) {
    const oldState = this.state;
    this.setState(getSearchData(pagination, filters, sorter, oldState));
  }

  async onRemove(id: string) {
    const { removeMyProduct: dispatchRemoveMyProduct } = this.props;
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return false;
    }

    try {
      await performerService.removeProduct(id);
      message.success('Removed!');
      dispatchRemoveMyProduct(id);
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    }
    return {};
  }

  render() {
    const { data, searching, total } = this.props;
    const { limit } = this.state;

    return (
      <>
        <Head>
          <title>My Products</title>
        </Head>
        <div className="performer-products-page">
          <div className="ant-page-header">
            <PageHeader
              title="My Product"
              extra={(
                <Button
                  type="primary"
                  onClick={() => Router.push('/account/performer/products/add')}
                >
                  Add new Product
                </Button>
            )}
            />

          </div>
          <ProductsTable
            products={data}
            searching={searching}
            total={total}
            onChange={this.onChange.bind(this)}
            pageSize={limit}
            remove={this.onRemove.bind(this)}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.assets.products
});
const mapDispatch = { getMyProducts, removeMyProduct };
export default connect(mapStateToProps, mapDispatch)(PerformerProductsPage);
