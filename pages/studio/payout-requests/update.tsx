import React from 'react';
import Head from 'next/head';
import PayoutRequestForm from '@components/payout-request/form';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { payoutRequestService } from 'src/services';
import { Moment } from 'moment';
import { PayoutRequestInterface } from 'src/interfaces';
import nextCookie from 'next-cookies';
import Error from 'pages/_error';

import './index.less';

interface Props {
  payout: PayoutRequestInterface;
}

interface States {
  submitting: boolean;
}

class PayoutRequestCreatePage extends React.PureComponent<Props, States> {
  static layout = 'primary';

  static authenticate = true;

  static async getInitialProps({ ctx }) {
    try {
      const {
        query: { data, id }
      } = ctx;
      if (process.browser && data) {
        return {
          payout: JSON.parse(data)
        };
      }

      const { token } = nextCookie(ctx);
      const resp = await payoutRequestService.detail(
        id,
        {
          Authorization: token
        },
        'studio'
      );
      return {
        payout: resp.data
      };
    } catch {
      return {};
    }
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      submitting: false
    };
  }

  async submit(data: {
    date: Moment[];
    paymentAccountType: string;
    requestNote: string;
  }) {
    if (!data.date[0] || !data.date[1]) return;
    const { payout } = this.props;

    try {
      this.setState({ submitting: true });
      const body = {
        paymentAccountType: data.paymentAccountType,
        requestNote: data.requestNote,
        fromDate: data.date[0],
        toDate: data.date[1]
      };
      await payoutRequestService.update(payout._id, body, 'studio');
      message.success('Success!');
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(error);
    } finally {
      this.setState({ submitting: false });
    }
  }

  render() {
    const { payout } = this.props;
    const { submitting } = this.state;
    if (!payout) return <Error statusCode={404} />;

    return (
      <>
        <Head>
          <title>Payout Request</title>
        </Head>
        <div className="payout-request-page">
          <PageHeader title="Update a Payout Request" />
          <PayoutRequestForm
            payout={payout}
            submit={this.submit.bind(this)}
            submitting={submitting}
          />
        </div>
      </>
    );
  }
}

export default PayoutRequestCreatePage;
