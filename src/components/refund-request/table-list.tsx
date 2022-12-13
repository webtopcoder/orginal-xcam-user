import {
  Table, Tag
} from 'antd';
import React from 'react';
import { IRefundRequest } from 'src/interfaces';
import { formatDate } from 'src/lib';

interface IProps {
  requests: IRefundRequest[];
  rowKey: string;
  pageSize: number;
  total: number;
  onChange: Function;
}

export const RefundRequestTable = ({
  requests,
  rowKey,
  pageSize,
  total,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'Performer',
      dataIndex: 'performerId',
      key: 'performerId',
      render(data, record) {
        return <span>{(record?.performerInfo?.username) || 'N/A'}</span>;
      }
    },
    {
      title: 'Product',
      dataIndex: 'sourceId',
      key: 'sourceId',
      render(data, record) {
        return <span>{(record.productInfo && record.productInfo.name) || 'N/A'}</span>;
      }
    },
    {
      title: 'Qty',
      dataIndex: 'sourceId',
      render(data, record) {
        return <span>{(record.orderInfo && record.orderInfo.quantity) || 'N/A'}</span>;
      }
    },
    {
      title: 'Tokens',
      dataIndex: 'token',
      align: 'center' as 'center',
      render(data) {
        return <span>{data}</span>;
      }
    },
    {
      title: 'Order Number',
      align: 'center' as 'center',
      render: (record) => (record?.orderInfo?.orderNumber || 'N/A')
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Resolved', value: 'resolved' },
        { text: 'Pending', value: 'pending' },
        { text: 'Rejected', value: 'rejected' }
      ],
      onFilter: (value, record) => record.status.includes(value),
      render(status: string) {
        switch (status) {
          case 'resolved':
            return <Tag color="green">Resolved</Tag>;
          case 'pending':
            return <Tag color="warning">Pending</Tag>;
          case 'rejected':
            return <Tag color="default">Rejected</Tag>;
          default:
            return <Tag color="default">Rejected</Tag>;
        }
      }
    },
    {
      title: 'Last updated at',
      dataIndex: 'updatedAt',
      sorter: true,
      key: 'updatedAt',
      render(date: Date) {
        return <span>{formatDate(date)}</span>;
      }
    }
  ];
  return (
    <Table
      columns={columns}
      rowKey={rowKey}
      dataSource={requests}
      pagination={{ total, pageSize }}
      onChange={onChange.bind(this)}
    />
  );
};
