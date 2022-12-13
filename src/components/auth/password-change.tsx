import { Form, Button, Input } from 'antd';

interface P {
  onFinish: (v) => void;
  submiting?: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const PasswordChange = ({ onFinish, submiting }: P) => (
  <Form layout="vertical" onFinish={onFinish} {...formItemLayout}>
    <Form.Item
      name="prePassword"
      label="Old Password"
      rules={[
        {
          required: true,
          message: 'Please input your old password!'
        },
        {
          min: 6,
          max: 14,
          message: '6-14 characters'
        }
      ]}
      hasFeedback
    >
      <Input.Password placeholder="Old Password" />
    </Form.Item>
    <Form.Item
      name="password"
      label="New Password"
      rules={[
        {
          required: true,
          message: 'Please input your password!'
        },
        {
          min: 6,
          max: 14,
          message: '6-14 characters'
        }
      ]}
      hasFeedback
    >
      <Input.Password placeholder="Password" />
    </Form.Item>
    <Form.Item
      name="confirm"
      dependencies={['password']}
      hasFeedback
      label="Retype password"
      rules={[
        {
          required: true,
          message: 'Please confirm your password!'
        },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }

            return Promise.reject(
              new Error('The two passwords that you entered do not match!')
            );
          }
        })
      ]}
    >
      <Input.Password placeholder="Confirm Password" />
    </Form.Item>
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        loading={submiting}
        disabled={submiting}
        className="btn-submit"
      >
        Save Changes
      </Button>
    </Form.Item>
  </Form>
);

PasswordChange.defaultProps = {
  submiting: false
};
export default PasswordChange;
