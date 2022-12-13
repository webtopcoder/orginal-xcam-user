import React from 'react';
import { Button, Col } from 'antd';
import { IVideo, IPerformer } from 'src/interfaces';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import Router from 'next/router';
import PerformerVideo from './video-item';

import './index.less';

interface IProps {
  performer: IPerformer;
  videos: Record<string, IVideo>;
  searching: boolean;
  success: boolean;
}

export const VideoCarousel = ({
  performer, videos, searching, success
}: IProps) => {
  const ref = React.useRef(null);
  const [paddleShowing, setPaddleShowing] = React.useState(false);
  React.useEffect(() => {
    const videoListElement = document.querySelector('.video-list');
    if (!videoListElement) {
      return;
    }

    if (videoListElement.clientWidth < videoListElement.scrollWidth) {
      setPaddleShowing(true);
    }
  }, [performer]);

  const scrollTo = (width: number) => {
    const e: HTMLElement = ref.current;
    e.scroll({ left: width, behavior: 'smooth' });
  };

  return (
    !searching
    && success
    && performer.videos.length > 0 && (
      <div className="video-carousel">
        <div className="video-header">
          <span className="shop-name">{`${performer.username}'s Videos`}</span>
          <Button
            type="primary"
            onClick={() => {
              Router.push(`/videos?username=${performer.username}`);
            }}
          >
            See all Items
          </Button>
        </div>
        <LeftCircleFilled
          className="left-paddle paddle"
          hidden={!paddleShowing}
          onClick={() => scrollTo(-ref.current.clientWidth)}
        />
        <div className="video-list" ref={ref}>
          {performer.videos.map((id) => (
            <Col xl={6} md={8} sm={10} xs={16} key={id} className="pad12-5">
              <PerformerVideo video={videos[id]} key={id} />
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

export default VideoCarousel;
