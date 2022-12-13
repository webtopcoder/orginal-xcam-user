import React from 'react';
import { IFavourite, GENDER, ICountry } from 'src/interfaces';
import Link from 'next/link';
import { Card, Pagination, Popconfirm } from 'antd';
import {
  MaleSignIcon,
  FemaleSignIcon,
  TransgenderIcon
} from '@components/common/base/icons';
import { getAge } from 'src/lib';
import { HeartFilled } from '@ant-design/icons';
import './favourite-performer-grid.less';
import { connect } from 'react-redux';

interface IProps {
  data: IFavourite[];
  total?: number;
  success?: boolean;
  searching: boolean;
  title?: string | string[];
  countries: ICountry[];
  dislike: Function;
  setFilter: Function;
  query: {
    offset: number,
    limit: number
  }
  placeholderAvatarUrl?: string;
}

const renderGender = (gender: GENDER) => {
  switch (gender) {
    case 'male':
      return <MaleSignIcon color="#666" />;
    case 'female':
      return <FemaleSignIcon color="#666" />;
    case 'transgender':
      return <TransgenderIcon color="#666" />;
    default:
      return <></>;
  }
};

const FavouritePerformerGrid = ({
  data,
  success,
  searching,
  title,
  dislike,
  setFilter,
  countries,
  total,
  query: { limit, offset },
  placeholderAvatarUrl
}: IProps) => {
  const renderFlag = (country: string) => {
    const pCountry = countries.find((c) => c.code === country);
    return pCountry && <span className="performer-flag"><img alt="" src={pCountry.flag} /></span>;
  };

  return (
    <Card
      className="favorite-performer-grid"
      title={title}
      bordered={false}
      hoverable={false}
      actions={[
        total > 0 && total > limit && (
        <Pagination
          disabled={searching}
          current={Math.round(offset / limit) + 1}
          pageSize={limit}
          total={total}
          size="small"
          onChange={(page) => setFilter('offset', (page - 1) * limit)}
        />
        )
      ]}
    >
      {success && data.length > 0 ? (
        data.map((favourite) => (
          <Card.Grid
            className="performer-box"
            key={favourite.favoriteId}
            hoverable={false}
          >
            <Link
              href={{
                pathname: '/stream',
                query: { performer: JSON.stringify(favourite.performer) }
              }}
              as={`/profile/${favourite.performer?.username}`}
            >
              <a className="performer-avatar">
                <img src={favourite.performer?.avatar || placeholderAvatarUrl} alt="" />
              </a>
            </Link>
            <div className="performer-title">
              <div className="performer-name">
                <span>{favourite.performer?.username || 'N/A'}</span>
              </div>
              {favourite.performer?.dateOfBirth && (
              <span>
                (
                  {getAge(favourite.performer?.dateOfBirth)}
                )
              </span>
              )}
              {renderGender(favourite.performer?.gender)}
              {renderFlag(favourite.performer?.country)}
            </div>
            <Popconfirm
              placement="bottom"
              title="Are you sure to dislike this performer!"
              onConfirm={() => dislike(favourite.performer)}
              okText="Yes"
              cancelText="No"
            >
              <HeartFilled className="icon" />
            </Popconfirm>
          </Card.Grid>
        ))) : (
          <p>No favorites</p>
      )}
    </Card>
  );
};
FavouritePerformerGrid.defaultProps = {
  total: 0,
  success: false,
  title: '',
  placeholderAvatarUrl: '/no-avatar.png'
};

const mapStateToProps = (state) => ({ placeholderAvatarUrl: state.ui.placeholderAvatarUrl });
export default connect(mapStateToProps)(FavouritePerformerGrid);
