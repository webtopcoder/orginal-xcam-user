import React from 'react';
import { IPerformer, GENDER, IBanner } from 'src/interfaces';
import Link from 'next/link';
import {
  Card, Space, Row, Col, Pagination
} from 'antd';
import {
  MaleSignIcon,
  FemaleSignIcon,
  TransgenderIcon
} from '@components/common/base/icons';
import { createSelector, generateUuid } from 'src/lib';
import {
  HeartFilled,
  HeartOutlined,
  EyeOutlined,
  LockOutlined
} from '@ant-design/icons';
import './index.less';
import { chunk } from 'lodash';
import Banner from '@components/common/layout/banner';
import Loader from '@components/common/base/loader';
import { connect } from 'react-redux';

interface IProps {
  loggedIn?: boolean;
  setFilter?: Function;
  limit?: number;
  offset?: number;
  data: IPerformer[];
  total?: number;
  success?: boolean;
  banners?: Record<string, IBanner[]>;
  searching?: boolean;
  title?: string | string[];
  onLike?: Function;
  isPage?: boolean;
  placeholderAvatarUrl?: string;
  render?: (performer: IPerformer) => React.ReactNode;
}

const renderTitle = (gender: GENDER, name: string) => (
  <div className="p-title">
    <span style={{ marginRight: 5 }}>{name}</span>
    {gender === 'male' ? (
      <span className="anticon">
        <MaleSignIcon />
      </span>
    ) : gender === 'female' ? (
      <span className="anticon">
        <FemaleSignIcon />
      </span>
    ) : (
      <span className="anticon">
        <TransgenderIcon />
      </span>
    )}
  </div>
);

const renderTags = (tags: string[]) => (
  <Space className="tags" wrap size={[5, 2]}>
    {tags.map((tag) => (
      <Link
        href={{ pathname: '/tag', query: { tags: tag } }}
        key={tag}
        as={`/tag/${tag}`}
      >
        <a>
          #
          {tag}
        </a>
      </Link>
    ))}
  </Space>
);

interface IGridCard {
  performer: IPerformer;
  loggedIn: boolean;
  onLike: any;
  className: string;
  placeholderAvatarUrl: string;
}
export const GridCard = ({
  performer,
  loggedIn,
  onLike,
  className,
  placeholderAvatarUrl
}: IGridCard) => {
  const { isOnline, streamingStatus } = performer;
  const statusClassNames = ['p-status'];
  let status = 'offline';
  if (isOnline) {
    switch (streamingStatus) {
      case 'private':
        statusClassNames.push('private');
        status = 'private chat';
        break;
      case 'group':
        statusClassNames.push('group');
        status = 'group chat';
        break;
      case 'public':
        status = 'live';
        statusClassNames.push('online');
        break;
      default:
        status = 'online';
        statusClassNames.push('online');
        break;
    }
  } else {
    statusClassNames.push('offline');
  }
  const defaultPlaceholderAvatarUrl = placeholderAvatarUrl || '/default-user-icon.png';

  return (
    <Card.Grid className={className} key={performer._id} hoverable={false}>
      {performer.isBlocked && (
        <div className="blocked-thumb">
          <LockOutlined />
        </div>
      )}
      <Link
        href={{
          pathname: '/stream',
          query: { performer: JSON.stringify(performer) }
        }}
        as={`/profile/${performer.username}`}
      >
        <a>
          <div className="performer-avatar">
            <img
              className="image-performer"
              src={
                typeof performer.avatar === 'string'
                && performer.avatar.length > 0
                  ? performer.avatar
                  : defaultPlaceholderAvatarUrl
              }
              alt=""
            />
            <span className={statusClassNames.join(' ')}>{status}</span>
            {renderTitle(performer.gender, performer.username)}
            {performer?.stats?.views > 0 && (
              <div className="p-viewer">
                <EyeOutlined style={{ marginRight: 5 }} />
                <span>{performer.stats.views}</span>
              </div>
            )}
          </div>
        </a>
      </Link>
      <div className="performer-bottom">
        <Row justify="space-between">
          <Col>
            <div>{performer.tags && renderTags(performer.tags)}</div>
          </Col>
          <Col>
            <div
              aria-hidden
              hidden={!loggedIn}
              className="p-favorite"
              onClick={() => onLike(performer)}
            >
              {performer.isFavorite ? (
                <HeartFilled className="icon" />
              ) : (
                <HeartOutlined className="icon" />
              )}
            </div>
          </Col>
        </Row>
        <div className="about-me">{performer?.aboutMe}</div>
      </div>
    </Card.Grid>
  );
};

