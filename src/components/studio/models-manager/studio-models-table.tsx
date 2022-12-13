import { getAge } from 'src/lib';
import {
  Table, Tag, Button, TableProps
} from 'antd';
import { IPerformer } from 'src/interfaces';
import React from 'react';

interface IProps extends TableProps<IPerformer> {
  placeholderAvatarUrl?: string;
  update: Function;
}

const StudioModelsTable = ({
  dataSource,
  loading,
  pagination,
  update,
  onChange,
  placeholderAvatarUrl
}: IProps) => {
  const columns = [
    {
      title: 'Avatar',
      key: 'avatar',
      dataIndex: 'avatar',
      render(avatar: string) {
        return (
          <img
            src={avatar || placeholderAvatarUrl || '/no-avatar.png'}
            style={{ width: '100px ' }}
            alt=""
          />
        );
      }
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email'
    },
    {
      title: 'Username',
      key: 'username',
      dataIndex: 'username'
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'dateOfBirth',
      render: (dateOfBirth) => getAge(dateOfBirth)
    },
    {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender'
    },
    {
      title: 'Country',
      key: 'country',
      dataIndex: 'country'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render(status: string) {
        switch (status) {
          case 'active':
            return <Tag color="green">Active</Tag>;
          case 'inactive':
            return <Tag color="Red">Inactive</Tag>;
          case 'pending':
            return <Tag color="orange">Pending</Tag>;
          default:
            return <Tag color="orange">Pending</Tag>;
        }
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: IPerformer) => (
        <Button type="primary" onClick={() => update(record)}>
          {
            // eslint-disable-next-line react/destructuring-assignment
            record.status === 'active' ? 'Inactive' : 'Active'
          }
        </Button>
      )
    }
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      pagination={pagination}
      onChange={onChange}
      scroll={{ x: true }}
      rowKey={(record) => record._id}
    />
  );
};
StudioModelsTable.defaultProps = { placeholderAvatarUrl: '' };
export default StudioModelsTable;
