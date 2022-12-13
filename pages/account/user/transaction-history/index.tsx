import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { transactionService } from 'src/services';
import { ITransaction, ISearch } from 'src/interfaces';
import { getResponseError, getSearchData } from '@lib/utils';
import Loader from 'src/components/common/base/loader';
import { TransactionHistoryTable } from 'src/components/transaction/table-list';
import './index.less';

interface IProps {}
interface IState extends ISearch {
  loading: boolean;
  transaction: ITransaction[];
  filter?: {};
  total: number;
}

class TransactionHistoryPage extends PureComponent<IProps, IState> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      transaction: [],
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
      const resp = await transactionService.search({
        ...filter,
        limit,
        offset,
        sortBy,
        sort
      });
      await this.setState({ transaction: resp.data.data, total: resp.data.total });
    } catch (e) {
      const err = Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      loading, transaction, total, limit
    } = this.state;
    return (
      <>
        <Head>
          <title>Transaction History</title>
        </Head>
        <div className="transaction-history-page">
          <PageHeader title="Transaction History" />
          <div>
            {loading ? (
              <Loader />
            ) : (
              <TransactionHistoryTable
                rowKey="_id"
                transactions={transaction}
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
export default TransactionHistoryPage;
