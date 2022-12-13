import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductForm from '@components/products/products-form';
import { performerService } from '@services/perfomer.service';
import { getResponseError } from '@lib/utils';
import { IPerformer } from 'src/interfaces';
import Router from 'next/router';

import './index.less';

interface IProps {
  performer: IPerformer;
}

interface IStates {
  onSubmit: boolean;
}

class CreatePerformerProductsPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      onSubmit: false
    };
  }

  async onFinish(data) {
    const { performer } = this.props;
    try {
      this.setState({ onSubmit: true });
      await performerService.createProduct(
        '/performer/performer-assets/products',
        { ...data, performerId: performer._id }
      );
      message.success('Add product success.');
      Router.back();
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  render() {
    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>New Product</title>
        </Head>
        <div className="performer-products-page">
          <PageHeader title="Create new Product" />
          <ProductForm loading={onSubmit} product={{}} onFinish={this.onFinish.bind(this)} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(CreatePerformerProductsPage);
