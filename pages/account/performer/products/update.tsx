import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductForm from '@components/products/products-form';
import { performerService } from '@services/perfomer.service';
import { getResponseError } from '@lib/utils';
import { IPerformer, IProduct } from 'src/interfaces';
import { IResponse } from '@services/api-request';
import { productService } from '@services/product.service';
import nextCookie from 'next-cookies';
import Error from '../../../_error';

import './index.less';

interface IProps {
  performer: IPerformer;
  product: IProduct;
}

interface IStates {
  onSubmit: boolean;
}

class PerformerProductsPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    try {
      const {
        query: { product, id }
      } = ctx;
      if (process.browser && product) {
        return {
          product: JSON.parse(product)
        };
      }

      const { token } = nextCookie(ctx);
      const resp: IResponse<IProduct> = await productService.details(id, {
        Authorization: token
      });
      return {
        product: resp.data
      };
    } catch (e) {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      onSubmit: false
    };
  }

  async onFinish(data) {
    const { performer, product } = this.props;
    try {
      this.setState({ onSubmit: true });
      await performerService.updateProduct(
        `/performer/performer-assets/products/${product._id}`,
        { ...data, performerId: performer._id }
      );
      message.success('Update product success.');
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return <Error statusCode={404} />;

    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>
            Update Product -
            {' '}
            {product && product.name}
          </title>
        </Head>
        <div className="performer-products-page">
          <PageHeader title="Update Product" />
          <ProductForm
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            product={product}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(PerformerProductsPage);
