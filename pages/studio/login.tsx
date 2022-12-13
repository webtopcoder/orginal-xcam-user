import React, { PureComponent } from 'react';
import StudioFormLogin from '@components/studio/studio-login-form';
import Head from 'next/head';
import { IStudioLogin, IUIConfig } from 'src/interfaces';
import '../auth/index.less';
import { studioLogin, resetLoginData } from 'src/redux/auth/actions';
import { FormRegisterPlaceHolder } from '@components/common/layout';
import { connect } from 'react-redux';
import { message } from 'antd';
import { getResponseError } from 'src/lib';

interface IProps {
  requesting: false;
  success: false;
  data: null;
  error: null;
  studioLogin: Function;
  resetLoginData: Function;
  ui: IUIConfig;
}
interface IStates {}

class StudioLoginPage extends PureComponent<IProps, IStates> {
  static layout: string = 'auth';

  static authenticate: boolean = false;

  rememberMe = false;

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps: IProps) {
    const { success, error } = this.props;
    if (success && success !== prevProps.success) {
      message.success('Logged successfully');
    }
    if (error && prevProps.error !== error) {
      message.error(getResponseError(error));
    }
  }

  componentWillUnmount() {
    const { resetLoginData: resetLogin } = this.props;
    resetLogin();
  }

  submit(data: IStudioLogin) {
    const { studioLogin: handleLogin } = this.props;
    handleLogin({
      ...data,
      remember: this.rememberMe
    });
  }

  render() {
    const {
      requesting, error, success, ui
    } = this.props;
    return (
      <>
        <Head>
          <title>Studio Sign-in</title>
        </Head>
        <div className="register-page">
          <div className="form-register-container">
            <StudioFormLogin
              requesting={requesting}
              submit={this.submit.bind(this)}
              onRemember={(value) => { this.rememberMe = value; }}
              error={error}
              success={success}
            />
          </div>
          <FormRegisterPlaceHolder ui={ui} />
        </div>
      </>
    );
  }
}
const mapStates = (state) => ({
  ...state.auth.userLogin,
  ui: state.ui
});
const mapDispatch = { studioLogin, resetLoginData };
export default connect(mapStates, mapDispatch)(StudioLoginPage);
