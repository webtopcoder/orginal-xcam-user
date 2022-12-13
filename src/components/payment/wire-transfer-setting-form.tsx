/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import {
  Form, Input, Col, Row, Select, Button
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const PAYMENT_INFO_CURRENCY = {
  eurEuro: 'EUR (Euro)',
  usdUnitedStatesDollars: 'USD (U.S Dollar)'
};
const { Item } = Form;
const { Option } = Select;
const initFormValue = {
  type: 'wireTransfer',
  withdrawCurrency: 'eurEuro',
  taxPayer: ''
};
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
      span: 20
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

interface IProps {
  onFinish(data): Function;
  loading: boolean;
  paymentInformation: any;
}

export const WireTransferSettingForm = ({ onFinish, loading, paymentInformation }: IProps) => {
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
      name="paymentInfoSettingForm"
      className="performerEditForm"
      validateMessages={{ required: 'This field is required!' }}
      initialValues={{ ...initFormValue }}
    >
      <Row>
        <Col xs={24} sm={12}>
          <Item
            name="withdrawCurrency"
            key="withdrawCurrency"
            rules={[{ required: true }]}
            label="Withdraw Currency"
          >
            <Select>
              {Object.keys(PAYMENT_INFO_CURRENCY).map((key) => (
                <Option value={key} key={key}>
                  {PAYMENT_INFO_CURRENCY[key]}
                </Option>
              ))}
            </Select>
          </Item>
          <Item name="taxPayer" key="taxPayer" label="Taxpayer ID/SSN">
            <Input />
          </Item>
          <Item
            name="bankName"
            key="bankName"
            label="Bank Name"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankAddress"
            key="bankAddress"
            label="Bank Address"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankSWIFTBICABA"
            key="bankSWIFTBICABA"
            label="Bank SWIFT-BIC/ABA"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="additionalInformation"
            key="additionalInformation"
            label="Additional Information"
          >
            <Input.TextArea />
          </Item>
        </Col>
        <Col xs={24} sm={12}>
          <Item
            name="bankCity"
            key="bankCity"
            label="Bank City"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankState"
            key="bankState"
            label="Bank State"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankZip"
            key="bankZip"
            label="Bank Zip"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankCountry"
            key="bankCountry"
            label="Bank Country"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="bankAcountNumber"
            key="bankAcountNumber"
            label="Bank Account Number"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            name="holderOfBankAccount"
            key="holderOfBankAccount"
            label="Primary Account Holder"
            dependencies={['type']}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
        </Col>
      </Row>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save Change
        </Button>
      </FormItem>
    </Form>
  );
};
