import React from 'react';
import { Table } from 'antd';
import { IPaymentTokenHistory } from 'src/interfaces';
import { formatDate } from 'src/lib';

interface IProps {
  paymentTokenHistory: IPaymentTokenHistory[];
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
}

const ProductsTable = ({
  paymentTokenHistory,
  searching,
  total,
  pageSize,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render(name, record) {
        return <span>{name || record.type}</span>;
      }
    },
    {
      title: 'Seller / To',
      dataIndex: 'sellerId',
      key: 'sellerId',
      render: (sellerId: string, record) => record.sellerInfo?.username || 'N/A'
    },
    {
      title: 'Tokens',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      sorter: true
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => (
        <span>{formatDate(date, 'MMMM DD, YYYY HH:mm')}</span>
      ),
      sorter: true
    }
  ];
  const dataSource = paymentTokenHistory.map((p) => ({ ...p, key: p._id }));

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      className="table"
      pagination={{
        total,
        pageSize
      }}
      showSorterTooltip={false}
      loading={searching}
      onChange={onChange}
    />
  );
};

export default ProductsTable;
