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
import { getEarning } from '@redux/performer/actions';
import { ISearch, IPerformer } from 'src/interfaces';
import EarningIndependentTable from '@components/performer/earning-independent-table';
import EarningStudioOperatedTable from '@components/performer/earning-studio-operated-table';
import { getSearchData } from 'src/lib';
import { IEarning } from 'src/interfaces/earning';
import './index.less';

const Option = Select;

interface IProps {
  data: IEarning[];
  error: any;
  stats: any;
  performer: IPerformer;
  total: number;
  searching: boolean;
  success: boolean;
  getEarning: Function;
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
    const { getEarning: dispatchGetEarning } = this.props;
    dispatchGetEarning(this.state);
  }

  componentDidUpdate(_, prevStates: IStates) {
    const { getEarning: dispatchGetEarning } = this.props;
    if (prevStates !== this.state) {
      dispatchGetEarning(this.state);
    }
  }

  onChange(pagination, filters, sorter) {
    const oldState = { ...this.state };
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
      performer,
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
                  <NumberFormat value={performer.balance || 0} />
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
              {
               performer.studioId
                 ? success && stats && (
                 <Space size="large">
                   <Statistic
                     title="Model Tokens Received"
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
                     value={stats.data?.studioToModelTotalUnpaidNetPrice}
                     precision={2}
                   />
                 </Space>
                 ) : success && stats && (
                 <Space size="large">
                   <Statistic
                     title="Model Tokens Received"
                     value={stats.data?.remainingPrice}
                     precision={2}
                   />
                   <Statistic
                     title="Paid Tokens"
                     value={stats.data?.paidPrice}
                     precision={2}
                   />
                   <Statistic
                     title="Unpaid Tokens"
                     value={stats.data?.remainingPrice}
                     precision={2}
                   />
                 </Space>
                 )
            }

            </Col>
          </Row>
          {
            performer.studioId
              ? (
                <EarningStudioOperatedTable
                  earnings={data}
                  searching={searching}
                  total={total}
                  pageSize={limit}
                  onChange={this.onChange.bind(this)}
                  role_data="model"
                />

              ) : (
                <EarningIndependentTable
                  earnings={data}
                  searching={searching}
                  total={total}
                  pageSize={limit}
                  onChange={this.onChange.bind(this)}
                  role_data="model"
                />
              )
}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.earning,
  // earning: state.performer.earning.data,
  performer: state.performer.current
});
const mapDispatch = { getEarning };
export default connect(mapStateToProps, mapDispatch)(PerformerProductsPage);
