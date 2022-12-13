import React, { PureComponent } from 'react';
import {
  DatePicker,
  Space,
  Statistic,
  Row,
  Col,
  Select
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import { getStudioEarning } from '@redux/studio/actions';
import { ISearch } from 'src/interfaces';
import EarningHistoryTable from '@components/performer/earning-history-table';
import { getSearchData } from 'src/lib';
import { IEarning } from 'src/interfaces/earning';
import './index.less';

const Option = Select;
interface IProps {
  data: IEarning[];
  // error: any;
  stats: any;
  // studio: IStudio;
  total: number;
  searching: boolean;
  success: boolean;
  getStudioEarning: Function;
}

interface IStates extends ISearch {
  fromDate?: string;
  toDate?: string;
  payoutStatus?: string;
}

class PerformerProductsPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 10,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      payoutStatus: ''
    };
  }

  componentDidMount() {
    const { getStudioEarning: dispatchGetStudioEarning } = this.props;
    dispatchGetStudioEarning(this.state);
  }

  componentDidUpdate(_, prevStates: IStates) {
    const { getStudioEarning: dispatchGetStudioEarning } = this.props;
    if (prevStates !== this.state) {
      dispatchGetStudioEarning(this.state);
    }
  }

  onChange(pagination, filters, sorter) {
    const oldState = this.state;
    this.setState(getSearchData(pagination, filters, sorter, oldState));
  }

  setDateRanger(_, dateStrings: string[]) {
    if (!dateStrings[0] && !dateStrings[1]) {
      this.setState({
        toDate: null,
        fromDate: null,
        sortBy: 'createdAt',
        sort: 'desc'
      });
      return;
    }

    if (!dateStrings[0] || !dateStrings[1]) return;
    this.setState({ fromDate: new Date(dateStrings[0]).toISOString(), toDate: new Date(dateStrings[1]).toISOString() });
  }

  filterByStatus(status: string) {
    this.setState({ payoutStatus: status });
  }

  render() {
    const {
      data,
      searching,
      total,
      // studio,
      stats,
      success
    } = this.props;
    const { limit, payoutStatus } = this.state;
    const statuses = [
      {
        key: 'pending',
        text: 'Pending'
      },
      {
        key: 'approved',
        text: 'Approved'
      },
      {
        key: 'rejected',
        text: 'Rejected'
      },
      {
        key: 'done',
        text: 'Paid'
      }
    ];
    return (
      <>
        <Head>
          <title>Earnings</title>
        </Head>
        <div className="earning-history-page">
          <PageHeader title="My Earning" />
          <Row className="ant-page-header">
            <Col md={6} xs={24}>
              {/* <Space>
                <span>My Balance:</span>
                <span style={{ color: defaultColor.primaryColor }}>
                  {studio.balance?.toFixed(2)}
                  {' '}
                  tokens
                </span>
              </Space> */}
              <div>
                <DatePicker.RangePicker
                  disabledDate={() => searching}
                  onCalendarChange={this.setDateRanger.bind(this)}
                />
              </div>
            </Col>
            {statuses.length ? (
              <Col md={8} xs={24}>
                <Select<string>
                  style={{ width: '90%' }}
                  onSelect={(val) => this.filterByStatus(val)}
                  placeholder="Select status"
                  value={payoutStatus}
                >
                  <Option value="">All</Option>
                  {statuses.map((s) => (
                    <Option key={s.key} value={s.key}>
                      {s.text || s.key}
                    </Option>
                  ))}
                </Select>
              </Col>
            ) : null}
            <Col md={10} xs={24}>
              {success && stats && (
                <Space size="large">
                  <Statistic
                    title="Tokens received[Studio + Models]"
                    value={stats.data?.studioToModelTotalGrossPrice}
                    precision={2}
                  />
                  <Statistic
                    title="Studio share of tokens"
                    value={stats.data?.studioToModelTotalGrossPrice - stats.data?.studioToModelTotalNetPrice}
                    precision={2}
                  />
                  <Statistic
                    title="Model share of tokens"
                    value={stats.data?.studioToModelTotalNetPrice}
                    precision={2}
                  />
                  <Statistic
                    title="Paid Tokens"
                    value={stats.data?.paidPrice}
                    precision={2}
                  />
                  <Statistic
                    title="Unpaid Tokens"
                    value={stats.data?.studioToModelTotalUnpaidGrossPrice}
                    precision={2}
                  />
                </Space>
              )}
            </Col>
          </Row>
          <EarningHistoryTable
            earnings={data}
            searching={searching}
            total={total}
            pageSize={limit}
            onChange={this.onChange.bind(this)}
            role_data="studio"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.studio.earning,
  studio: state.studio.current
});
const mapDispatch = { getStudioEarning };
export default connect(mapStateToProps, mapDispatch)(PerformerProductsPage);
