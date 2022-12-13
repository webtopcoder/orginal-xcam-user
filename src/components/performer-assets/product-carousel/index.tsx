import React from 'react';
import { Button, Col } from 'antd';
import { IProduct, IPerformer } from 'src/interfaces';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import ProductCard from 'src/components/products/product-card';
import Router from 'next/router';

import './product-carousel.less';

interface IProps {
  performer: IPerformer;
  products: Record<string, IProduct>;
  searching: boolean;
  success: boolean;
  purchaseProduct?: (item: IProduct, type: 'product') => void;
}

const Products = ({
  performer,
  products,
  searching,
  success,
  purchaseProduct
}: IProps) => {
  const ref = React.useRef(null);
  const [paddleShowing, setPaddleShowing] = React.useState(false);
  React.useEffect(() => {
    const productListElement = document.getElementsByClassName('product-list');
    if (
      productListElement.length
      && productListElement[0].clientWidth < productListElement[0].scrollWidth
    ) {
      setPaddleShowing(true);
    }
  }, [performer]);
  const scrollTo = (width?: number) => {
    const e: HTMLElement = ref.current;
    e.scroll({ left: width, behavior: 'smooth' });
  };
  return (
    !searching
    && success
    && performer.products.length > 0 && (
      <div className="product-carousel">
        <div className="product-header">
          <span className="shop-name">{`${performer.username}'s Shop`}</span>
          <Button type="primary" onClick={() => { Router.push(`/products?username=${performer.username}`); }}>See all Items</Button>
        </div>
        <LeftCircleFilled
          className="left-paddle paddle"
          hidden={!paddleShowing}
          onClick={() => scrollTo(-ref.current.clientWidth)}
        />
        <div className="product-list" ref={ref}>
          {performer.products.map((id) => (
            <Col xl={6} md={8} sm={10} xs={16} key={id} className="pad12-5">
              <ProductCard
                key={id}
                product={products[id]}
                onHandlePurchase={purchaseProduct}
              />
            </Col>

            // <PerformerProduct
            //   product={products[id]}
            //   key={id}
            //   purchaseProduct={purchaseProduct}
            // />
          ))}
        </div>
        <RightCircleFilled
          hidden={!paddleShowing}
          className="right-paddle paddle"
          onClick={() => scrollTo(ref.current.clientWidth)}
        />
      </div>
    )
  );
};
Products.defaultProps = {
  purchaseProduct: null
};
export default Products;
