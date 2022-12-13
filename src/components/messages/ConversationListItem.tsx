import React from 'react';
import { Badge } from 'antd';
import moment from 'moment';

import './ConversationListItem.less';

interface Iprops{
  data: any;
  selected: boolean;
  setActive: Function;
}

export default function ConversationListItem(props : Iprops) {
  const { setActive, selected, data } = props;
  const {
    recipientInfo, lastMessage, _id, updatedAt, lastMessageCreatedAt, totalNotSeenMessages = 0
  } = data;
  const className = selected
    ? 'conversation-list-item active'
    : 'conversation-list-item';

  return (
    <div
      aria-hidden="true"
      className={className}
      onClick={() => setActive(_id)}
    >
      <div className="conversation-left-corner">
        <img className="conversation-photo" src={recipientInfo?.avatar || '/default-user-icon.png'} alt="conversation" />
      </div>
      <div className="conversation-info">
        <h1 className="conversation-title">{recipientInfo?.username || 'N/A'}</h1>
        <p className="conversation-snippet">{lastMessage}</p>
        <p className="conversation-time">{moment(lastMessageCreatedAt || updatedAt).fromNow()}</p>
      </div>
      <Badge
        className="notification-badge"
        count={totalNotSeenMessages}
      />
    </div>
  );
}
