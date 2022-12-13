import '../index.less';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormLogin from '@components/auth/login/performer-login-form';
import Head from 'next/head';
import { performerlogin, resetLoginData } from '@redux/auth/actions';
import { ILogin, IUIConfig } from 'src/interfaces';
import { FormRegisterPlaceHolder } from '@components/common/layout';

interface IProps {
  requesting: boolean;
  success: boolean;
  error: any;
  data: any;
  performerlogin: Function;
  ui: IUIConfig;
  resetLoginData: Function;
}

class Login extends PureComponent<IProps> {
  static layout: string = 'auth';

  static authenticate: boolean = false;

  rememberMe = false;

  componentWillUnmount() {
    const { resetLoginData: resetLogin } = this.props;
    resetLogin();
  }

  submit = (data: ILogin) => {
    const { performerlogin: dispatchPerformerlogin } = this.props;
    dispatchPerformerlogin({
      ...data,
      remember: this.rememberMe
    });
  };

  render() {
    const {
      requesting, error, success, ui
    } = this.props;
    return (
      <>
        <Head>
          <title>
            {ui?.singularTextModel || 'Performer'}
            {' '}
            Sign-in
          </title>
        </Head>
        <div className="register-page" style={{ }}>
          <div className="form-register-container">
            <FormLogin
              requesting={requesting}
              submit={this.submit.bind(this)}
              error={error}
              onRemember={(value) => { this.rememberMe = value; }}
              success={success}
            />
          </div>
          <FormRegisterPlaceHolder ui={ui} />
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ...state.auth.userLogin,
  ui: state.ui
});
const mapDispatch = { performerlogin, resetLoginData };
export default connect(mapStates, mapDispatch)(Login);
