/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import { IProduct } from 'src/interfaces';
import { Space } from 'antd';
import { HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { TokensIcon } from '@components/common/base/icons';
import NumberFormat from '@components/common/layout/numberformat';

interface IProps {
  product: IProduct;
  purchaseProduct?: (item: IProduct, type: 'product') => void;
}

const Products = ({ product, purchaseProduct }: IProps) => (
  <div className="item" key={`product-${product.name}`}>
    <Link
      shallow={false}
      href={{
        pathname: '/',
        query: {
          product: product._id
        }
      }}
    >
      <a
        className="item-image"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div
          className="item-token"
          onClick={(e) => {
            e.preventDefault();
            purchaseProduct(product, 'product');
          }}
        >
          <span className="text-buy">Buy</span>
          {' '}
          <TokensIcon />
          {' '}
          <NumberFormat value={product.token} />
        </div>
      </a>
    </Link>
    <div className="item-title">
      <span className="item-name">{product.name}</span>
      <Space className="item-toolbar">
        <HeartOutlined />
        <span>0</span>
        <EyeOutlined />
        <span>0</span>
      </Space>
    </div>
    <div className="item-description">{product.description}</div>
    <div className="item-tags" />
  </div>
);
Products.defaultProps = {
  purchaseProduct: null
};
export default Products;
