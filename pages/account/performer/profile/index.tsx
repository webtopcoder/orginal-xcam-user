import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Tabs, message, Form
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import PerformerProfile from '@components/performer/profile-detail';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  updatePerformerProfile,
  updateCurrentPerformer,
  updatePerformerProfileSuccess,
  setupdatingPerformerProfile
} from 'src/redux/performer/actions';
import { IPerformer, IPerformerCategogies, ICountries } from 'src/interfaces';
import {
  performerService,
  authService
} from 'src/services';
import ProfileEditForm from '@components/performer/profile-edit-form';
import { getResponseError } from 'src/lib/utils';
import { ImageUpload } from '@components/file/image-upload';
import './index.less';
import { beforeAvatarUpload } from '@lib/file';

interface P {
  action: string;
  performer: IPerformer;
  categoriesData: IPerformerCategogies[];
  updating: boolean;
  updateSuccess: boolean;
  updateError: any;
  updatePerformerProfile: Function;
  updateCurrentPerformer: Function;
  updatePerformerProfileSuccess: Function;
  setupdatingPerformerProfile: Function;
  countries: ICountries[];
}

class PerformerProfilePage extends PureComponent<P> {
  static authenticate = true;

  static layout = 'primary';

  static getInitialProps({ ctx }) {
    const { query } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props: P) {
    super(props);
  }

  componentDidUpdate(prevProps: P) {
    const { updateSuccess, updateError } = this.props;
    if (updateSuccess && prevProps.updateSuccess !== updateSuccess) {
      message.success('Update Profile Success.');
    }

    if (prevProps.updateError !== updateError && updateError) {
      message.error(getResponseError(updateError));
    }
  }

  onTabsChange(key: string) {
    Router.push(
      {
        pathname: '/account/performer/profile',
        query: { action: key }
      },
      `/account/performer/profile?action=${key}`,
      { shallow: false }
    );
  }

  onFinish(data: any) {
    const { performer, updatePerformerProfile: dispatchupDatePerformerProfile } = this.props;
    dispatchupDatePerformerProfile({ ...performer, ...data });
  }

  onUploadedAvatar(data: any) {
    const { performer, updatePerformerProfileSuccess: dispatchUpdatePerformerProfileSuccess, setupdatingPerformerProfile: dispatchSetUpdating } = this.props;
    dispatchSetUpdating();
    dispatchUpdatePerformerProfileSuccess({
      ...performer,
      avatar: data.response.data.url
    });
  }

  render() {
    const {
      action, performer, categoriesData, updating, countries
    } = this.props;
    const uploadHeaders = {
      authorization: authService.getToken()
    };

    return (
      <>
        <Head>
          <title>My Profile</title>
        </Head>
        <div className="performer-profile-page">
          <PageHeader title="My Profile" />
          <Tabs
            activeKey={action || 'profile-image'}
            style={{ padding: '0 24px' }}
            size="large"
            onChange={this.onTabsChange.bind(this)}
          >
            <Tabs.TabPane tab="Profile Image" key="profile-image">
              <Form.Item label="Profile Image">
                <ImageUpload
                  options={{ fieldName: 'avatar' }}
                  imageUrl={performer?.avatar}
                  uploadUrl={performerService.getAvatarUploadUrl()}
                  headers={uploadHeaders}
                  beforeUpload={beforeAvatarUpload}
                  onUploaded={this.onUploadedAvatar.bind(this)}
                />
                <div>Image size limit: 2MB. Accepted formats: JPEG, JPG and PNG</div>
              </Form.Item>
            </Tabs.TabPane>
            <Tabs.TabPane tab="My Profile" key="profile">
              <PerformerProfile performer={performer} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Edit Profile" key="edit-profile">
              <ProfileEditForm
                {...performer}
                categoriesData={categoriesData}
                countries={countries}
                onFinish={this.onFinish.bind(this)}
                loading={updating}
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
  categoriesData: state.performer.categories.data,
  countries: state.settings.countries
});
const mapDispatchs = {
  updatePerformerProfile,
  updateCurrentPerformer,
  updatePerformerProfileSuccess,
  setupdatingPerformerProfile
};
export default connect(mapStateToProps, mapDispatchs)(PerformerProfilePage);
