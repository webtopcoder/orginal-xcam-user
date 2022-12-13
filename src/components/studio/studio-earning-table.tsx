import React from 'react';
import { Table } from 'antd';
import { Breakpoint } from 'src/lib';

interface IProps {
  earnings: any;
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
}

const breakPoint: Breakpoint[] = ['md'];

const EarningHistoryTable = ({
  earnings,
  searching,
  total,
  pageSize,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'Commission Time',
      key: 'daterange',
      responsive: breakPoint,
      render(data, record) {
        return <span>{`${record.fromDate} - ${record.toDate}`}</span>;
      }
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type'
    },
    {
      title: 'From',
      dataIndex: 'performer',
      key: 'performer'
    },
    {
      title: 'Date & Time',
      dataIndex: 'time',
      key: 'time'
    }
  ];
  const dataSource = earnings.map((p) => ({ ...p, key: p._id }));

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

export default EarningHistoryTable;
