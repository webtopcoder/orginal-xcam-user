import { PureComponent } from 'react';
import { connect } from 'react-redux';
import FormLogin from '@components/auth/login/user-login-form';
import Head from 'next/head';
import { login, resetLoginData } from '@redux/auth/actions';
import { ILogin, IUIConfig } from 'src/interfaces';
import { FormRegisterPlaceHolder } from '@components/common/layout';
import '../index.less';

interface IProps {
  requesting: boolean;
  success: boolean;
  error: any;
  ui: IUIConfig;
  data: any;
  login: Function;
  resetLoginData: Function;
}

class Login extends PureComponent<IProps> {
  static layout: string = 'auth';

  static authenticate: boolean = false;

  rememberMe = false;

  componentWillUnmount() {
    const { resetLoginData: dispatchReset } = this.props;
    dispatchReset();
  }

  submit = (data: ILogin) => {
    const { login: dispatchLogin } = this.props;
    dispatchLogin({
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
          <title>User sign-in</title>
        </Head>
        <div className="register-page">
          <div className="form-register-container">
            <FormLogin
              singularTextModel={ui?.singularTextModel || 'Performer'}
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

const mapStates = (state: any) => ({
  ...state.auth.userLogin,
  ui: state.ui
});
const mapDispatch = { login, resetLoginData };
export default connect(mapStates, mapDispatch)(Login);
