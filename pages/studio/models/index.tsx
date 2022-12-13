/* eslint-disable react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Row, Col, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import Link from 'next/link';
import { getMembers, updateMemberStatus } from 'src/redux/studio/actions';
import { IPerformer, ISearch } from 'src/interfaces';
import StudioModelsSearch from '@components/studio/models-manager/search-online-status';
import StudioModelsTable from '@components/studio/models-manager/studio-models-table';
import { connect } from 'react-redux';
import './index.less';
import { getResponseError, getSearchData } from 'src/lib';
import { studioService } from '@services/studio.service';

interface IProps {
  data: IPerformer[];
  total: number;
  success: boolean;
  searching: boolean;
  error: any;
  getMembers: Function;
  updateMemberStatus: Function;
  placeholderAvatarUrl: string;
}
interface IState {
  query: ISearch;
}

class StudioModelsPage extends PureComponent<IProps, IState> {
  static authenticate = 'studio';

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      query: {
        limit: 12,
        offset: 0,
        sortBy: 'createdAt',
        sort: 'desc'
      }
    };
  }

  componentDidMount() {
    const { getMembers: dispatchGetMembers } = this.props;
    const { query } = this.state;
    dispatchGetMembers(query);
  }

  componentDidUpdate(_, prevStates: IState) {
    const { getMembers: dispatchGetMembers } = this.props;
    const { query } = this.state;
    if (prevStates.query !== query) {
      dispatchGetMembers(query);
    }
  }

  handleTableChange(pagination, filters, sorter) {
    const { query } = this.state;
    this.setState({
      query: getSearchData(pagination, filters, sorter, query)
    });
  }

  onSearch(data) {
    const { query } = this.state;
    this.setState({ query: { ...query, ...data } });
  }

  async update(record: IPerformer) {
    try {
      const { updateMemberStatus: dispatchUpdateMemberStatus } = this.props;
      await studioService.updateMemberStatus(
        record._id,
        record.status === 'active' ? 'inactive' : 'active'
      );
      dispatchUpdateMemberStatus(record._id);
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  }

  render() {
    const {
      data, searching, total, placeholderAvatarUrl
    } = this.props;
    const { query } = this.state;
    return (
      <>
        <Head>
          <title>Studio's Models</title>
        </Head>
        <div className="studio-models-background">
          <PageHeader
            title="Models"
            extra={(
              <Link href="/studio/models/add">
                <a>Add new member</a>
              </Link>
            )}
          />
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
            <StudioModelsTable
              dataSource={data}
              loading={searching}
              pagination={{
                pageSize: query.limit,
                current: Math.round(query.offset / query.limit) + 1,
                total
              }}
              update={this.update.bind(this)}
              onChange={this.handleTableChange.bind(this)}
              placeholderAvatarUrl={placeholderAvatarUrl}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.studio.members,
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl
});
const mapDispatchs = { getMembers, updateMemberStatus };
export default connect(mapStateToProps, mapDispatchs)(StudioModelsPage);
