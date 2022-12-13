import '../index.less';
import { PureComponent } from 'react';
import Head from 'next/head';
import { authService } from 'src/services/auth.service';
import {
  Form, message, Input, Button, Select
} from 'antd';
import { IForgotPasswordFormData, IUIConfig } from 'src/interfaces';
import { getResponseError } from 'src/lib/utils';
import Link from 'next/link';
import { connect } from 'react-redux';
import { FormRegisterPlaceHolder } from '@components/common/layout';

interface IProps {
  ui: IUIConfig;
}

interface IStates {
  loading: boolean;
}

class ForgotPasswordPage extends PureComponent<IProps, IStates> {
  static layout: string = 'auth';

  static authenticate: boolean = false;

  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  async onFinish(data: IForgotPasswordFormData) {
    try {
      this.setState({ loading: true });
      await authService.forgotPassword(data.email, data.type);
      message.success('New password have been sent to your email');
      this.setState({ loading: false });
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { ui } = this.props;
    return (
      <>
        <Head>
          <title>Forgot Password</title>
        </Head>
        <div className="register-page">
          <div className="form-register-container">
            <Form
              onFinish={this.onFinish.bind(this)}
              layout="vertical"
              initialValues={{ type: 'user' }}
            >
              <h1>Forgot Password</h1>
              <Form.Item
                label="Type"
                name="type"
                key="type"
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option value="user" key="user">
                    User
                  </Select.Option>
                  <Select.Option value="performer" key="performer">
                    {ui?.singularTextModel || 'Performer'}
                  </Select.Option>
                  <Select.Option value="studio" key="studio">
                    Studio
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="email"
                key="email"
                label="Email"
                rules={[
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input type="email" placeholder="abc@example.com" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  disabled={loading}
                  loading={loading}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  margin: '15px 0'
                }}
              >
                <Link href="/auth/resend-verification-email">
                  <a>Resend Email Verification</a>
                </Link>
                <Link href="/auth/login/user">
                  <a>Login</a>
                </Link>
              </div>
            </Form>
          </div>
          <FormRegisterPlaceHolder ui={ui} />
        </div>
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ui: state.ui
});
const mapDispatch = {};
export default connect(mapStates, mapDispatch)(ForgotPasswordPage);
