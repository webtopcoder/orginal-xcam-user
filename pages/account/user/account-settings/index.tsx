import React, { PureComponent } from 'react';
import {
  message, Tabs
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { connect } from 'react-redux';
import {
  IUser,
  ICountries,
  IUserUpdateFormData,
  IUpdatePasswordFormData
} from 'src/interfaces';
import UserProfile from '@components/user/profile';
import Head from 'next/head';
import { settingService } from 'src/services/setting.service';
import { userService } from 'src/services/user.service';
import { updateUser } from 'src/redux/user/actions';
import { updatePassword } from 'src/redux/auth/actions';
import { getResponseError } from '@lib/utils';
import Router from 'next/router';
import PasswordChange from '@components/auth/password-change';

import './index.less';

interface IProps {
  user: IUser;
  action: string;
  auth: any;
  updateUser(data: IUserUpdateFormData): Function;
  updatePassword(data: IUpdatePasswordFormData): Function;
  userUpdating: boolean;
  success: boolean;
  updateUserError: any;
}

interface IStates {
  countries: ICountries[];
  avatarUploading: boolean;
  uploadedAvatar: string;
}

class UserProfilePage extends PureComponent<IProps, IStates> {
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
    this.state = {
      countries: [],
      uploadedAvatar: '',
      avatarUploading: false
    };
  }

  componentDidMount() {
    const { action } = this.props;
    if (!action || action === 'account-information') this.getCountries();
  }

  componentDidUpdate(prevProps: IProps) {
    const {
      success, updateUserError, auth, action
    } = this.props;
    const { countries } = this.state;
    if (prevProps.success !== success && success) {
      message.success('Update Profile Success.');
    }

    if (prevProps.updateUserError !== updateUserError && updateUserError) {
      message.error(getResponseError(updateUserError));
    }

    if (
      prevProps.auth.updatePassword.success !== auth.updatePassword.success
      && auth.updatePassword.success
    ) {
      message.success('Update Password Success.');
    }

    if (
      prevProps.auth.updatePassword.error !== auth.updatePassword.error
      && auth.updatePassword.error
    ) {
      message.error(getResponseError(auth.updatePassword.error));
    }

    if (!countries.length && action === 'account-information') {
      this.getCountries();
    }
  }

  onFinish(data: any) {
    const { user, updateUser: dispatchUpdateUser } = this.props;
    dispatchUpdateUser({ ...user, ...data });
  }

  onChangeAvatar({ file }) {
    if (file.status === 'uploading') {
      this.setState({ avatarUploading: true });
      return;
    }

    if (file.status === 'done') {
      this.setState({ avatarUploading: false });
      if (file.response) {
        this.setState({
          uploadedAvatar: file.response.data.url
        });
      }
    }
  }

  onTabsChange(key: string) {
    Router.push(
      { pathname: '/account/user/account-settings', query: { action: key } },
      `/account/user/account-settings?action=${key}`,
      { shallow: false }
    );
  }

  onPasswordChange(data: IUpdatePasswordFormData) {
    const { updatePassword: dispatchUpdatePassword } = this.props;
    dispatchUpdatePassword(data);
  }

  async getCountries() {
    try {
      const countries = await settingService.getCountries();
      this.setState({ countries: countries.data });
    } catch (error) {
      message.error(getResponseError(error));
    }
  }

  render() {
    const {
      user, action, auth, userUpdating
    } = this.props;
    const { countries, uploadedAvatar, avatarUploading } = this.state;

    return (
      <>
        <Head>
          <title>{`${user.username} Profile`}</title>
        </Head>
        <div className="account-setting-page">
          <PageHeader title="Account Settings" />
          <Tabs
            activeKey={action || 'account-information'}
            style={{ padding: '0 24px' }}
            size="large"
            onChange={this.onTabsChange.bind(this)}
          >
            <Tabs.TabPane tab="Account Information" key="account-information">
              <UserProfile
                {...user}
                onFinish={this.onFinish.bind(this)}
                countries={countries}
                onChangeAvatar={this.onChangeAvatar.bind(this)}
                uploadAvatarUrl={userService.getAvatarUploadUrl()}
                uploadedAvatar={uploadedAvatar}
                avatarUploading={avatarUploading}
                loading={userUpdating}
              />
            </Tabs.TabPane>
            {/* <Tabs.TabPane key="timezone" tab="Timezone">
              <h3>
                Sometimes the timezone is very important so make sure you alway
                set up it correctly. We will contact you taking into
                consideration the time zone and so may the performer do!
              </h3>
              <Form
                onFinish={this.onFinish.bind(this)}
                layout="vertical"
                initialValues={{ timezone: user.timezone }}
                {...formItemLayout}
              >
                <Form.Item
                  name="timezone"
                  key="timezone"
                  label="Timezone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your timezone!'
                    }
                  ]}
                >
                  <Timezones autoFocus />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save Changes
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane> */}
            <Tabs.TabPane key="change-password" tab="Change Password">
              <PasswordChange
                onFinish={this.onPasswordChange.bind(this)}
                {...auth.updatePassword}
              />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.current,
  userUpdating: state.user.userUpdating,
  success: state.user.updateUserSuccess,
  updateUserError: state.user.updateUserError,
  auth: state.auth
});
const mapDispatch = { updateUser, updatePassword };
export default connect(mapStateToProps, mapDispatch)(UserProfilePage);
