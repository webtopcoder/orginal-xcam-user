import React from 'react';
import { Form, Button, Input } from 'antd';

export const UpdatePaswordForm = ({ onFinish, updating = false }: any) => (
  <Form name="nest-messages" onFinish={onFinish.bind(this)}>
    <Form.Item
      name="password"
      label="Password"
      rules={[{ required: true, message: 'Please input your password!', min: 6 }]}
    >
      <Input.Password placeholder="Enter password. At least 6 characters" />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 4 }}>
      <Button type="primary" htmlType="submit" disabled={updating} loading={updating}>
        Update
      </Button>
    </Form.Item>
  </Form>
);
