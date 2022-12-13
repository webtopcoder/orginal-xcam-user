import React, { PureComponent } from 'react';
import { Tag } from 'antd';

interface IProps {
  status: string;
}

export class OrderStatus extends PureComponent<IProps> {
  renderStatus(status: string) {
    switch (status) {
      case 'processing':
        return <Tag color="processing">Processing</Tag>;
      case 'shipping':
        return <Tag color="warning">Shipping</Tag>;
      case 'delivered':
        return <Tag color="success">Delivered</Tag>;
      case 'refunded':
        return <Tag color="error">Refunded</Tag>;
      case 'created':
        return <Tag color="default">Created</Tag>;
      default:
        return <Tag color="default">Pending</Tag>;
    }
  }

  render() {
    const { status } = this.props;
    return this.renderStatus(status);
  }
}
