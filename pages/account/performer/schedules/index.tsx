import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Tabs, message, Row, Col, List
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import ListItem from '@components/common/base/list-item';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  updatePerformerProfile,
  updateCurrentPerformer
} from 'src/redux/performer/actions';
import { IPerformer } from 'src/interfaces';
import PerformerSchedulesForm from '@components/schedules/form';
import { getResponseError, getNextShow, getDefaultSchedule } from 'src/lib/utils';
import { formatDate } from 'src/lib';
import moment from 'moment';

import './index.less';

interface IProps {
  action: string;
  performer: IPerformer;
  updating: boolean;
  updateSuccess: boolean;
  updateError: any;
  updatePerformerProfile: Function;
}

interface IStates {}

class PerformerProfilePage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static getInitialProps({ ctx }) {
    const { query } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: IProps) {
    const { updateSuccess, updateError } = this.props;
    if (prevProps.updateSuccess !== updateSuccess && updateSuccess) {
      message.success('Update Profile Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      message.error(getResponseError(updateError));
    }
  }

  onTabsChange(key: string) {
    Router.push(
      {
        pathname: '/account/performer/schedules',
        query: { action: key }
      },
      `/account/performer/schedules?action=${key}`,
      { shallow: false }
    );
  }

  onFinish(data: any) {
    const { performer, updatePerformerProfile: dispatchUpdatePerformerProfile } = this.props;
    dispatchUpdatePerformerProfile({ ...performer, ...data });
  }

  render() {
    const { action, performer, updating } = this.props;
    const schedule = performer.schedule || getDefaultSchedule();
    return (
      <>
        <Head>
          <title>Scheduling</title>
        </Head>
        <div className="performer-schedule-page">
          <PageHeader title="Schedules" />
          <Tabs
            activeKey={action || 'schedules'}
            style={{ padding: '0 24px' }}
            size="large"
            onChange={this.onTabsChange.bind(this)}
          >
            <Tabs.TabPane tab="Schedules" key="schedules">
              <Row>
                <Col sm={{ span: 12 }} xs={{ span: 24 }}>
                  <List itemLayout="horizontal">
                    <ListItem
                      title="Next Show"
                      description={getNextShow(schedule)}
                      titleLayout={{ sm: { span: 6 }, xs: { span: 12 } }}
                      descriptionLayout={{ sm: { span: 18 }, xs: { span: 12 } }}
                    />
                    {Object.keys(schedule).map((key) => (
                      <ListItem
                        title={formatDate(moment().day(key).toDate(), 'dddd')}
                        description={
                          !schedule[key].closed
                          // `${performer.schedule[key].start}`
                          && `${schedule[key].start} - ${schedule[key].end}`
                        }
                        titleLayout={{ sm: { span: 6 }, xs: { span: 12 } }}
                        descriptionLayout={{
                          sm: { span: 18 },
                          xs: { span: 12 }
                        }}
                        key={key}
                      />
                    ))}
                  </List>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Edit Schedule Details" key="edit-schedules">
              <PerformerSchedulesForm
                onFinish={this.onFinish.bind(this)}
                schedule={schedule}
                updating={updating}
              />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current,
  updating: state.performer.updating,
  updateSuccess: state.performer.updateSuccess,
  updateError: state.performer.updateError,
  categoriesData: state.performer.categories.data
});
const mapDispatchs = { updatePerformerProfile, updateCurrentPerformer };
export default connect(mapStateToProps, mapDispatchs)(PerformerProfilePage);
