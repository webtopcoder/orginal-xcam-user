import React from 'react';
import { Button, Col } from 'antd';
import { IPerformer, IPerformerGallery } from 'src/interfaces';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import GalleryCard from '@components/galleries/gallery-card';
import Router from 'next/router';
import './index.less';

interface IProps {
  performer: IPerformer;
  galleries?: Record<string, IPerformerGallery>;
  searching: boolean;
  success: boolean;
  purchaseGallery?: (item: IPerformerGallery, type: string) => void;
}

const Gallery = ({
  performer, galleries, searching, success, purchaseGallery
}: IProps) => {
  const ref = React.useRef(null);
  const [paddleShowing, setPaddleShowing] = React.useState(false);
  React.useEffect(() => {
    const galleryListElement = document.getElementsByClassName('gallery-list');
    if (
      galleryListElement.length
      && galleryListElement[0].clientWidth < galleryListElement[0].scrollWidth
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
    && performer.galleries.length > 0 && (
      <div className="gallery-carousel">
        <div className="gallery-header">
          <span className="shop-name">{`${performer.username}'s Galleries`}</span>
          <Button type="primary" onClick={() => { Router.push(`/galleries?username=${performer.username}`); }}>See all Items</Button>
        </div>
        <LeftCircleFilled
          className="left-paddle paddle"
          hidden={!paddleShowing}
          onClick={() => scrollTo(-ref.current.clientWidth)}
        />
        <div className="gallery-list" ref={ref}>
          {performer.galleries.map((id) => (
            <Col xl={6} md={8} sm={10} xs={16} key={id} className="pad12-5">
              <GalleryCard gallery={galleries[id]} key={id} onHandlePurchase={purchaseGallery} />
            </Col>
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
Gallery.defaultProps = {
  purchaseGallery: null,
  galleries: null
};
export default Gallery;
