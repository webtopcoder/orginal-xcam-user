import React from 'react';
import moment from 'moment';
import { CrownTwoTone, InfoCircleOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { chatBoxMessageClassName } from '@lib/utils';
import './Message.less';

export default function Message(dataProps : any) {
  const {
    data,
    // isMine,
    // startsSequence,
    // endsSequence,
    showTimestamp,
    isOwner,
    canDelete,
    onDelete
    // data: { type }
  } = dataProps;

  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const menu = (
    <Menu>
      <Menu.Item onClick={onDelete}>
        <a>delete</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={chatBoxMessageClassName(dataProps)}
      // className={[
      //   'message',
      //   `${isMine && data.type !== 'tip' ? 'mine' : ''}`,
      //   `${data.type === 'tip' ? 'tip' : ''}`,
      //   `${startsSequence ? 'start' : ''}`,
      //   `${endsSequence ? 'end' : ''}`
      // ].join(' ')}
    >
      {data.text && !data.isSystem && (
        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            {canDelete && (
              <Dropdown overlay={menu} placement="topRight">
                <span>
                  <InfoCircleOutlined />
                  {' '}
                </span>
              </Dropdown>
            )}
            {data.senderInfo && (
              <span className="u-name">
                {isOwner && (
                <span style={{ fontSize: 16 }}>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                  {' '}
                </span>
                )}
                {data.senderInfo.username}
                {data.type !== 'tip' ? ': ' : ' '}
              </span>
            )}
            {!data.imageUrl && data.text}
            {' '}
            {data.imageUrl && (
              <a
                title="Click to view full content"
                href={
                  data.imageUrl.indexOf('http') === -1 ? '#' : data.imageUrl
                }
                target="_blank"
                rel="noreferrer"
              >
                <img src={data.imageUrl} width="180px" alt="" />
              </a>
            )}
          </div>
        </div>
      )}
      {data.text && data.isSystem && (
        <p style={{ textAlign: 'center', fontSize: '14px' }}>{data.text}</p>
      )}
      {showTimestamp && !data.isSystem && (
        <div className="timestamp">{friendlyTimestamp}</div>
      )}
    </div>
  );
}
