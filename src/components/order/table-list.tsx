import { Table } from 'antd';
import React from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { IOrder } from 'src/interfaces';
import { formatDate } from '@lib/date';
import Link from 'next/link';
import { PerformerUsername } from '@components/performer';
import NumberFormat from '@components/common/layout/numberformat';
import { ColumnsType } from 'antd/lib/table';
import { OrderStatus } from './order-status';

interface IProps {
  dataSource: IOrder[];
  pagination: {};
  rowKey: string;
  loading: boolean;
  onChange(pagination, filters, sorter, extra): Function;
  type: string;
}

const OrderTableList = ({
  dataSource,
  pagination,
  rowKey,
  loading,
  onChange,
  type
}: IProps) => {
  const columns: ColumnsType<IOrder> = [
    {
      title: 'Number',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      responsive: ['sm']
    },
    {
      title: `${type === 'user' ? 'Seller' : 'Buyer'}`,
      dataIndex: `${type === 'user' ? 'performerId' : 'userId'}`,
      key: `${type === 'user' ? 'performerId' : 'userId'}`,
      sorter: true,
      render(data, record) {
        if (type === 'user') {
          if (record.sellerSource === 'system') return <span>System</span>;
          return record?.sellerInfo ? (
            <PerformerUsername performer={record.sellerInfo} />
          ) : (
            <span>N/A</span>
          );
        }

        return record?.buyerInfo?.username || 'N/A';
      }
    },
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'name',
      render(name, record) {
        return (
          <div
            style={{
              wordWrap: 'break-word',
              wordBreak: 'break-word'
            }}
          >
            <strong>{name}</strong>
            <br />
            <small>{record.description}</small>
          </div>
        );
      }
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: true,
      key: 'type'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: true,
      key: 'quantity',
      render(quantity) {
        return <span>{quantity}</span>;
      }
    },
    {
      title: 'Total Price (tokens)',
      dataIndex: 'totalPrice',
      sorter: true,
      key: 'totalPrice',
      render(data, record) {
        if (record.payBy === 'token') {
          return (
            <span>
              <NumberFormat value={record.totalPrice} />
              {' '}
              token(s)
            </span>
          );
        }
        return (
          <span>
            $
            <NumberFormat value={record.totalPrice} />
          </span>
        );
      }
    },
    {
      title: 'Delivery Status',
      dataIndex: 'deliveryStatus',
      key: 'deliveryStatus',
      sorter: true,
      render(status: string) {
        return <OrderStatus status={status} />;
      }
    },
    {
      title: 'Last updated at',
      dataIndex: 'createdAt',
      sorter: true,
      key: 'createdAt',
      render(date: Date) {
        return <span>{formatDate(date)}</span>;
      }
    },
    {
      title: 'Actions',
      dataIndex: '_id',
      render(id: string) {
        return (
          <Link
            href={{ pathname: `/account/${type}/orders/detail`, query: { id } }}
          >
            <a>
              <EyeOutlined />
            </a>
          </Link>
        );
      }
    }
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      rowKey={rowKey}
      loading={loading}
      onChange={onChange.bind(this)}
      scroll={{ x: 1300 }}
    />
  );
};
export default OrderTableList;
