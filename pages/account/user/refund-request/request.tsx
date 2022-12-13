import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import RefundRequestForm from '@components/refund-request/form';
import { performerService, orderService, refundRequestService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformer, IOrder } from 'src/interfaces';
import Router from 'next/router';

interface IProps {
}

interface IStates {
  onSubmit: boolean;
  performers: IPerformer[];
  products: IOrder[];
  selectedPerformerId: string
}

class NewRefundRequestPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      onSubmit: false,
      performers: [],
      selectedPerformerId: '',
      products: []
    };
  }

  componentDidMount() {
    this.getPerformers();
  }

  onChangePerformer(performerId) {
    this.setState({ selectedPerformerId: performerId }, () => {
      this.getProducts();
    });
  }

  async onFinish(data) {
    try {
      this.setState({ onSubmit: true });
      await refundRequestService.create(data);
      message.success('Your request has been sent');
      Router.back();
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  async getPerformers() {
    try {
      const resp = await (await performerService.search({ limit: 3000 })).data;
      resp && this.setState({ performers: resp.data });
    } catch (e) {
      const err = Promise.resolve(e);
      message.error(getResponseError(err));
    }
  }

  async getProducts() {
    try {
      const { selectedPerformerId } = this.state;
      if (!selectedPerformerId) { return; }
      const resp = await (await orderService.userSearch({ limit: 3000, deliveryStatus: 'delivered', performerId: selectedPerformerId })).data;
      resp && this.setState({ products: resp.data });
    } catch (e) {
      const err = Promise.resolve(e);
      message.error(getResponseError(err));
    }
  }

  render() {
    const { onSubmit, performers, products } = this.state;
    return (
      <>
        <Head>
          <title>New Refund Request</title>
        </Head>
        <div className="performer-videos-page">
          <PageHeader title="Refund request" />
          <RefundRequestForm
            onChangePerformer={this.onChangePerformer.bind(this)}
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            performers={performers}
            products={products}
          />
        </div>
      </>
    );
  }
}

export default NewRefundRequestPage;
