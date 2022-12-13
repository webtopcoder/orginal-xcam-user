import { message } from 'antd';
import React, { PureComponent } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { ICountries, IRegisterFormData, IUIConfig } from 'src/interfaces';
import { settingService } from '@services/setting.service';
import { getResponseError } from '@lib/utils';
import { authService } from 'src/services';
import StudioRegisterForm from '@components/auth/register/studio-register-form';
import { connect } from 'react-redux';
import { FormRegisterPlaceHolder } from '@components/common/layout';
import '../auth/index.less';

interface IProps {
  loggedIn: boolean;
  ui: IUIConfig;
}
interface IStates {
  error: boolean;
  errorMessage: string;
  countries: ICountries[];
  registering: boolean;
}

class RegisterStudioPage extends PureComponent<IProps, IStates> {
  static layout: string = 'auth';

static authenticate: boolean = false;

constructor(props: IProps) {
  super(props);
  this.state = {
    error: false,
    errorMessage: '',
    countries: [],
    registering: false
  };
}

componentDidMount() {
  const { loggedIn } = this.props;
  if (loggedIn) {
    Router.push('/');
  }
  this.getContries();
}

async getContries() {
  try {
    const countries = await settingService.getCountries();
    this.setState({ countries: countries.data });
  } catch (error) {
    this.setState({ error: true, errorMessage: getResponseError(error) });
  }
}

async submit(data: IRegisterFormData) {
  try {
    this.setState({ registering: true });
    const resp = await authService.studioRegister(data);
    message.success(
      resp?.data?.message
        ? resp?.data?.message
        : 'Registered successfully, please wait for our admin approval'
    );
    Router.push('/studio/login');
  } catch (error) {
    this.setState({ error: true, errorMessage: getResponseError(error) });
  } finally {
    this.setState({ registering: false });
  }
}

render() {
  const {
    error, errorMessage, countries, registering
  } = this.state;
  const { ui } = this.props;
  return (
    <>
      <Head>
        <title> Studio Register </title>
      </Head>
      <div className="register-page">
        <div className="form-register-container">
          <StudioRegisterForm
            error={error}
            onFinish={this.submit.bind(this)}
            submiting={registering}
            countries={countries}
            errorMessage={errorMessage}
          />
        </div>
        <FormRegisterPlaceHolder ui={ui} />
      </div>
    </>
  );
}
}

const mapStateToProps = (state) => ({
  ui: state.ui,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(RegisterStudioPage);
