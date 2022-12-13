import React from 'react';
import Link from 'next/link';
import { Form, Row, Col } from 'antd';

const { Item: FormItem } = Form;

interface P {
  account: 'user' | 'performer' | 'studio',
  singularTextModel?: string;
}

const FormFooterLogin = ({ account, singularTextModel }: P) => (
  <Row>
    <Col span={24}>
      {account !== 'studio' && account === 'user' ? (
        <FormItem>
          Want to be a Member?
          {' '}
          <Link href="/auth/register/user">
            <a>Signup here</a>
          </Link>
        </FormItem>
      )
        : account === 'performer' && (
        <FormItem>
          Want to be a
          {' '}
          {singularTextModel || 'Performer'}
          ?
          {' '}
          <Link href="/auth/register/model">
            <a>Signup here</a>
          </Link>
        </FormItem>
        )}
      {account === 'studio' && (
      <FormItem>
        {'Don\'t have account yet? '}
        <Link href="/studio/register">
          <a>Signup now</a>
        </Link>
      </FormItem>
      )}
    </Col>
    <Col span={24}>
      {account === 'user' && (
      <FormItem>
        Are you a
        {' '}
        {singularTextModel || 'Performer'}
        ?
        {' '}
        <Link href="/auth/login/performer">
          <a>Login here</a>
        </Link>
      </FormItem>
      )}
      {account === 'performer' && (
      <FormItem>
        Are you a Member?
        {' '}
        <Link href="/auth/login/user">
          <a>Login here</a>
        </Link>
      </FormItem>
      )}
    </Col>
  </Row>
);
FormFooterLogin.defaultProps = {
  singularTextModel: 'Performer'
};
export default FormFooterLogin;
