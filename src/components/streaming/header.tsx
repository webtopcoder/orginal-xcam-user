import React from 'react';
import {
  Row, Col, Button, message
} from 'antd';
import { IPerformer, IUser, IUIConfig } from 'src/interfaces';
import { GiftIcon } from '@components/common/base/icons';
import { defaultColor } from 'src/lib';
import {
  HeartFilled,
  HeartOutlined,
  MailOutlined
} from '@ant-design/icons';
import { favouriteService } from 'src/services';
import { getResponseError, checkUserLogin } from 'src/lib/utils';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { currentUserSelecter } from '@redux/selectors';
import './header.less';

interface P {
  performer: IPerformer;
}

export const StreamingHeader = ({ performer }: P) => {
  const { _id, username } = performer;
  const user = useSelector((state) => currentUserSelecter(state)) as IUser;
  const ui = useSelector((state: any) => state.ui) as IUIConfig;
  const loggedIn: boolean = useSelector((state: any) => state.auth.loggedIn);
  const [isFavorite, setIsFavorite] = React.useState(
    performer.isFavorite || false
  );
  const handleError = async (e) => {
    const error = await Promise.resolve(e);
    message.error(getResponseError(error));
  };

  const onLike = async () => {
    if (!checkUserLogin(loggedIn, user)) {
      message.error('Please login to add favorite!');
      return;
    }

    try {
      await favouriteService.favorite(_id, isFavorite);
      setIsFavorite(!isFavorite);
    } catch (e) {
      handleError(e);
    }
  };

  const sendGift = () => {
    if (!checkUserLogin(loggedIn, user)) {
      message.error(`Please login to send gift to ${username}!`);
    }
  };

  const notify = () => {
    if (!checkUserLogin(loggedIn, user)) {
      message.error(`Please login to notify ${username}!`);
    }
  };

  const sendMessage = () => {
    if (!checkUserLogin(loggedIn, user)) {
      if (process.browser) {
        Router.push('/auth/login');
      }
      return;
    }

    Router.push({
      pathname: '/messages',
      query: {
        toSource: 'performer',
        toId: _id || ''
      }
    });
  };

  return (
    <>
      <Row className="stream-header">
        <Col sm={12} xs={24}>
          <div className="left-content">
            <img
              src={performer.avatar || ui?.placeholderAvatarUrl || '/user.png'}
              alt=""
              className="stream-avatar"
            />
            {' '}
            <div className="stream-title">
              <span>{performer.username}</span>
              {performer.streamingTitle && (
                <span>{performer.streamingTitle}</span>
              )}
            </div>
          </div>
          {/* <span>Report abuse</span> */}
        </Col>
        <Col sm={12} xs={24}>
          <div className="button-block">
            <Button
              type="primary"
              hidden
              icon={<GiftIcon />}
              onClick={() => sendGift()}
            >
              Send Gift
            </Button>
            <Button
              type="default"
              hidden
              icon={<HeartOutlined />}
              onClick={() => notify()}
            >
              Notify me
            </Button>
            <Button
              type="primary"
              icon={<MailOutlined />}
              onClick={() => sendMessage()}
            >
              Send message
            </Button>
            <Button
              type="default"
              onClick={() => onLike()}
              icon={
                  isFavorite ? (
                    <HeartFilled style={{ color: defaultColor.primaryColor }} />
                  ) : (
                    <HeartOutlined
                      style={{ color: defaultColor.primaryColor }}
                    />
                  )
                }
            >
              {isFavorite ? 'Unlike' : 'Like'}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StreamingHeader;
