import React from 'react';
// import Link from 'next/link';
import { Carousel } from 'antd';

import './banner.less';
import { IBanner } from 'src/interfaces';

interface IProps {
  banners: IBanner[];
  styleImage: { [key: string]: any };
  classnames?: string;
}
const renderBanner = (banner: IBanner, styleImage: { [key: string]: any }) => {
  const {
    type, href, _id, photo, contentHTML
  } = banner;
  if (type === 'html' && contentHTML) {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: contentHTML }} style={styleImage || {}} />;
  }

  return (
    <a href={href || '#'} target="_blank" rel="noreferrer" key={_id}>
      <img
        src={photo && photo.url}
        alt=""
        style={styleImage || {}}
      />
    </a>
  );
};
const Banner = ({ banners, styleImage, classnames }: IProps) => (
  <div>
    {banners && banners.length > 0 && (
      <Carousel autoplay arrows dots={false} effect="fade" className={classnames}>
        {banners.map((item) => (renderBanner(item, styleImage)
        ))}
      </Carousel>
    )}
  </div>
);

Banner.defaultProps = {
  classnames: ''
};
export default Banner;
