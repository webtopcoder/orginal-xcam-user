import React from 'react';
import { Table } from 'antd';
import { Breakpoint } from 'src/lib';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  commissions: any;
  searching: boolean;
  total: number;
  pageSize: number;
  onChange(pagination, filters, sorter, extra): Function;
  deleteCommission(id: string): Function;
}

const breakPoint: Breakpoint[] = ['md'];

const EarningHistoryTable = ({
  commissions,
  searching,
  total,
  pageSize,
  onChange,
  deleteCommission
}: IProps) => {
  const columns = [
    {
      title: 'Performer',
      dataIndex: 'performer',
      key: 'performer',
      responsive: breakPoint
    },
    {
      title: '(%) Commission',
      dataIndex: 'commission',
      key: 'performer'
    },
    {
      title: 'Active Date',
      key: 'activeDate',
      dataIndex: 'activeDate'
    },
    {
      title: 'Acions',
      dataIndex: '_id',
      render: (id: string) => (
        <span>
          <DeleteOutlined onClick={() => deleteCommission(id)} />
        </span>
      )
    }
  ];
  const dataSource = commissions.map((p) => ({ ...p, key: p._id }));

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
