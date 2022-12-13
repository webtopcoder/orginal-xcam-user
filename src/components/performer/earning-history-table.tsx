/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Table, Tag } from 'antd';
import { IEarning } from 'src/interfaces/earning';
import { IStudio, IUser } from 'src/interfaces';
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

const EarningHistoryTable = ({
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
      title: '',
      children: [
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
          dataIndex: 'targetInfo',
          key: 'from',
          render: (targetInfo: IUser) => targetInfo?.username || 'N/A'
        },
        {
          title: 'To',
          dataIndex: 'sourceInfo',
          key: 'to',
          render: (sourceInfo: IUser) => sourceInfo?.username || 'N/A'
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
        }
      ]
    },
    {
      title: 'Admin to Studio Transaction',
      className: 'admin-to-studio-transaction',
      style: { display: 'block' },
      children: [
        {
          title: 'Admin Earnings',
          children: [
            {
              title: '%',
              id: 'adPercent',
              dataIndex: 'commission',
              with: 50,
              render(commission: number) {
                return <span>{100 - commission}</span>;
              },
              onCell: () => ({ bordered: true })
            },
            {
              title: 'Tks',
              id: 'adToken',
              with: 50,
              render: (_, record) => <NumberFormat value={((record.grossPrice - record.netPrice))} />,
              onCell: () => ({ bordered: true })
            },
            {
              title: 'Amt',
              id: 'adAmount',
              with: 50,
              render: (_, record) => <NumberFormat value={((record.grossPrice - record.netPrice) * record.conversionRate)} />,
              onCell: () => ({ bordered: true })
            }
          ]
        },
        {
          title: `${capitalizeFirstLetter(role_data)} + Model Share`,
          children: [
            {
              title: '%',
              id: 'smPercent',
              dataIndex: 'commission',
              with: 50,
              render(commission: number) {
                return <span>{commission}</span>;
              },
              onCell: () => ({ bordered: true })
            },
            {
              title: 'Tks',
              id: 'smToken',
              dataIndex: 'netPrice',
              with: 50,
              render: (netPrice: number) => <NumberFormat value={netPrice} />,
              onCell: () => ({ bordered: true })
            },
            {
              title: 'Amt',
              id: 'smAmount',
              dataIndex: 'price',
              with: 50,
              render: (price: number) => <NumberFormat value={price} />,
              onCell: () => ({ bordered: true })
            }
          ]
        },
        {
          title: 'Payout from Admin',
          key: 'isPaid',
          dataIndex: 'payoutStatus',
          render: (payoutStatus: string) => <span>{payoutStatus === 'pending' ? 'Remaining' : 'Paid'}</span>,
          onCell: () => ({ bordered: true })
        }
      ]
    },
    {},
    {
      title: 'Studio to Model Transaction',
      className: 'studio-to-model-transaction',
      style: { display: 'block' },
      children: [
        {
          title: 'Studio Earnings',
          children: [
            {
              title: '%',
              id: 'studioPercent',
              with: 50,
              dataIndex: 'studioToModel',
              onCell: () => ({ bordered: true }),
              render: (studioToModel: IStudio) => 100 - studioToModel?.commission || 'N/A'
            },
            {
              title: 'Tks',
              id: 'studioToken',
              with: 50,
              dataIndex: 'studioToModel',
              onCell: () => ({ bordered: true }),
              // eslint-disable-next-line no-mixed-operators
              render: (studioToModel: IStudio) => <NumberFormat value={(studioToModel?.grossPrice - studioToModel?.netPrice) || 'N/A'} />
            },
            {
              title: 'Amt',
              id: 'studioAmount',
              with: 50,
              dataIndex: 'studioToModel',
              onCell: () => ({ bordered: true }),
              // eslint-disable-next-line no-mixed-operators
              render: (studioToModel: IStudio, record: IEarning) => <NumberFormat value={(studioToModel?.grossPrice - studioToModel?.netPrice) * record?.conversionRate || 'N/A'} />
            }
          ]
        },
        {
          title: 'Model Earnings',
          children: [
            {
              title: '%',
              id: 'modelPercent',
              with: 50,
              dataIndex: 'studioToModel',
              onCell: () => ({ bordered: true }),
              render: (studioToModel: IStudio) => studioToModel?.commission || 'N/A'
            },
            {
              title: 'Tks',
              id: 'modelToken',
              with: 50,
              dataIndex: 'studioToModel',
              onCell: () => ({ bordered: true }),
              render: (studioToModel: IStudio) => <NumberFormat value={studioToModel?.netPrice || 'N/A'} />
            },
            {
              title: 'Amt',
              id: 'modelAmount',
              dataIndex: 'studioToModel',
              with: 50,
              onCell: () => ({ bordered: true }),
              // eslint-disable-next-line no-mixed-operators
              render: (studioToModel: IStudio, record: IEarning) => <NumberFormat value={(studioToModel?.netPrice) * record?.conversionRate || 'N/A'} />
            }
          ]
        },
        {
          title: 'Payout to Model',
          key: 'modelPaid',
          dataIndex: 'studioToModel',
          // eslint-disable-next-line react/destructuring-assignment
          render: (studioToModel: IStudio) => <span>{studioToModel?.payoutStatus === 'pending' ? 'Remaining' : 'Paid'}</span>
        }
      ]
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

export default EarningHistoryTable;
