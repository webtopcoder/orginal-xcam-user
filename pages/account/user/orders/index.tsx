import Head from 'next/head';
import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { orderService } from '@services/index';
import { OrderSearchFilter } from '@components/order';
import OrderTableList from '@components/order/table-list';
import { connect } from 'react-redux';
import { getSearchData, getResponseError } from '@lib/utils';

interface IProps {
  performerId: string;
}

class UserOrderPage extends PureComponent<IProps> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    return ctx.query;
  }

  state = {
    pagination: {} as any,
    searching: true,
    list: [] as any,
    limit: 10,
    filter: {} as any,
    sortBy: 'createdAt',
    sort: 'desc'
  };

  async componentDidMount() {
    this.search();
  }

  async handleTableChange(pagination, filters, sorter) {
    const pager = { ...pagination };
    const oldState = this.state;
    pager.current = pagination.current;
    await this.setState(getSearchData(pagination, filters, sorter, oldState));
    this.search(pager.current);
  }

  async handleFilter(filter) {
    await this.setState({ filter });
    this.search();
  }

  async search(page = 1) {
    const {
      filter, limit, sort, sortBy, pagination
    } = this.state;
    try {
      await this.setState({ searching: true });
      const resp = await orderService.userSearch({
        ...filter,
        limit,
        sort,
        sortBy,
        page
      });
      await this.setState({
        list: resp.data.data,
        pagination: {
          ...pagination,
          total: resp.data.total,
          pageSize: limit
        }
      });
    } catch (e) {
      const err = Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ searching: false });
    }
  }

  render() {
    const { list, searching, pagination } = this.state;
    const statuses = [
      {
        key: '',
        text: 'All'
      },
      {
        key: 'created',
        text: 'Created'
      },
      {
        key: 'processing',
        text: 'Processing'
      },
      {
        key: 'shipping',
        text: 'Shipping'
      },
      {
        key: 'delivered',
        text: 'Delivered'
      },
      {
        key: 'refunded',
        text: 'Refunded'
      }
    ];
    return (
      <>
        <Head>
          <title>My Orders</title>
        </Head>
        <div className="order-page">
          <PageHeader title="My Orders" />
          <div>
            <OrderSearchFilter
              statuses={statuses}
              onSubmit={this.handleFilter.bind(this)}
            />
            <OrderTableList
              type="user"
              dataSource={list}
              rowKey="_id"
              loading={searching}
              pagination={pagination}
              onChange={this.handleTableChange.bind(this)}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ui: state.ui
});
export default connect(mapStates)(UserOrderPage);
