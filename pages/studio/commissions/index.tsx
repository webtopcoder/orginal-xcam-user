/* eslint-disable no-return-assign */
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import {
  getMembersCommissions,
  updateMemberCommision
} from 'src/redux/studio/actions';
import React, { PureComponent } from 'react';
import { IPerformer, ISearch } from 'src/interfaces';
import StudioCommissionsTable from '@components/studio/models-manager/studio-commissions-table';
import { connect } from 'react-redux';
import './index.less';
import { getResponseError, getSearchData } from 'src/lib';
import PopupCommission from '@components/common/base/popup-commission';
import { studioService } from 'src/services';
// import { parseInt } from 'lodash';

interface IProps {
  data: IPerformer[];
  total: number;
  // success: boolean;
  searching: boolean;
  // error: any;
  getMembersCommissions: Function;
  updateMemberCommision: Function;
}
interface IState extends ISearch {
  limit: number;
  offset: number;
  sortBy: string;
  sort: string;
  filter?: any;
  commissionId?: any;
  settingUpdating: boolean;
  updatingPerformer: any,
}

class StudioModelsPage extends PureComponent<IProps, IState> {
  static authenticate = 'studio';

  static layout = 'primary';

  private popupRef;

  private formRef;

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      filter: {},
      commissionId: null,
      settingUpdating: false,
      updatingPerformer: null
    };
  }

  componentDidMount() {
    const { getMembersCommissions: dispatchGetMembersCommissions } = this.props;
    dispatchGetMembersCommissions(this.state);
  }

  handleTableChange(pagination, filters, sorter) {
    const oldState = this.state;
    this.setState(getSearchData(pagination, filters, sorter, oldState));
  }

  update(updatingPerformer) {
    this.setState({ updatingPerformer });

    this.popupRef && this.popupRef.setVisible(true);
  }

  async updateCommission(id, data: any) {
    try {
      this.setState({ settingUpdating: true });
      await studioService.updateMemberCommission(id, data);
      message.success('Commission setting has been updated!');
      this.popupRef && this.popupRef.setVisible(false);
      const { getMembersCommissions: dispatchGetMembersCommissions } = this.props;
      dispatchGetMembersCommissions(this.state);
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(
        getResponseError(err) || 'An error occurred, please try again!'
      );
    } finally {
      this.setState({ settingUpdating: false });
    }
  }

  render() {
    const { data, searching, total } = this.props;
    const { limit, updatingPerformer, settingUpdating } = this.state;
    return (
      <>
        <Head>
          <title>Model commissions</title>
        </Head>
        <PopupCommission
          ref={(ref) => (this.popupRef = ref)}
          updatingPerformer={updatingPerformer}
          onFinish={this.updateCommission.bind(this)}
          submiting={settingUpdating}
          // submiting={this.settingUpdating}
          // content={(
          // )}
          // onOk={this.onOk.bind(this)}
        />
        <div className="studio-commisson-background">
          <PageHeader title="Commissions" />
          <div className="studio-commisson-box">
            <StudioCommissionsTable
              data={data}
              searching={searching}
              total={total}
              update={this.update.bind(this)}
              onChange={this.handleTableChange.bind(this)}
              pageSize={limit}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.studio.commissions });
const mapDispatchs = { getMembersCommissions, updateMemberCommision };
export default connect(mapStateToProps, mapDispatchs)(StudioModelsPage);
