import React from 'react';
import {
  Table, Button, Space, Menu, Input
} from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { IProduct } from 'src/interfaces';

import Link from 'next/link';

interface IProps {
  products: IProduct[];
  searching: boolean;
  total: number;
  pageSize: number;
  remove?: Function;
  onChange(pagination, filters, sorter, extra): Function;
}

const ProductsTable = ({
  products,
  searching,
  remove,
  total,
  pageSize,
  onChange
}: IProps) => {
  const columns = [
    {
      title: 'Product Image',
      dataIndex: 'image',
      key: 'image',
      responsive: ['md'] as any,
      render: (image: string, product: IProduct) => (
        <Link
          href={{
            pathname: '/account/performer/products/update',
            query: { id: product._id, product: JSON.stringify(product) }
          }}
          as={`/account/performer/products/${product._id}/update`}
        >
          <a>
            <img src={image} alt="" />
          </a>
        </Link>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'q',
      render: (name: string, product: IProduct) => (
        <Link
          href={{
            pathname: '/account/performer/products/update',
            query: { id: product._id, product: JSON.stringify(product) }
          }}
          as={`/account/performer/products/${product._id}/update`}
        >
          <a>{name}</a>
        </Link>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? '#ff0066' : undefined }} />
      ),
      filterDropdown: ({
        setSelectedKeys,
        confirm,
        clearFilters
      }: any) => (
        <div style={{ padding: 5 }}>
          <Input
            placeholder="Product Name"
            size="large"
            onChange={(event) => {
              if (!event.target.value) {
                setSelectedKeys([]);
                clearFilters();
              }
            }}
            onPressEnter={(event) => {
              setSelectedKeys([event.currentTarget.value]);
              confirm();
            }}
            allowClear
          />
        </div>
      )
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? '#ff0066' : undefined }} />
      ),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }: any) => (
        <div style={{ padding: 5 }}>
          <Menu
            style={{ borderRight: 'none' }}
            onSelect={(param) => {
              setSelectedKeys([param.key]);
              confirm();
            }}
            selectedKeys={selectedKeys}
          >
            <Menu.Item key="physical">Physical</Menu.Item>
            <Menu.Item key="digital">Digital</Menu.Item>
          </Menu>
          <Button
            onClick={() => {
              setSelectedKeys([]);
              clearFilters();
            }}
            style={{
              width: '100%',
              color: selectedKeys.length ? '#ff0066' : undefined,
              borderColor: selectedKeys.length ? '#ff0066' : undefined
            }}
          >
            Reset
          </Button>
        </div>
      ),
      render: (type) => <span style={{ textTransform: 'capitalize' }}>{type}</span>
    },
    {
      title: 'Tokens',
      dataIndex: 'token',
      key: 'token',
      sorter: true
    },
    {
      title: 'In Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock, item) => (item.type === 'physical' ? stock : 'N/A'),
      sorter: true
    },
    {
      title: 'Is Publish?',
      key: 'publish',
      dataIndex: 'publish',
      render: (text: boolean) => (
        <span>{text ? 'YES' : 'NO'}</span>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? '#ff0066' : undefined }} />
      ),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }: any) => (
        <div style={{ padding: 5 }}>
          <Menu
            style={{ borderRight: 'none' }}
            onSelect={(param) => {
              setSelectedKeys([param.key]);
              confirm();
            }}
            selectedKeys={selectedKeys}
          >
            <Menu.Item key="true">YES</Menu.Item>
            <Menu.Item key="false">NO</Menu.Item>
          </Menu>
          <Button
            onClick={() => {
              setSelectedKeys([]);
              clearFilters();
            }}
            style={{
              width: '100%',
              color: selectedKeys.length ? '#ff0066' : undefined,
              borderColor: selectedKeys.length ? '#ff0066' : undefined
            }}
          >
            Reset
          </Button>
        </div>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (product: IProduct) => {
        const { _id } = product;
        return (
          <Space size="middle">
            <Link
              as={`/account/performer/products/${_id}/update`}
              href={{
                pathname: '/account/performer/products/update',
                query: { id: _id, product: JSON.stringify(product) }
              }}
            >
              <a style={{ color: 'gray' }}>
                <EditOutlined />
              </a>
            </Link>
            <DeleteOutlined onClick={() => remove(_id)} />
          </Space>
        );
      }
    }
  ];
  const dataSource = products.map((p) => ({ ...p, key: p._id }));

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
ProductsTable.defaultProps = {
  remove: null
};
export default ProductsTable;
