import React, { PureComponent } from 'react';
import { Button, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Router from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';
import {
  getPayoutRequest,
  removePayoutRequest
} from '@redux/performer/actions';
import { ISearch, PayoutRequestInterface } from 'src/interfaces';
import PayoutRequestList from 'src/components/payout-request/table';
import { getResponseError, getSearchData } from '@lib/utils';

import './index.less';

interface IProps {
  data: PayoutRequestInterface[];
  total: number;
  error: any;
  searching: boolean;
  success: boolean;
  getPayoutRequest: Function;
  removePayoutRequest: Function;
}

interface IStates extends ISearch {
  filter?: any;
}

class PerformerPayoutRequestPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc'
    };
  }

  componentDidMount() {
    const { getPayoutRequest: dispatchGetPayoutRequest } = this.props;
    dispatchGetPayoutRequest({ ...this.state });
  }

  componentDidUpdate(preProps: IProps, prevStates: IStates) {
    const { getPayoutRequest: dispatchGetPayoutRequest, error } = this.props;
    if (prevStates !== this.state) {
      dispatchGetPayoutRequest({ ...this.state });
    }

    if (error && error !== preProps.error) {
      message.error(getResponseError(error));
    }
  }

  onChange(pagination, filters, sorter) {
    const oldState = this.state;
    this.setState(getSearchData(pagination, filters, sorter, oldState));
  }

  render() {
    const { data, searching, total } = this.props;
    const { limit } = this.state;

    return (
      <>
        <Head>
          <title>Payout Request</title>
        </Head>
        <div className="payout-request-page">
          <PageHeader title="Payout Request" />
          <div className="ant-page-header">
            <Button
              type="primary"
              onClick={() => Router.push('/account/performer/payout-requests/create')}
            >
              Create new Payout Request
            </Button>
          </div>
          <PayoutRequestList
            payouts={data}
            searching={searching}
            total={total}
            onChange={this.onChange.bind(this)}
            pageSize={limit}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.payout
});
const mapDispatch = { getPayoutRequest, removePayoutRequest };
export default connect(
  mapStateToProps,
  mapDispatch
)(PerformerPayoutRequestPage);
