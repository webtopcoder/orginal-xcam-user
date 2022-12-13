import React from 'react';
import { Button } from 'antd';
import { IPerformer } from 'src/interfaces';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import Router from 'next/router';
import PerformerGrid from './performer-grid';

import './performer-carousel.less';

interface IProps {
  performers: IPerformer[];
  searching: boolean;
  success: boolean;
}

export const PerformerCarousel = ({ performers, searching, success }: IProps) => {
  const ref = React.useRef(null);
  const [paddleShowing, setPaddleShowing] = React.useState(false);
  React.useEffect(() => {
    const performerListElement = document.getElementsByClassName(
      'performer-grid'
    );
    if (
      performerListElement.length
      && performerListElement[0].clientWidth < performerListElement[0].scrollWidth
    ) {
      setPaddleShowing(true);
    }
  }, [performers]);
  const scrollTo = (width?: number) => {
    const e: HTMLElement = ref.current;
    e.scroll({ left: width, behavior: 'smooth' });
  };
  return (
    !searching
    && success && (
      <div className="performer-carousel">
        <div className="carousel-header">
          <span className="carousel-title">Related Cams</span>
          <Button type="primary" onClick={() => Router.push('/')}>
            See all Items
          </Button>
        </div>
        <LeftCircleFilled
          className="left-paddle paddle"
          hidden={!paddleShowing}
          onClick={() => scrollTo(-ref.current.clientWidth)}
        />
        <PerformerGrid
          total={performers ? performers.length : 0}
          data={performers}
          success={success}
          searching={searching}
        />
        <RightCircleFilled
          hidden={!paddleShowing}
          className="right-paddle paddle"
          onClick={() => scrollTo(ref.current.clientWidth)}
        />
      </div>
    )
  );
};

export default PerformerCarousel;
