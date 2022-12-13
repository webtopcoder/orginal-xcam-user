import {
  Table, Tag
} from 'antd';
import React from 'react';
import { IProduct, ITransaction } from 'src/interfaces';
import { formatDate } from 'src/lib';

interface IProps {
  transactions: ITransaction[];
  rowKey: string;
  pageSize: number;
  total: number;
  onChange: Function;
}

export const TransactionHistoryTable = ({
  transactions,
  rowKey,
  pageSize,
  total,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: '_id',
      key: '_id',
      render: (_id: string) => _id?.slice(16, 24).toUpperCase() || 'N/A'
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      render(products: IProduct[]) {
        return (products || []).map((product) => (
          <p>
            <strong>{product.name}</strong>
            {' '}
            <br />
            <small>{product?.description?.slice(0, 150) || ''}</small>
          </p>
        ));
      }
    },
    {
      title: 'Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      align: 'center' as 'center',
      sorter: true,
      render: (totalPrice: number) => totalPrice?.toFixed(2) || 'N/A'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Success', value: 'success' },
        { text: 'Pending', value: 'pending' },
        { text: 'Canceled', value: 'canceled' }
      ],
      onFilter: (value, record) => record.status.includes(value),
      render(status: string) {
        switch (status) {
          case 'success':
            return <Tag color="green">Success</Tag>;
          case 'pending':
            return <Tag color="warning">Pending</Tag>;
          case 'canceled':
            return <Tag color="default">Canceled</Tag>;
          default:
            return <Tag color="default">Canceled</Tag>;
        }
      }
    },
    {
      title: 'Created on',
      dataIndex: 'createdAt',
      sorter: true,
      key: 'createdAt',
      render(date: Date) {
        return <span>{formatDate(date)}</span>;
      }
    }
  ];
  return (
    <Table
      columns={columns}
      rowKey={rowKey}
      dataSource={transactions}
      pagination={{ total, pageSize }}
      onChange={onChange.bind(this)}
    />
  );
};
