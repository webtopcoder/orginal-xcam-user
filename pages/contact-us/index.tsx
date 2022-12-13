import {
  Form, Input, Button, Divider, message
} from 'antd';
import React, { PureComponent } from 'react';
import { postService } from '@services/post.service';
import Head from 'next/head';
import Page from '@components/common/layout/page';
import { FormRegisterPlaceHolder } from '@components/common/layout';
import { connect } from 'react-redux';
import { IUIConfig } from 'src/interfaces';
import './index.less';
import { getResponseError } from '@lib/utils';

interface IProps {
  ui: IUIConfig;
}
interface IStates {
  loading: boolean;
}

class ContactPage extends PureComponent<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  async onFinish(data) {
    try {
      this.setState({ loading: true });
      await postService.createContactCotent(data);
      message.success('Email have been sent to a admin');
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { ui } = this.props;
    const { loading } = this.state;
    return (
      <>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Page className="contact-page" inner>
          <div className="form-contact-container">
            <Form onFinish={this.onFinish.bind(this)}>
              <span className="form-contact-title">Contact</span>
              <br />
              <span>
                Please fill out all the info beside and we will get back to you
                with-in 48hrs.
              </span>
              <Divider />
              <Form.Item name="subject">
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="name">
                <Input placeholder="Your valid name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { type: 'email', message: 'The input is not valid E-mail!' },
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input placeholder="Your valid email" />
              </Form.Item>
              <Form.Item name="message">
                <Input.TextArea placeholder="Your message" rows={3} />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={loading}
                  disabled={loading}
                  block
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
          <FormRegisterPlaceHolder ui={ui} />
        </Page>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ui: state.ui });
export default connect(mapStateToProps)(ContactPage);
