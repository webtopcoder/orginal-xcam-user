import { Row, Col } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { getMembers } from 'src/redux/studio/actions';
import React, { PureComponent } from 'react';
import { IPerformer, ISearch } from 'src/interfaces';
import StudioModelsSearch from '@components/studio/models-manager/search-online-status';
import StudioModelStatsTable from '@components/studio/models-manager/studio-models-stats-table';
import { connect } from 'react-redux';
import './index.less';
import { getSearchData } from 'src/lib';

interface IProps {
  data: IPerformer[];
  total: number;
  success: boolean;
  searching: boolean;
  error: any;
  getMembers: Function;
}
interface IState extends ISearch {
  limit: number;
  offset: number;
  sortBy: string;
  sort: string;
  filter?: any;
}

class StudioModelStatsPage extends PureComponent<IProps, IState> {
  static authenticate = 'studio';

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      filter: {}
    };
  }

  componentDidMount() {
    const { getMembers: dispatchGetMembers } = this.props;
    dispatchGetMembers(this.state);
  }

  componentDidUpdate(_, prevStates: IState) {
    const { getMembers: dispatchGetMembers } = this.props;
    if (prevStates !== this.state) {
      dispatchGetMembers(this.state);
    }
  }

  handleTableChange(pagination, filters, sorter) {
    const state = { ...this.state };
    this.setState(getSearchData(pagination, filters, sorter, state));
  }

  onSearch(data) {
    this.setState(data);
  }

  render() {
    const { data, searching, total } = this.props;
    const { limit } = this.state;
    return (
      <>
        <Head>
          <title>Performer Stats</title>
        </Head>
        <div className="studio-models-background">
          <PageHeader title="Models" />
          <div className="studio-models-box">
            <Row>
              <Col xs={24} sm={12}>
                <StudioModelsSearch
                  searching={searching}
                  onSearch={this.onSearch.bind(this)}
                />
              </Col>
              <Col xs={24} sm={12} />
            </Row>
            <StudioModelStatsTable
              data={data}
              searching={searching}
              total={total}
              onChange={this.handleTableChange.bind(this)}
              pageSize={limit}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.studio.members });
const mapDispatchs = { getMembers };
export default connect(mapStateToProps, mapDispatchs)(StudioModelStatsPage);
