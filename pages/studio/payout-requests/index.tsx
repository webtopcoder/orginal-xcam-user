import React, { PureComponent } from 'react';
import { Button, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Router from 'next/router';
import Head from 'next/head';
import { connect } from 'react-redux';
import {
  getStudioPayoutRequest,
  removeStudioPayoutRequest
} from '@redux/studio/actions';
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
  getStudioPayoutRequest: Function;
  removePayoutRequest: Function;
}

interface IStates extends ISearch {
  filter?: any;
}

class PerformerPayoutRequestPage extends PureComponent<IProps, IStates> {
  static authenticate = 'studio';

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
    const { getStudioPayoutRequest: dispatchGetStudioPayoutRequest } = this.props;
    dispatchGetStudioPayoutRequest(this.state);
  }

  componentDidUpdate(preProps: IProps, prevStates: IStates) {
    const { getStudioPayoutRequest: dispatchGetStudioPayoutReq, error } = this.props;
    if (prevStates !== this.state) {
      dispatchGetStudioPayoutReq(this.state);
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
              onClick={() => Router.push('/studio/payout-requests/create')}
            >
              Create new Payout Request
            </Button>
          </div>
          {data ? (
            <PayoutRequestList
              payouts={data}
              searching={searching}
              total={total}
              onChange={this.onChange.bind(this)}
              pageSize={limit}
              // eslint-disable-next-line jsx-a11y/aria-role
              role="studio"
            />
          ) : (
            <p>No request found.</p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.studio.studioPayout
});
const mapDispatch = { getStudioPayoutRequest, removeStudioPayoutRequest };
export default connect(
  mapStateToProps,
  mapDispatch
)(PerformerPayoutRequestPage);
