import {
  Form, Input, Select, Button, Tag, Space
} from 'antd';
import React, { PureComponent } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { IOrder } from 'src/interfaces';
import Page from '@components/common/layout/page';
import './detail.less';
import { OrderStatus } from 'src/components/order';
import { PerformerUsername } from '@components/performer';
import NumberFormat from '@components/common/layout/numberformat';
import Router from 'next/router';

interface IProps {
  order: IOrder;
  loading: boolean;
  isUpdating: boolean;
  onFinish: any;
  disableUpdate: boolean;
  isUser?: boolean;
  onDownloadClick?: any;
}

export class FormOrder extends PureComponent<IProps> {
  render() {
    const {
      order,
      loading,
      isUpdating,
      disableUpdate,
      onFinish,
      isUser,
      onDownloadClick
    } = this.props;
    return (
      <Page>
        {order && (
          <div className="main-container">
            <Form
              onFinish={onFinish}
              wrapperCol={{ sm: { span: 18 } }}
              labelCol={{ sm: { span: 6 } }}
              initialValues={order}
              id="form-update-order"
            >
              <Form.Item wrapperCol={{ sm: { span: 12 } }}>
                <Tag color="magenta">
                  #
                  {order.orderNumber}
                </Tag>
              </Form.Item>
              <Form.Item label="Buyer">
                {order.buyerInfo?.username || 'N/A'}
              </Form.Item>
              <Form.Item label="Seller">
                {order.sellerSource === 'system' ? (
                  'System'
                ) : order?.sellerInfo ? (
                  <PerformerUsername performer={order.sellerInfo} />
                ) : (
                  'N/A'
                )}
              </Form.Item>
              <Form.Item label="Product">{order.name}</Form.Item>
              <Form.Item label="Description">{order.description}</Form.Item>
              {order.productType === 'digital' && isUser ? (
                <Form.Item>
                  <Button icon={<DownloadOutlined />} onClick={onDownloadClick}>
                    Click to Download
                  </Button>
                </Form.Item>
              ) : null}

              <Form.Item label="Quantity">{order.quantity}</Form.Item>
              <Form.Item label="Total Price">
                {order.payBy === 'token' ? (
                  <NumberFormat value={order.totalPrice} suffix=" tokens" />
                ) : (
                  <span>
                    $
                    <NumberFormat value={order.totalPrice} />
                  </span>
                )}
              </Form.Item>
              {order.productType === 'physical' ? (
                <>
                  <Form.Item label="Delivery Address">
                    {order.deliveryAddress || 'N/A'}
                  </Form.Item>
                  <Form.Item label="Delivery Postal Code">
                    {order.postalCode || 'N/A'}
                  </Form.Item>
                  <Form.Item name="shippingCode" label="Shipping Code">
                    {!isUser ? (
                      <Input placeholder="Enter shipping code here" />
                    ) : (
                      order.shippingCode
                    )}
                  </Form.Item>
                </>
              ) : null}

              {!disableUpdate && order.productType === 'physical' ? (
                <Form.Item name="deliveryStatus" label="Delivery Status">
                  <Select>
                    <Select.Option key="processing" value="processing">
                      Processing
                    </Select.Option>
                    <Select.Option key="shipping" value="shipping">
                      Shipping
                    </Select.Option>
                    <Select.Option key="delivered" value="delivered">
                      Delivered
                    </Select.Option>
                    <Select.Option key="refunded" value="refunded">
                      Refunded
                    </Select.Option>
                    <Select.Option key="created" value="created">
                      Pending
                    </Select.Option>
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item name="deliveryStatus" label="Delivery Status">
                  <OrderStatus status={order.deliveryStatus} />
                </Form.Item>
              )}
              <Form.Item>
                <Space>
                  <Button type="primary" onClick={() => Router.back()}>
                    Back
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isUpdating}
                    disabled={loading}
                    hidden={disableUpdate}
                  >
                    Update
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        )}
      </Page>
    );
  }
}
