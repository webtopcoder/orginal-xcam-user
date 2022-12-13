import { useEffect } from 'react';
import {
  Form, Input, Col, Row, Radio, Button
} from 'antd';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { IPerformerDirectDeposit } from 'src/interfaces';
import FormInputItem from '@components/common/base/input-item-list';
import { formItemLayout, tailFormItemLayout } from 'src/lib';

const { Group } = Radio;
const DIRECT_DEPOSIT_TYPE = [
  { key: 'credit', name: 'Credit' },
  { key: 'savings', name: 'Savings' }
];
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};
const leftFormItem: FormItemProps[] = [
  {
    name: 'depositFirstName',
    rules: [{ required: true, message: 'First name is required' }],
    label: 'First Name',
    children: <Input />
  },
  {
    name: 'depositLastName',
    rules: [{ required: true, message: 'Last name is required' }],
    label: 'Last Name',
    children: <Input />
  },
  {
    name: 'accountingEmail',
    rules: [
      { required: true, message: 'Account email is required' },
      { type: 'email', message: 'Account email must be email' }
    ],
    label: 'Account Email',
    children: <Input type="email" />
  },
  {
    name: 'directBankName',
    rules: [{ required: true, message: 'Bnak name is required' }],
    label: 'Bank Name',
    children: <Input />
  },
  {
    name: 'accountType',
    rules: [{ required: true, message: 'Account type is required' }],
    label: 'Account Type',
    children: (
      <Group>
        {DIRECT_DEPOSIT_TYPE.map((type) => (
          <Radio style={radioStyle} value={type.key} key={type.key}>
            {type.name}
          </Radio>
        ))}
      </Group>
    )
  }
];

const rightInputFrom: FormItemProps[] = [
  {
    name: 'accountNumber',
    rules: [{ required: true, message: 'Account number is required' }],
    label: 'Account number',
    children: <Input />
  },
  {
    name: 'routingNumber',
    rules: [{ required: true, message: 'Routing number is required' }],
    label: 'Routing number',
    children: <Input />
  }
];

const initFormValue: IPerformerDirectDeposit = {
  depositFirstName: '',
  depositLastName: '',
  accountingEmail: '',
  directBankName: '',
  accountType: 'credit',
  accountNumber: '',
  routingNumber: ''
};

interface IProps {
  onFinish(data): Function;
  loading: boolean;
  paymentInformation: any;
}

export const DirectDepositSettingForm = ({ onFinish, paymentInformation, loading }: IProps) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(paymentInformation);
  }, [paymentInformation]);
  return (
    <Form
      {...formItemLayout}
      form={form}
      layout="vertical"
      onFinish={onFinish}
      name="directDepositSettingForm"
      className="performerEditForm"
      initialValues={{ ...initFormValue }}
    >
      <Row>
        <Col xs={24} sm={12}>
          <FormInputItem fields={leftFormItem} />
        </Col>
        <Col xs={24} sm={12}>
          <FormInputItem fields={rightInputFrom} />
        </Col>
      </Row>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save Change
        </Button>
      </Form.Item>
    </Form>
  );
};
