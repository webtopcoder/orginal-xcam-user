import { IPerformer, IVideo } from 'src/interfaces';
import Link from 'next/link';
import { PlayCircleOutlined } from '@ant-design/icons';
import './index.less';
import React from 'react';

interface IProps {
  video: IVideo;
  performer: IPerformer;
  onClick: () => void;
}

const PurchasedVideoCard = ({ video, performer, onClick }: IProps) => {
  const { title, thumbnail, _id } = video;
  return (
    <div className="purchased-video-card">
      <div className="purchased-video-card-thumb">
        <span>
          <PlayCircleOutlined onClick={onClick} />
        </span>
        <img src={thumbnail || video.video?.thumbnails[0]} alt="" />
      </div>
      <div className="purchased-video-card-name">
        <Link
          href={{
            pathname: '/videos/detail',
            query: { id: _id, data: JSON.stringify({ ...video, performer }) }
          }}
          as={`/video/${_id}`}
        >
          <a>{title}</a>
        </Link>
      </div>
    </div>
  );
};

export default PurchasedVideoCard;
