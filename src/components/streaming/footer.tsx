/* eslint-disable no-return-assign */
import './footer.less';
import { SETTING_KEYS } from 'src/constants';
import React from 'react';
import {
  Row, Col, Button, message
} from 'antd';
import { IPerformer, IUser, StreamSettings } from 'src/interfaces';
import { PlusCircleOutlined, UserOutlined, CrownOutlined } from '@ant-design/icons';
import { checkUserLogin, getResponseError } from 'src/lib/utils';
import Router from 'next/router';
import Popup from '@components/common/base/popup';
import { transactionService } from 'src/services';
import NumberFormat from '@components/common/layout/numberformat';
import { updateCurrentUserBalance } from '@redux/user/actions';
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelecter } from '@redux/selectors';
import SendTipContent from './tip/content';

const btnStyle = { height: 50, marginBottom: 1 };

interface Interface {
  performer: IPerformer;
  inGroupChat?: boolean;
  inPrivateChat?: boolean;
  settings: StreamSettings;
}

const Footer = ({
  performer,
  inGroupChat,
  inPrivateChat,
  settings
}: Interface) => {
  const tipPopupRef = React.useRef<Popup>();
  let contentRef;
  const { username, _id } = performer;
  const [tipping, setTipping] = React.useState(false);
  const [disableOk, setDisableOk] = React.useState(false);
  const user = useSelector((state) => currentUserSelecter(state)) as IUser;
  const loggedIn: boolean = useSelector((state: any) => state.auth.loggedIn);
  const activeConversation = useSelector((state: any) => state.streamMessage.activeConversation);

  const dispatch = useDispatch();
  const handleError = async (e) => {
    const error = await Promise.resolve(e);
    message.error(getResponseError(error));
  };
  const goChatRoom = (roomName: 'privatechat' | 'groupchat') => {
    if (!checkUserLogin(loggedIn, user)) {
      if (process.browser) {
        Router.push('/auth/login');
      }
      return;
    }

    const option = roomName === 'privatechat' ? SETTING_KEYS.OPTION_FOR_PRIVATE : SETTING_KEYS.OPTION_FOR_GROUP;
    const path = settings[option] === 'webrtc' ? 'webrtc/' : '';
    Router.push(
      {
        pathname: `/stream/${path}${roomName}`,
        query: { username, performer: JSON.stringify(performer) }
      },
      `/stream/${path}${roomName}/${username}`
    );
  };

  const getMoreTokens = () => {
    if (!checkUserLogin(loggedIn, user)) {
      if (process.browser) {
        Router.push('/auth/login');
      }
      return;
    }

    Router.push('/account/user/funds-tokens');
  };

  const sendTip = () => {
    if (!checkUserLogin(loggedIn, user)) {
      message.error(`Please login to send tip to ${username}!`);
      return;
    }

    tipPopupRef.current && tipPopupRef.current.setVisible(true);
  };

  const onOk = async () => {
    if (activeConversation?.data?._id) {
      const ref = tipPopupRef.current;
      try {
        setTipping(true);
        const token = contentRef ? contentRef.getValueToken() : 0;
        if (parseInt(token, 10) <= 0) return;

        await transactionService.sendTipToken(
          _id,
          token,
          activeConversation.data._id
        );
        ref && ref.setVisible(false);
        dispatch(updateCurrentUserBalance(-token));
        const content = (
          <NumberFormat value={token} prefix="You sent " suffix=" tokens" />
        );
        message.success(content);
      } catch (e) {
        handleError(e);
      } finally {
        setTipping(false);
        ref && ref.setVisible(false);
      }
    } else {
      message.error('You have not joined this conversation.');
    }
  };

  return (
    <div className="stream-footer">
      <Popup
        title={`Tips to ${username}`}
        okButtonProps={{ disabled: disableOk }}
        content={(
          <SendTipContent
            ref={(ref) => (contentRef = ref)}
            setDisableOk={setDisableOk}
          />
        )}
        ref={tipPopupRef}
        loading={tipping}
        onOk={onOk}
        width={567}
      />
      <Row gutter={[1, 1]} style={{ marginBottom: '15px', marginTop: '1px' }}>
        <Col lg={6} xs={12} md={12}>
          <Button
            disabled={inGroupChat}
            type="primary"
            style={{ ...btnStyle }}
            onClick={() => goChatRoom('groupchat')}
            block
            icon={(
              <img
                className="anticon"
                src="/icons/group.svg"
                height={16}
                alt=""
              />
            )}
          >
            Group Chat
          </Button>
        </Col>
        <Col lg={6} xs={12} md={12}>
          <Button
            disabled={inPrivateChat}
            type="primary"
            style={{ ...btnStyle }}
            onClick={() => goChatRoom('privatechat')}
            block
            icon={<UserOutlined />}
          >
            Private Chat
          </Button>
        </Col>
        <Col lg={6} xs={12} md={12}>
          <Button
            type="primary"
            style={{ ...btnStyle }}
            block
            onClick={() => getMoreTokens()}
            icon={<CrownOutlined />}
          >
            Top-up My Tokens
          </Button>
        </Col>
        <Col lg={6} xs={12} md={12}>
          <Button
            type="primary"
            style={{ ...btnStyle }}
            onClick={() => sendTip()}
            block
            icon={<PlusCircleOutlined />}
          >
            Send Tip
          </Button>
        </Col>
      </Row>
    </div>
  );
};
Footer.defaultProps = {
  inGroupChat: false,
  inPrivateChat: false
};

export default Footer;
