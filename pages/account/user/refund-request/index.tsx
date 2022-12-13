import { message, Button } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { refundRequestService } from 'src/services';
import { IRefundRequest, ISearch } from 'src/interfaces';
import { getResponseError, getSearchData } from '@lib/utils';
import Loader from 'src/components/common/base/loader';
import { RefundRequestTable } from 'src/components/refund-request/table-list';
import Link from 'next/link';

interface IProps {}
interface IState extends ISearch {
  loading: boolean;
  requests: IRefundRequest[];
  filter?: {};
  total: number;
}

class RefundRequestPage extends PureComponent<IProps, IState> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      requests: [],
      limit: 10,
      total: 0,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      filter: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async onChange(pagination, filters, sorter) {
    const oldState = this.state;
    await this.setState(getSearchData(pagination, filters, sorter, oldState));
    this.getData();
  }

  async getData() {
    const {
      filter, limit, offset, sortBy, sort
    } = this.state;
    try {
      const resp = await refundRequestService.search({
        ...filter,
        limit,
        offset,
        sortBy,
        sort
      });
      await this.setState({ requests: resp.data.data, total: resp.data.total });
    } catch (e) {
      const err = Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      loading, requests, total, limit
    } = this.state;
    return (
      <>
        <Head>
          <title>Refund Requests</title>
        </Head>
        <div className="transaction-history-page">
          <PageHeader title="Refund Request" />
          <div>
            <div><Button><Link href="/account/user/refund-request/request"><a>New Request</a></Link></Button></div>
            {loading ? (
              <Loader />
            ) : (
              <RefundRequestTable
                rowKey="_id"
                requests={requests}
                pageSize={limit}
                total={total}
                onChange={this.onChange.bind(this)}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default RefundRequestPage;
