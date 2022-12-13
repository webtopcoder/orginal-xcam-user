import React from 'react';
import moment from 'moment';
import '../stream-chat/Message.less';

interface Iprops {
  isMine: boolean;
  startsSequence: boolean;
  showTimestamp: boolean;
  endsSequence: boolean;
  data: any;
}

export default function Message(props : Iprops) {
  const {
    data, isMine, startsSequence, endsSequence, showTimestamp
  } = props;

  const friendlyTimestamp = moment(data.createdAt).format('LLLL');
  return (
    <div
      className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}
    >
      {data.text && (
      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          {!data.imageUrl && data.text}
          {' '}
          {data.imageUrl && (
          <a
            title="Click to view full content"
            href={data.imageUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={data.imageUrl}
              width="180px"
              alt=""
            />
          </a>
          )}
        </div>
      </div>
      )}
      {showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}
    </div>
  );
}
