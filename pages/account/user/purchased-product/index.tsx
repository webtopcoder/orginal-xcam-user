import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPaymentTokenHistroy } from 'src/redux/user/actions';
import { ISearch, IPaymentTokenHistory } from 'src/interfaces';
import { getSearchData, getResponseError } from '@lib/utils';
import Head from 'next/head';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import PaymentTokenHistoryTable from '@components/user/payment-token-history-table';
import { productService } from 'src/services';

import { omit } from 'lodash';
import './index.less';

interface IProps {
  data: IPaymentTokenHistory[];
  total: number;
  searching: boolean;
  success: boolean;
  getPaymentTokenHistroy: Function;
  removeMyProduct: Function;
}

interface IStates extends ISearch {
  filter?: any;
  fromDate?: string;
  toDate?: string;
  data: IPaymentTokenHistory[];
  total: number;
  searching: boolean;
}

class PaymentTokenHistory extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      data: [],
      total: 0,
      searching: false
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

  async onDateChange(_, dateStrings: string[]) {
    const oldState = this.state;
    await this.setState({
      ...oldState,
      fromDate: dateStrings[0],
      toDate: dateStrings[1]
    });
    this.getData();
  }

  async getData() {
    const query = omit(this.state, ['data', 'total', 'loading']);
    await this.setState({ searching: true });
    try {
      const resp = await productService.purchased({ ...query });
      await this.setState({ total: resp.data.total, data: resp.data.data });
    } catch (e) {
      return {};
    } finally { await this.setState({ searching: false }); }
    return {};
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    // const { data, searching, total, loading } = this.props;
    const {
      data, total, searching, limit
    } = this.state;
    const paymentHistoryprops = {
      paymentTokenHistory: data,
      total,
      onChange: this.onChange.bind(this),
      pageSize: limit,
      searching
    };
    return (
      <>
        <Head>
          <title>My Purchased Products</title>
        </Head>
        <div className="purchased-product">
          <PageHeader title="Purchased Products" />
          {/* <div className="ant-page-header">
            <DatePicker.RangePicker onChange={this.onDateChange.bind(this)} />
          </div> */}
          <PaymentTokenHistoryTable {...paymentHistoryprops} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.user.paymentTokenHistory });
const mapDispatch = { getPaymentTokenHistroy };
export default connect(mapStateToProps, mapDispatch)(PaymentTokenHistory);
