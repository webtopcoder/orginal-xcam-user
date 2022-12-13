import { Tabs, TabPane } from 'src/components/common/base/tabs';
import React from 'react';
import StreamMessenger from '@components/stream-chat/Messenger';
import UserList from '@components/stream-chat/UserList';
import { IPerformer, IUser } from 'src/interfaces';
import './chat-box.less';

interface IProps {
  totalParticipant?: number;
  activeConversation?: any;
  currentPerformer?: IPerformer;
  loggedIn?: boolean;
  members?: IUser[];
}
const ChatBox = ({
  activeConversation,
  totalParticipant,
  currentPerformer,
  loggedIn,
  members
}: IProps) => (
  <div className="conversation-stream">
    <Tabs defaultActiveKey="chat_content">
      <TabPane tab="CHAT" key="chat_content">
        {activeConversation
            && activeConversation.data
            && activeConversation.data.streamId && (
              <StreamMessenger
                streamId={activeConversation.data.streamId}
              />
        )}
      </TabPane>
      <TabPane tab={`USER (${totalParticipant || 0})`} key="chat_user">
        <UserList
          currentPerformer={currentPerformer}
          loggedIn={loggedIn}
          members={members}
        />
      </TabPane>
    </Tabs>
  </div>
);
ChatBox.defaultProps = {
  totalParticipant: 0,
  activeConversation: null,
  currentPerformer: null,
  loggedIn: false,
  members: []
};
export default ChatBox;
