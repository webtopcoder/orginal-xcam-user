import React from 'react';
import { Table, Tag } from 'antd';
import { IEarning } from 'src/interfaces/earning';
import { IUser } from 'src/interfaces';
import { formatDate, Breakpoint, capitalizeFirstLetter } from 'src/lib';
import NumberFormat from '@components/common/layout/numberformat';

interface IProps {
  earnings: IEarning[];
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
  // eslint-disable-next-line camelcase
  role_data: 'model' | 'studio';
}

const breakPoint: Breakpoint[] = ['md'];

const customCell = ({ children, bordered }) => <td style={{ border: bordered ? '1px solid #f4f4f4' : 'none' }}>{children}</td>;

const EarningIndependentTable = ({
  earnings,
  searching,
  total,
  pageSize,
  onChange,
  // eslint-disable-next-line camelcase
  role_data
}: IProps) => {
  const columns = [
    {
      title: 'Reference',
      dataIndex: 'transactionTokenId',
      key: 'transaction',
      responsive: breakPoint,
      render: (transactionTokenId) => transactionTokenId?.slice(16, 24).toUpperCase() || 'N/A'
    },
    {
      title: 'Date',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render: (createdAt: Date) => <span>{formatDate(createdAt)}</span>,
      sorter: true
    },
    {
      title: 'From',
      dataIndex: 'sourceInfo',
      key: 'from',
      render: (sourceInfo: IUser) => sourceInfo?.username || 'N/A'
    },
    {
      title: 'To',
      dataIndex: 'targetInfo',
      key: 'to',
      render: (targetInfo: IUser) => targetInfo?.username || 'N/A'
    },
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      key: 'type',
      render(type: string) {
        switch (type) {
          case 'sale_video':
            return <Tag color="magenta">Sale Video</Tag>;
          case 'sale_product':
            return <Tag color="volcano">Sale Product</Tag>;
          case 'sale_photo':
            return <Tag color="orange">Sale Photo</Tag>;
          case 'tip':
            return <Tag color="gold">Tip</Tag>;
          case 'stream_private':
            return <Tag color="blue">Private</Tag>;
          case 'stream_group':
            return <Tag color="green">Group</Tag>;
          default:
            return <Tag>{type}</Tag>;
        }
      }
    },
    {
      title: 'Tokens Received',
      dataIndex: 'grossPrice',
      key: 'grossPrice',
      render: (grossPrice: number) => <NumberFormat value={grossPrice} />
    },
    // {
    //   title: 'Net Price',
    //   dataIndex: 'netPrice',
    //   key: 'netPrice',
    //   render: (netPrice: number) => <NumberFormat value={netPrice} />,
    //   sorter: true
    // },
    {
      title: 'Conversion Rate',
      dataIndex: 'conversionRate',
      key: 'conversionRate'
    },
    // {
    //   title: `${capitalizeFirstLetter(role_data)} Earning Money`,
    //   dataIndex: 'price',
    //   key: 'price',
    //   render: (price: number) => <NumberFormat value={price} />
    // },
    // {
    //   title: `${capitalizeFirstLetter(role_data)} Commission`,
    //   dataIndex: 'commission',
    //   key: 'commission',
    //   render: (commission: number) => <NumberFormat value={commission} suffix="%" />
    // },
    {
      title: 'Admin Earnings',
      children: [
        {
          title: '%',
          id: 'adminIndependentCommission',
          dataIndex: 'commission',
          with: 50,
          render(commission: number) {
            return <span>{100 - commission}</span>;
          },
          onCell: () => ({ bordered: true })
        },
        {
          title: 'Tks',
          id: 'adminIndependentToken',
          with: 50,
          render: (_, record) => ((record.grossPrice - record.netPrice)).toFixed(2),
          onCell: () => ({ bordered: true })
        },
        {
          title: 'Amt',
          id: 'adminIndependentAmount',
          with: 50,
          render: (_, record) => ((record.grossPrice - record.netPrice) * record.conversionRate).toFixed(2),
          onCell: () => ({ bordered: true })

        }
      ]
    },
    {
      title: `${capitalizeFirstLetter(role_data)} Earnings`,
      children: [
        {
          title: '%',
          id: 'independentCommission',
          dataIndex: 'commission',
          with: 50,
          render(commission: number) {
            return <span>{commission}</span>;
          },
          onCell: () => ({ bordered: true })
        },
        {
          title: 'Tks',
          id: 'independentToken',
          dataIndex: 'netPrice',
          with: 50,
          render: (netPrice: number) => netPrice.toFixed(2),
          onCell: () => ({ bordered: true })
        },
        {
          title: 'Amt',
          id: 'independentAmount',
          dataIndex: 'price',
          with: 50,
          render: (price: number) => price.toFixed(2),
          onCell: () => ({ bordered: true })
        }
      ]
    },
    {
      title: 'Payout Status',
      key: 'independentPaid',
      dataIndex: 'isPaid',
      render: (isPaid: boolean) => <span>{isPaid ? 'Paid' : 'Remaining'}</span>
    }
  ];
  const dataSource = earnings.map((p) => ({ ...p, key: p._id }));

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        className="table"
        pagination={{
          total,
          pageSize,
          showSizeChanger: false,
          position: ['bottomCenter']
        }}
        scroll={{ x: 1200 }}
        showSorterTooltip={false}
        loading={searching}
        onChange={onChange}
        bordered
        components={{
          body: {
            cell: customCell
          }
        }}
      />
    </>
  );
};

export default EarningIndependentTable;
