/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { IPerformer } from 'src/interfaces';
import {
  Row, Col, Button, Skeleton
} from 'antd';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon
} from '@components/common/base/icons';
import { capitalizeFirstLetter, formatDate, getAge } from 'src/lib';
import Link from 'next/link';

import './index.less';

interface IProps {
  performer: IPerformer;
  searching?: boolean;
  success?: boolean;
  placeholderAvatarUrl?: string;
}

const renderPerformerTags = (tags: string[] = []) => tags.map((tag, index) => (
  <Link
    key={`performer-tag-${tag}`}
    href={{ pathname: '/tag', query: { tags: tag } }}
    as={`/tag/${tag}`}
  >
    <a>
      <span>
        #
        {index < tags.length - 1 ? `${tag}, ` : tag}
      </span>
    </a>
  </Link>
));

const ProfileCard = ({
  performer, searching, success, placeholderAvatarUrl
}: IProps) => {
  const {
    avatar,
    username,
    createdAt,
    gender,
    ethnicity,
    country,
    height,
    weight,
    dateOfBirth,
    tags,
    socials,
    lastStreamingTime,
    eyes
  } = performer;
  return (
    <div className="profile-card">
      {searching ? (
        <Skeleton loading paragraph={{ rows: 4 }} />
      ) : success && (
        <>

          <div className="avatar">
            <img src={avatar || placeholderAvatarUrl} alt="" />
          </div>

          <div className="profile">
            <table>
              <tbody>
                <tr>
                  <th style={{ width: 150, minWidth: 150 }} />
                  <th />
                </tr>
                <tr>
                  <td className="lable">
                    Username
                  </td>
                  <td className="text">
                    {username}
                  </td>
                </tr>
                {gender && (
                <tr>
                  <td className="lable">
                    Gender
                  </td>
                  <td className="text">
                    {gender}
                  </td>
                </tr>
                )}
                {createdAt && (
                <tr>
                  <td className="lable">
                    Member Since
                  </td>
                  <td className="text">
                    {formatDate(createdAt, 'MMMM DD, YYYY')}
                  </td>
                </tr>
                )}
                <tr>
                  <td className="lable">
                    Last Broadcast
                  </td>
                  <td className="text">
                    {formatDate(lastStreamingTime, 'LLLL')}
                  </td>
                </tr>
                {ethnicity && (
                <tr>
                  <td className="lable">
                    Ethnicity
                  </td>
                  <td className="text">
                    {ethnicity}
                  </td>
                </tr>
                )}
                {/* <div className="orientationn">
              <span className="lable">Orientation: </span>
              <span className="" style={{ textTransform: 'capitalize' }} />
            </div> */}
                {dateOfBirth && (
                <tr>
                  <td className="lable">
                    Age
                  </td>
                  <td className="text">
                    {getAge(dateOfBirth)}
                  </td>
                </tr>
                )}
                {country && (
                <tr>
                  <td className="lable">
                    Country
                  </td>
                  <td className="text">
                    {country}
                  </td>
                </tr>
                )}
                {height && (
                <tr>
                  <td className="lable">
                    Height
                  </td>
                  <td className="text">
                    {height}
                  </td>
                </tr>
                )}
                {weight && (
                <tr>
                  <td className="lable">
                    Weight
                  </td>
                  <td className="text">
                    {weight}
                  </td>
                </tr>
                )}
                {eyes && (
                <tr>
                  <td className="lable">
                    Eyes
                  </td>
                  <td className="text">
                    {eyes}
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
          <br />
          {performer.aboutMe && (
          <p>
            About
            {' '}
            {username}
          </p>
          )}
          <div className="bio">
            <span>{performer.aboutMe}</span>
          </div>
          <br />
          <p>What We do on webcam</p>
          {tags && tags.length > 0 && <div className="tags">{renderPerformerTags(tags)}</div>}
          {performer.schedule
            && (
            <>
              <p>{`Working hours of ${capitalizeFirstLetter(performer.username)}`}</p>
              <Row className="schedule">
                {performer.schedule
                  && Object.keys(performer.schedule).map((index: string) => (
                    <Col sm={{ span: 8 }} xs={{ span: 12 }} key={index}>
                      <span
                        style={{
                          color: '#ff0066',
                          fontWeight: 'bold',
                          textTransform: 'uppercase'
                        }}
                      >
                        {`${index}  `}
                      </span>
                      <span
                        style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}
                      >
                        {performer.schedule[index]?.start !== '00:00' && performer.schedule[index]?.end !== '00:00'
                          ? `${performer.schedule[index]?.start || 'N/A'} - ${performer.schedule[index]?.end || 'N/A'}`
                          : 'N/A'}
                      </span>
                    </Col>
                  ))}
              </Row>
            </>
            )}
          <br />
          {socials && socials.length > 0 && <p>Find Me On</p>}
          <Row className="social" gutter={10}>
            {socials && socials.facebook && (
            <Col>
              <a href={socials.facebook} target="_blank" rel="noreferrer">
                <Button
                  type="primary"
                  style={{ padding: 0, width: 36, height: 32 }}
                >
                  <FacebookIcon />
                </Button>
              </a>
            </Col>
            )}
            {socials && socials.twitter && (
            <Col>
              <a href={socials.twitter} target="_blank" rel="noreferrer">
                <Button
                  type="primary"
                  style={{ padding: 0, width: 36, height: 32 }}
                >
                  <TwitterIcon />
                </Button>
              </a>
            </Col>
            )}
            {socials && socials.instagram && (
            <Col>
              <a href={socials.instagram} target="_blank" rel="noreferrer">
                <Button
                  type="primary"
                  style={{ padding: 0, width: 36, height: 32 }}
                >
                  <InstagramIcon />
                </Button>
              </a>
            </Col>
            )}
          </Row>
        </>
      )}
    </div>
  );
};
ProfileCard.defaultProps = {
  searching: false,
  success: false,
  placeholderAvatarUrl: '/no-avatar.png'
};

export default ProfileCard;