const PerformerGrid = ({
  data,
  searching,
  success,
  title,
  onLike,
  loggedIn,
  isPage,
  offset,
  limit,
  total,
  setFilter,
  placeholderAvatarUrl,
  banners,
  render
}: IProps) => {
  const { topBanners, rightBanners, bottomBanners } = banners;
  const RowGrid = ({ dataSource }: { dataSource: IPerformer[] }) => (
    <Row style={{ width: '100%' }}>
      {dataSource
        && dataSource.length > 0
        && dataSource.map((performer: IPerformer) => (
          <GridCard
            placeholderAvatarUrl={placeholderAvatarUrl}
            className="performer-box"
            key={performer._id}
            performer={performer}
            loggedIn={loggedIn}
            onLike={onLike}
          />
        ))}
    </Row>
  );

  const renderGrid = () => {
    const { length } = data;
    if (length <= 12) {
      return (
        <Row style={{ width: '100%' }}>
          {rightBanners && rightBanners.length > 0 ? (
            <>
              <Col lg={16} md={16} xs={24}>
                <Row>
                  {data
                    && data.length > 0
                    && data.map((performer: IPerformer) => (
                      <GridCard
                        placeholderAvatarUrl={placeholderAvatarUrl}
                        className="performer-box performer-box-4-item"
                        key={performer._id}
                        performer={performer}
                        loggedIn={loggedIn}
                        onLike={() => onLike(performer)}
                      />
                    ))}
                </Row>
              </Col>
              <Col lg={8} md={8} xs={24}>
                <Banner
                  classnames="right-banners"
                  banners={rightBanners}
                  styleImage={{ padding: '10px', width: '100%' }}
                />
              </Col>
            </>
          ) : (
            data
            && data.length > 0
            && data.map((performer: IPerformer) => (
              <GridCard
                placeholderAvatarUrl={placeholderAvatarUrl}
                className="performer-box"
                key={performer._id}
                performer={performer}
                loggedIn={loggedIn}
                onLike={() => onLike(performer)}
              />
            ))
          )}
        </Row>
      );
    }
    if (length > 12 && length <= 24) {
      const dataChunk = chunk(data, 12);
      return (
        <>
          {rightBanners && rightBanners.length > 0 ? (
            <>
              <Row style={{ width: '100%' }}>
                <Col lg={16} md={16} xs={24}>
                  <Row>
                    {dataChunk[0]
                      && dataChunk[0].length > 0
                      && dataChunk[0].map((performer: IPerformer) => (
                        <GridCard
                          placeholderAvatarUrl={placeholderAvatarUrl}
                          className="performer-box performer-box-4-item"
                          key={performer._id}
                          performer={performer}
                          loggedIn={loggedIn}
                          onLike={() => onLike(performer)}
                        />
                      ))}
                  </Row>
                </Col>
                <Col lg={8} md={8} xs={24}>
                  {rightBanners && rightBanners.length > 0 && (
                    <Banner
                      classnames="right-banners"
                      banners={rightBanners}
                      styleImage={{ padding: '10px', width: '100%' }}
                    />
                  )}
                </Col>
              </Row>
              <RowGrid dataSource={dataChunk[1]} />
            </>
          ) : (
            <RowGrid dataSource={data} />
          )}
        </>
      );
    }
    if (length > 24 && length <= 36) {
      const dataChunk = chunk(data, 12);
      return (
        <>
          <RowGrid dataSource={dataChunk[0]} />
          {rightBanners && rightBanners.length > 0 ? (
            <Row style={{ width: '100%' }}>
              <Col xl={16} lg={18} md={18} xs={24}>
                <Row>
                  {dataChunk[1]
                    && dataChunk[1].length > 0
                    && dataChunk[1].map((performer: IPerformer) => (
                      <GridCard
                        placeholderAvatarUrl={placeholderAvatarUrl}
                        className="performer-box performer-box-4-item"
                        key={performer._id}
                        performer={performer}
                        loggedIn={loggedIn}
                        onLike={() => onLike(performer)}
                      />
                    ))}
                </Row>
              </Col>
              <Col xl={8} lg={6} md={6} xs={24}>
                <Banner
                  classnames="right-banners"
                  banners={rightBanners}
                  styleImage={{ padding: '10px', width: '100%' }}
                />
              </Col>
            </Row>
          ) : (
            <RowGrid dataSource={dataChunk[1]} />
          )}
          <RowGrid dataSource={dataChunk[2]} />
        </>
      );
    }
    if (length > 36) {
      const dataChunk = chunk(data, 12);
      const lastDataChunk = dataChunk.slice(3);
      return (
        <>
          <RowGrid dataSource={dataChunk[0]} />
          {rightBanners && rightBanners.length > 0 ? (
            <Row style={{ width: '100%' }}>
              <Col xl={16} lg={18} md={18} xs={24}>
                <Row>
                  {dataChunk[1]
                    && dataChunk[1].length > 0
                    && dataChunk[1].map((performer: IPerformer) => (
                      <GridCard
                        placeholderAvatarUrl={placeholderAvatarUrl}
                        className="performer-box performer-box-4-item"
                        key={performer._id}
                        performer={performer}
                        loggedIn={loggedIn}
                        onLike={() => onLike(performer)}
                      />
                    ))}
                </Row>
              </Col>
              <Col xl={8} lg={6} md={6} xs={24}>
                <Banner
                  classnames="right-banners"
                  banners={rightBanners}
                  styleImage={{ padding: '10px', width: '100%' }}
                />
              </Col>
            </Row>
          ) : (
            <RowGrid dataSource={dataChunk[1]} />
          )}
          <RowGrid dataSource={dataChunk[2]} />
          {lastDataChunk.length > 0
            && lastDataChunk.map((v) => (
              <RowGrid key={generateUuid()} dataSource={v} />
            ))}
        </>
      );
    }
    return <></>;
  };

  const actions = setFilter && total > 0
    ? [
      total > limit && (
        <Pagination
          disabled={searching}
          current={Math.round(offset / limit) + 1}
          pageSize={limit}
          total={total}
          size="small"
          onChange={(page) => setFilter('offset', (page - 1) * limit)}
          showSizeChanger={false}
        />
      )
    ]
    : [];

  if (render) {
    /**
     * placeholderAvatarUrl props
     */
    return (
      <Card
        className="performer-grid"
        title={title}
        bordered={false}
        hoverable={false}
        bodyStyle={{ padding: '0' }}
        actions={actions}
      >
        <Loader spinning={searching} />
        {data.length > 0 && data.map((performer) => render(performer))}
      </Card>
    );
  }

  return (
    <>
      {isPage && topBanners?.length > 0 && (
        <Banner
          banners={topBanners}
          styleImage={{ padding: '10px', width: '100%' }}
        />
      )}
      <Card
        className="performer-grid"
        title={title}
        bordered={false}
        hoverable={false}
        bodyStyle={{ padding: '0' }}
        actions={actions}
      >
        <Loader spinning={searching} />
        {success
          // eslint-disable-next-line no-nested-ternary
          && (total > 0 ? (
            isPage ? (
              renderGrid()
            ) : (
              data.map((performer) => (
                <GridCard
                  key={performer?._id}
                  placeholderAvatarUrl={placeholderAvatarUrl}
                  className="performer-box"
                  performer={performer}
                  loggedIn={loggedIn}
                  onLike={(p: IPerformer) => onLike(p)}
                />
              ))
            )
          ) : (
            <div className="ant-card-head">No model found.</div>
          ))}
      </Card>
      {isPage && bottomBanners?.length > 0 && (
        <Banner
          banners={bottomBanners}
          styleImage={{ padding: '10px', width: '100%' }}
        />
      )}
    </>
  );
};
PerformerGrid.defaultProps = {
  loggedIn: false,
  setFilter: null,
  limit: 0,
  offset: 0,
  total: 0,
  success: false,
  searching: false,
  title: '',
  onLike: null,
  render: null,
  isPage: false,
  banners: {},
  placeholderAvatarUrl: '/no-avatar.png'
};

const bannerSelecter = (state) => state.banner.listBanners.data;
const filterBanner = createSelector(bannerSelecter, (banners) => {
  if (!banners.length) return {};

  return {
    topBanners: banners.filter((b) => b.position === 'top'),
    rightBanners: banners.filter((b) => b.position === 'right'),
    bottomBanners: banners.filter((b) => b.position === 'bottom')
  };
});
const mapStates = (state: any) => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl,
  banners: filterBanner(state)
});

export default connect(mapStates)(PerformerGrid);
