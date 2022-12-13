import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import { getPerformerRequest } from '@redux/studio/actions';
import { ISearch, PayoutRequestInterface } from 'src/interfaces';
import PayoutRequestList from 'src/components/payout-request/studio-performer-request-table';
import { getResponseError, getSearchData } from '@lib/utils';

import './index.less';

interface IProps {
  data: PayoutRequestInterface[];
  total: number;
  error: any;
  searching: boolean;
  success: boolean;
  getPerformerRequest: Function;
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
      limit: 12,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc'
    };
  }

  componentDidMount() {
    const { getPerformerRequest: dispatchGetPerformerRequest } = this.props;
    dispatchGetPerformerRequest(this.state);
  }

  componentDidUpdate(preProps: IProps, prevStates: IStates) {
    const { getPerformerRequest: dispatchGetPerformerRequest, error } = this.props;
    if (prevStates !== this.state) {
      dispatchGetPerformerRequest(this.state);
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
          <title>Performer Payout Request</title>
        </Head>
        <div className="payout-request-page">
          <PageHeader title="Performer Payout Request" />
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
  ...state.studio.performerRequests
});
const mapDispatch = { getPerformerRequest };
export default connect(
  mapStateToProps,
  mapDispatch
)(PerformerPayoutRequestPage);
