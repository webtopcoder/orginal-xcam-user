import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPaymentTokenHistroy } from 'src/redux/user/actions';
import { ISearch, IPaymentTokenHistory } from 'src/interfaces';
import { getSearchData } from '@lib/utils';
import Head from 'next/head';
import { DatePicker } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import PaymentTokenHistoryTable from '@components/user/payment-token-history-table';
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
      sort: 'desc'
    };
  }

  componentDidMount() {
    const { getPaymentTokenHistroy: dispatchGetPaymentTokenHistroy } = this.props;
    dispatchGetPaymentTokenHistroy({ ...this.state });
  }

  componentDidUpdate(prevProps: IProps, prevStates: IStates) {
    const { getPaymentTokenHistroy: dispatchGetPaymentTokenHistroy } = this.props;
    if (prevStates !== this.state) {
      dispatchGetPaymentTokenHistroy({ ...this.state });
    }
  }

  onChange(pagination, filters, sorter) {
    const oldState = this.state;
    this.setState(getSearchData(pagination, filters, sorter, oldState));
  }

  onDateChange(_, dateStrings: string[]) {
    const oldState = this.state;
    this.setState({
      ...oldState,
      fromDate: dateStrings[0],
      toDate: dateStrings[1]
    });
  }

  render() {
    const { data, searching, total } = this.props;
    const { limit } = this.state;
    const paymentHistoryprops = {
      paymentTokenHistory: data,
      searching,
      total,
      onChange: this.onChange.bind(this),
      pageSize: limit
    };
    return (
      <>
        <Head>
          <title>Payment Token History</title>
        </Head>
        <div className="payment-token-history">
          <PageHeader title="Payment Token History" />
          <div className="ant-page-header">
            <DatePicker.RangePicker onChange={this.onDateChange.bind(this)} />
          </div>
          <PaymentTokenHistoryTable {...paymentHistoryprops} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.user.paymentTokenHistory });
const mapDispatch = { getPaymentTokenHistroy };
export default connect(mapStateToProps, mapDispatch)(PaymentTokenHistory);
