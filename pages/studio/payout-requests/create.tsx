import React from 'react';
import Head from 'next/head';
import PayoutRequestForm from '@components/payout-request/form';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { payoutRequestService } from 'src/services';
import { Moment } from 'moment';
import Router from 'next/router';

import './index.less';

interface Props {}

interface States {
  submitting: boolean;
  // success: boolean;
}

class PayoutRequestCreatePage extends React.PureComponent<Props, States> {
  static layout = 'primary';

  static authenticate = true;

  constructor(props: Props) {
    super(props);
    this.state = {
      submitting: false
      // success: false
    };
  }

  async submit(data: {
    date: Moment[];
    paymentAccountType: string;
    requestNote: string;
  }) {
    if (!data.date[0] || !data.date[1]) return;

    try {
      this.setState({ submitting: true });
      const body = {
        paymentAccountType: data.paymentAccountType,
        requestNote: data.requestNote,
        sourceType: 'studio',
        fromDate: data.date[0],
        toDate: data.date[1]
      };
      await payoutRequestService.create(body, 'studio');
      message.success('Create Success!');
      Router.push('/studio/payout-requests');
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(error);
    } finally {
      this.setState({ submitting: false });
    }
  }

  render() {
    const { submitting } = this.state;
    return (
      <>
        <Head>
          <title>Payout Request</title>
        </Head>
        <div className="payout-request-page">
          <PageHeader title="Create a Payout Request" />
          <PayoutRequestForm
            payout={{}}
            submit={this.submit.bind(this)}
            submitting={submitting}
            // eslint-disable-next-line jsx-a11y/aria-role
            role="studio"
          />
        </div>
      </>
    );
  }
}

export default PayoutRequestCreatePage;
