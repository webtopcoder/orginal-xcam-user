import React from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  Input,
  DatePicker,
  Space,
  Statistic,
  message,
  Select
} from 'antd';
import { tailFormItemLayout } from 'src/lib';
import {
  PayoutRequestInterface,
  paymentAccountTypes,
  PAYMENT_ACCOUNT
} from 'src/interfaces';
import { payoutRequestService } from 'src/services';
import './index.less';
import moment from 'moment';

interface Props {
  submit(value): Function;
  submitting: boolean;
  payout: Partial<PayoutRequestInterface>;
  role?: string;
}

const PayoutRequestForm = ({
  payout, submit, submitting, role
}: Props) => {
  const [tokenMustPay, setTokenMustPay] = React.useState(
    payout.tokenMustPay || 0
  );
  // const [previousPaidOut, setPreviousPaidOut] = React.useState(
  //   payout.previousPaidOut || 0
  // );
  // const [pendingToken, setPendingToken] = React.useState(
  //   payout.pendingToken || 0
  // );

  const handleDateChange = async (_, dateStrings: string[]) => {
    try {
      if (!dateStrings[0] || !dateStrings[1]) return;

      const query = {
        fromDate: new Date(dateStrings[0]).toISOString(),
        toDate: new Date(dateStrings[1]).toISOString()
      };
      const resp = await payoutRequestService.calculate(query, role);
      setTokenMustPay(resp.data.totalPrice);
      // setPreviousPaidOut(resp.data.paidPrice);
      // setPendingToken(resp.data.remainingPrice);
    } catch {
      message.error('Something went wrong. Please try to input date againƒ!');
    }
  };
  const [form] = Form.useForm();
  const {
    paymentAccountType, requestNote, fromDate, toDate
  } = payout;
  return (
    <Form
      form={form}
      layout="vertical"
      className="payout-request-form"
      name="payoutRequestForm"
      onFinish={submit}
      initialValues={{
        paymentAccountType: paymentAccountType || PAYMENT_ACCOUNT.WIRE,
        requestNote: requestNote || '',
        date: fromDate && toDate ? [moment(fromDate), moment(toDate)] : []
      }}
    >
      <Row>
        <Col xs={24} sm={24}>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please input the date!' }]}
          >
            <DatePicker.RangePicker showTime onChange={handleDateChange} disabled={!!payout?._id} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Space size="large">
            <Statistic
              title="Earnings For The Selected Date"
              value={tokenMustPay}
              precision={2}
            />
            {/* <Statistic
              title="Previous Payout"
              value={previousPaidOut}
              precision={2}
            />
            <Statistic
              title="Paid Amount"
              value={pendingToken}
              precision={2}
            /> */}
          </Space>
        </Col>
      </Row>
      <Form.Item label="Payment Account Type" name="paymentAccountType">
        <Select disabled={!!payout?._id}>
          {paymentAccountTypes.map((t) => (
            <Select.Option value={t.value} key={t.value}>
              {t.title}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Comment" name="requestNote">
        <Input.TextArea rows={4} disabled={!!payout?._id} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          loading={submitting}
          htmlType="submit"
          disabled={!tokenMustPay}
        >
          Save Change
        </Button>
      </Form.Item>
    </Form>
  );
};

PayoutRequestForm.defaultProps = {
  role: 'performer'
};

export default PayoutRequestForm;
