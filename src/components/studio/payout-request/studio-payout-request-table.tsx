import React from 'react';
import { Table, Tag, Space } from 'antd';
import { Breakpoint, formatDate } from 'src/lib';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import Router from 'next/router';

interface IProps {
  requests: any;
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
  showDetail?(request): Function;
}

const breakPoint: Breakpoint[] = ['md'];

const StudioPayoutRequestTable = ({
  requests,
  searching,
  total,
  pageSize,
  onChange,
  showDetail
}: IProps) => {
  const columns = [
    {
      title: 'Date',
      key: 'daterange',
      responsive: breakPoint,
      render(data, record) {
        return (
          <span>
            {`${formatDate(record.fromDate, 'DD/MM/YYYY')} - ${formatDate(
              record.toDate,
              'DD/MM/YYYY'
            )}`}
          </span>
        );
      }
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render(status: string) {
        switch (status) {
          case 'pending':
            return <Tag color="orange">Pending</Tag>;
          case 'approved':
            return <Tag color="blue">Approved</Tag>;
          case 'cancelled':
            return <Tag color="volcano">Canceled</Tag>;
          case 'completed':
            return <Tag color="green">Completed</Tag>;
          default:
            return <Tag color="green">Completed</Tag>;
        }
      }
    },
    {
      title: 'Request Date',
      key: 'createdAt',
      dataIndex: 'createdAt',
      render(data, record) {
        return <span>{formatDate(record.fromDate)}</span>;
      }
    },
    {
      title: 'Action',
      dataIndex: 'performer',
      key: 'performer',
      render(data, record) {
        const { id } = record?._id;
        return (
          <Space>
            <EyeOutlined onClick={() => showDetail(record)} />
            <EditOutlined
              onClick={() => Router.push(`/studio/payout-requests/update?id=${id}`)}
            />
          </Space>
        );
      }
    }
  ];
  const dataSource = requests.map((p) => ({ ...p, key: p._id }));

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      className="table"
      pagination={{
        total,
        pageSize
      }}
      scroll={{ x: true }}
      showSorterTooltip={false}
      loading={searching}
      onChange={onChange}
    />
  );
};
StudioPayoutRequestTable.defaultProps = {
  showDetail: null
};

export default StudioPayoutRequestTable;
