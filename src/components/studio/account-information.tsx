import React from 'react';
import { ICountries, IStudio } from 'src/interfaces';
import { UploadOutlined } from '@ant-design/icons';
import {
  Form, Input, Button, Row, Col, Upload
} from 'antd';
import Countries from '@components/common/base/select/countries';
import './index.less';
import { TOKEN } from '@services/api-request';
import { studioService } from 'src/services';
import cookie from 'js-cookie';

interface IProps extends IStudio {
  countries: ICountries[];
  onFinish(data: any): Function;
  loading: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
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

const StudioInformation = ({
  onFinish,
  loading,
  name,
  firstName,
  lastName,
  username,
  email,
  country,
  state,
  // minPayment,
  phone,
  address,
  city,
  zipcode,
  documentVerificationId,
  documentVerification,
  countries
}: IProps) => {
  const [certificateId, setCertificateId] = React.useState(
    documentVerificationId
  );
  const [certificate, setCertificate] = React.useState([]);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (documentVerification) {
      setCertificate([
        {
          uid: documentVerification._id,
          name: documentVerification.name,
          status: 'done',
          url: documentVerification.url
        }
      ]);
    }
  }, []);

  const onCertificateChange = ({ file, fileList }) => {
    if (file.status === 'done' && file.response) {
      const { data } = file.response;
      setCertificateId(data.file._id);
      setCertificate([
        {
          uid: data.file._id,
          name: data.file.name,
          status: 'done',
          url: data.url
        }
      ]);
    } else {
      setCertificate(fileList);
    }
  };

  const submit = (values) => {
    onFinish({ ...values, documentVerificationId: certificateId });
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={submit}
      name="contactSettingForm"
      className="performerEditForm"
      initialValues={{
        firstName,
        lastName,
        name,
        username,
        email,
        country,
        city,
        state,
        phone,
        address,
        zipcode
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
              }
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Studio Name"
            rules={[
              {
                pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
                message: 'Studio name must according to Alphanumeric formating'
              },
              {
                whitespace: true,
                message: 'Please input your Studio name!'
              },
              {
                required: true,
                message: 'Please input your Studio name!'
              }
            ]}
          >
            <Input placeholder="Studio name" />
          </Form.Item>
          <Form.Item
            name="username"
            label="User Name"
            rules={[
              {
                pattern: new RegExp('^[a-zA-Z0-9 ]*$'),
                message: 'User name must according to Alphanumeric formating'
              },
              {
                whitespace: true,
                message: 'Please input your user name!'
              },
              {
                required: true,
                message: 'Please input your user name!'
              }
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
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
            <Input placeholder="studi@example.com" />
          </Form.Item>
          <Form.Item>
            <Upload
              showUploadList={{
                showPreviewIcon: true,
                showRemoveIcon: false,
                showDownloadIcon: true
              }}
              name="documentVerification"
              headers={{
                Authorization: process.browser ? cookie.get(TOKEN) : ''
              }}
              fileList={certificate}
              listType="text"
              action={studioService.getDocumentsUploadUrl()}
              onChange={onCertificateChange}
            >
              <Button type="primary">
                <UploadOutlined />
                {' '}
                Upload Company registration certificate
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col sm={12} xs={24}>
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
          <Form.Item name="zipcode" label="Zip">
            <Input placeholder="012345-678" />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input placeholder="Address" />
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
        <Button
          type="primary"
          htmlType="submit"
          disabled={loading}
          loading={loading}
        >
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudioInformation;
