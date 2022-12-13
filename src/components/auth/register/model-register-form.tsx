import React, { createRef, useState } from 'react';
import {
  Form, Input, Button, DatePicker, Select, Upload, Alert, message
} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateUIValue } from 'src/redux/ui/actions';
import { ICountries } from 'src/interfaces';
import { getResponseError } from '@lib/utils';
import { UploadOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usernamePatternRule } from '@lib/rules';
import { utilsService } from '@services/index';
import { ReCAPTCHA } from 'react-google-recaptcha';
import Recaptcha from 'src/components/common/recaptcha';

interface IProps {
  onFinish(value: any): Function;
  submiting: boolean;
  countries: ICountries[];
  error: boolean;
  singularTextModel: string;
  googleReCaptchaEnabled?: boolean;
  googleReCaptchaSiteKey?: string;
}

const RegisterFrom = ({
  onFinish: submit,
  submiting,
  countries,
  error,
  singularTextModel,
  googleReCaptchaEnabled,
  googleReCaptchaSiteKey
}: IProps) => {
  const reCAPTCHARef = createRef<ReCAPTCHA>();
  const [reCAPTCHAError, setreCAPTCHAError] = useState('');
  const [idVerification, setIdVerification] = React.useState('');
  const [documentVerification, setDocumentVerification] = React.useState('');
  const [form] = Form.useForm();

  const onFinish = async (data) => {
    try {
      if (googleReCaptchaEnabled) {
        const token = reCAPTCHARef.current.getValue();
        // const token = await reCAPTCHARef.current.executeAsync();
        if (!token) {
          setreCAPTCHAError('Please verify that you are not a robot.');
          return;
        }

        reCAPTCHARef.current.reset();
        setreCAPTCHAError('');
        await utilsService.verifyRecaptcha(token);
      }

      submit(data);
    } catch (e) {
      if (googleReCaptchaEnabled && reCAPTCHARef.current.getValue()) {
        reCAPTCHARef.current.reset();
      }
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    }
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      name="performerRegisterForm"
      initialValues={{ country: undefined, gender: 'female' }}
    >
      <h1>
        {singularTextModel || 'Performer'}
        {' '}
        register
      </h1>
      <Form.Item
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: 'Please input your date of birth!'
          },
          {
            validator: (rule, value) => {
              const years = moment().diff(value, 'years');
              if (years >= 18) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Minimum of 18 years'));
            }
          }
        ]}
      >
        <DatePicker placeholder="Date of Birth" />
      </Form.Item>
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your first name!'
          },
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
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name!'
          },
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
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="email"
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
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Username is required!'
          },
          usernamePatternRule
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            min: 6,
            max: 14,
            message: 'Passoword should be 6-14 characters'
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
      <Form.Item
        name="country"
        rules={[{ required: true, message: 'Please input your country!' }]}
      >
        <Select showSearch placeholder="Country">
          {countries.length > 0
            && countries.map((country) => (
              <Select.Option value={country.name} key={country.code}>
                {country.name}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item name="gender">
        <Select placeholder="Gender">
          <Select.Option value="male" key="male">
            Male
          </Select.Option>
          <Select.Option value="female" key="female">
            Female
          </Select.Option>
          <Select.Option value="transgender" key="transgender">
            Transgender
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="documentVerification"
        rules={[
          {
            required: true,
            message: 'Verification document is required!'
          }
        ]}
      >
        <Upload
          showUploadList={false}
          customRequest={() => true}
          fileList={[]}
          onChange={(files) => setDocumentVerification(files.file.name)}
        >
          <Button>
            <UploadOutlined />
            {' '}
            Upload Document For Verification
          </Button>
          {documentVerification && (
            <span className="file-name">{documentVerification}</span>
          )}
        </Upload>
      </Form.Item>
      <Form.Item
        name="idVerification"
        rules={[
          {
            required: true,
            message: 'Id Verifycation is required'
          }
        ]}
      >
        <Upload
          showUploadList={false}
          customRequest={() => true}
          fileList={[]}
          onChange={(files) => setIdVerification(files.file.name)}
        >
          <Button>
            <UploadOutlined />
            Upload ID For Verification
          </Button>
          {idVerification && (
            <span className="file-name">{idVerification}</span>
          )}
        </Upload>
      </Form.Item>

      {error && (
        <Form.Item>
          <Alert
            description={getResponseError(error)}
            type="error"
            message="Error"
          />
        </Form.Item>
      )}
      <Form.Item>
        <Recaptcha
          ref={reCAPTCHARef}
          googleReCaptchaEnabled={googleReCaptchaEnabled}
          googleReCaptchaSiteKey={googleReCaptchaSiteKey}
          error={reCAPTCHAError}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={submiting}
          loading={submiting}
          className="btn-submit"
        >
          Register new account
        </Button>
      </Form.Item>
      <Form.Item>
        Are you a
        {' '}
        {singularTextModel || 'Performer'}
        ?
        {' '}
        <Link href="/auth/login/performer">
          <a>Login</a>
        </Link>
      </Form.Item>
      <Form.Item>
        Want to be a member?
        {' '}
        <Link href="/auth/register/user">
          <a>Signup now</a>
        </Link>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  ...state.ui
});
const mapDispatchs = { updateUIValue };
RegisterFrom.defaultProps = {
  googleReCaptchaEnabled: false,
  googleReCaptchaSiteKey: ''
};
export default connect(mapStateToProps, mapDispatchs)(RegisterFrom);
