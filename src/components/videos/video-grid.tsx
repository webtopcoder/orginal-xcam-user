import React from 'react';
import { IVideo } from 'src/interfaces';
import Link from 'next/link';
import { Card, Space } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { PlayCircleOutlined, EditOutlined } from '@ant-design/icons';
import { capitalizeFirstLetter } from 'src/lib/string';
import TrashButton from '@components/common/base/trash';
// import Loader from '@components/common/base/loader';

import './index.less';

interface IProps {
  data: IVideo[];
  success?: boolean;
  title?: string | string[];
  addVideos?: Function;
  hasMore?: boolean;
  remove?: Function;
  onViewVideo?: Function;
}

const VideoGrid = ({
  data,
  success,
  title,
  hasMore,
  addVideos,
  remove,
  onViewVideo
}: IProps) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={addVideos}
    hasMore={hasMore}
  >
    <Card className="video-grid" title={title} bordered={false}>
      {success && (
        data.length > 0 ? (
          data.map((video: IVideo) => (
            <Card.Grid className="video-box" key={video._id}>
              <div className="video-thumbnail">
                <img src={video.thumbnail || `${video?.video?.thumbnails[0]}` || '/no-image.jpg'} alt="" />
                <a className="play-icon">
                  <PlayCircleOutlined onClick={() => onViewVideo(video)} />
                </a>
              </div>
              <div className="video-info">
                <div>
                  Status:
                  {' '}
                  <strong>{capitalizeFirstLetter(video.status)}</strong>
                </div>
                <Space>
                  <Link
                    href={{
                      pathname: '/account/performer/videos/update',
                      query: { video: JSON.stringify(video) }
                    }}
                    as={`/account/performer/videos/${video._id}/update`}
                  >
                    <a>
                      <EditOutlined />
                    </a>
                  </Link>
                  <TrashButton confirm={() => remove(video._id)} />
                </Space>
              </div>
            </Card.Grid>
          ))
        ) : (
          <p>
            There is no videos, click
            {' '}
            <Link href="/account/performer/videos/add">
              <a>here</a>
            </Link>
            {' '}
            to upload
          </p>
        )
      )}
    </Card>
  </InfiniteScroll>
);
VideoGrid.defaultProps = {
  success: false,
  title: '',
  addVideos: null,
  hasMore: false,
  remove: false,
  onViewVideo: false
};
export default VideoGrid;
