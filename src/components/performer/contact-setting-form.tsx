import React from 'react';
import { ICountries, IPerformer } from 'src/interfaces';
import {
  Form, Input, Button, Row, Col
} from 'antd';
import Countries from '@components/common/base/select/countries';

import './index.less';

interface IProps extends IPerformer {
  onFinish(data: any): Function;
  countries: ICountries[];
  loading: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const UserProfile = ({
  firstName,
  lastName,
  onFinish,
  email,
  country,
  phone,
  city,
  loading,
  address,
  zipcode,
  state,
  countries
}: IProps) => {
  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      name="contactSettingForm"
      className="performerEditForm"
      initialValues={{
        country,
        firstName,
        lastName,
        email,
        phone,
        city,
        address,
        zipcode,
        state
      }}
      layout="vertical"
    >
      <Row gutter={25}>
        <Col sm={12} xs={24}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
                message: 'Alphanumeric'
              },
              {
                whitespace: true,
                message: 'Please input your first name!'
              },
              {
                required: true,
                message: 'Please input your first name!'
              }
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
                message: 'Alphanumeric'
              },
              {
                whitespace: true,
                message: 'Please input your last name!'
              },
              {
                required: true,
                message: 'Please input your first name!'
              }
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: 'Please input your country!' }]}
          >
            <Countries defaultValue={country} countries={countries} />
          </Form.Item>
          <Form.Item name="state" label="State Name">
            <Input placeholder="samplestate" />
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input placeholder="samplecity" />
          </Form.Item>
        </Col>
        <Col sm={12} xs={24}>
          <Form.Item name="zipcode" label="Zip">
            <Input placeholder="012345-678" />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]}
          >
            <Input placeholder="test@example.com" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Mobile Phone"
            rules={[
              {
                min: 8,
                max: 14,
                message: '8-14 digits'
              }
            ]}
          >
            <Input placeholder="+18000 0000" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={loading} loading={loading}>
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfile;
