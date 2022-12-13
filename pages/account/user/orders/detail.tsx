import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { IOrder, IUIConfig } from 'src/interfaces';
import { orderService, productService } from 'src/services';
import { connect } from 'react-redux';
import { getResponseError } from '@lib/utils';
import Router from 'next/router';
import { FormOrder } from 'src/components/order/form-order';

interface IProps {
  id: string;
  ui: IUIConfig;
}

interface IStates {
  order: IOrder;
  loading: boolean;
  isUpdating: boolean;
}

class UserOrderDetailPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    return ctx.query;
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      order: null,
      loading: false,
      isUpdating: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { id } = this.props;
    try {
      this.setState({ loading: true });
      const order = await orderService.userFindDetails(id);
      this.setState({
        order: order.data
      });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ loading: false });
    }
  }

  async submit({ shippingCode, deliveryStatus }) {
    const { id } = this.props;
    if (!shippingCode) {
      message.error('Missing shipping code');
      return;
    }
    try {
      this.setState({ isUpdating: true });
      await orderService.update(id, {
        deliveryStatus,
        shippingCode
      });
      message.success('Changes saved.');
      Router.back();
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ isUpdating: false });
    }
  }

  async download() {
    const { order } = this.state;
    const resp = await productService.getDownloadLink(order.productId);
    if (!resp.data?.downloadUrl) {
      return message.error('Something went wrong!');
    }

    return window.open(resp.data?.downloadUrl, '_blank');
  }

  render() {
    const { order, isUpdating, loading } = this.state;
    return (
      <>
        <Head>
          <title>
            My Order -
            {order?.orderNumber}
          </title>
        </Head>
        <div className="main-container">
          <PageHeader title="Order detail" />
          <FormOrder
            order={order}
            loading={loading}
            isUpdating={isUpdating}
            onFinish={this.submit.bind(this)}
            onDownloadClick={this.download.bind(this)}
            isUser
            disableUpdate
          />
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ui: state.ui
});

export default connect(mapStates)(UserOrderDetailPage);
