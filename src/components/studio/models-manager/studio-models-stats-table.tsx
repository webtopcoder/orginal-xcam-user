import React from 'react';
import { converDuration } from 'src/lib';
import { Table } from 'antd';
import { IPerformer } from 'src/interfaces';

interface IProps {
  data: IPerformer[];
  searching: boolean;
  pageSize: number;
  total: number;
  onChange(pagination, filters, sorter, extra): Function;
}

const StudioModelStatsTable = ({
  data,
  searching,
  total,
  pageSize,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'Username',
      key: 'username',
      dataIndex: 'username'
    },
    {
      title: 'Total Favorite',
      key: 'totalFavorite',
      render: (record) => record?.stats?.favorites || 0
    },
    {
      title: 'Total Galleries',
      key: 'totalGalleries',
      render: (record) => record?.stats?.totalGalleries || 0
    },
    {
      title: 'Total Photos',
      key: 'totalPhotos',
      render: (record) => record?.stats?.totalPhotos || 0
    },
    {
      title: 'Total Product',
      key: 'totalProducts',
      render: (record) => record?.stats?.totalProducts || 0
    },
    {
      title: 'Total Videos',
      key: 'totalVideos',
      render: (record) => record?.stats?.totalVideos || 0
    },
    {
      title: 'Total Stream Time',
      key: 'totalStreamTime',
      render: (record) => converDuration(record?.stats?.totalStreamTime || 0)
    },
    {
      title: 'Total Earned',
      key: 'totalTokenEarned',
      render: (record) => record?.stats?.totalTokenEarned
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <span style={{ textTransform: 'capitalize' }}>{status}</span>
    }
  ];
  const dataSource = data.map((d) => ({ ...d, key: d._id }));
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={searching}
      pagination={{ pageSize, total }}
      onChange={onChange}
      scroll={{ x: true }}
    />
  );
};
export default StudioModelStatsTable;
