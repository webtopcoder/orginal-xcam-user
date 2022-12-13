import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import './ConversationList.less';
import {
  getConversations,
  setActiveConversation,
  getConversationDetail,
  receiveMessageSuccess,
  searchConversations,
  updateLastMessage
} from '@redux/message/actions';
import { Event } from 'src/socket';
import { debounce } from 'lodash';
import { IUser, IPerformer } from 'src/interfaces';
import { messageService } from '@services/message.service';
import ConversationSearch from './ConversationSearch';
import ConversationListItem from './ConversationListItem';

interface IProps {
  searchConversations: Function;
  getConversations: Function;
  setActiveConversation: Function;
  getConversationDetail: Function;
  receiveMessageSuccess: Function;
  updateLastMessage: Function;
  conversation: {
    list: {
      requesting: boolean;
      error: any;
      data: any[];
      total: number;
      success: boolean;
    };
    mapping: Record<string, any>;
    activeConversation: Record<string, any>;
  };
  toSource: string;
  toId: string;
  message: {
    conversationMap: {

    },
    sendMessage: {

    }
  },
  currentUser: IUser;
  currentPerformer: IPerformer
}
class ConversationList extends PureComponent<IProps> {
  conversationsRef: any;

  constructor(props) {
    super(props);
  }

  state = {
    conversationPage: 1,
    keyword: ''
  }

  async componentDidMount() {
    if (!this.conversationsRef) this.conversationsRef = createRef();
    const {
      getConversations: getConversationsHandler,
      setActiveConversation: setActiveConversationHandler,
      toSource,
      toId,
      currentUser,
      currentPerformer
    } = this.props;
    const { conversationPage, keyword } = this.state;
    getConversationsHandler({
      limit: 25, offset: conversationPage * 25, type: 'private', keyword
    });
    if (toSource && toId) {
      setTimeout(() => {
        setActiveConversationHandler({
          source: toSource,
          sourceId: toId,
          recipientId: currentUser._id ? currentUser._id : currentPerformer._id
        });
      }, 1000);
    }
  }

  onMessage = async (message: { conversationId: string | number; text: any }) => {
    if (!message) {
      return;
    }
    const {
      conversation,
      currentPerformer,
      currentUser,
      getConversationDetail: getConversationDetailHandler,
      receiveMessageSuccess: receiveMessageSuccessHandler,
      updateLastMessage: handleUpdateLastMessage
    } = this.props;
    const { mapping } = conversation;
    const { conversationId, text } = message;
    if (!mapping[message.conversationId]) {
      getConversationDetailHandler({
        id: message.conversationId
      });
    }
    receiveMessageSuccessHandler(message);
    handleUpdateLastMessage({ conversationId, lastMessage: text });
    await messageService.readAllInConversation(conversationId, currentUser._id ? currentUser._id : currentPerformer._id);
  };

  onSearchConversation = debounce(async (e) => {
    const { value } = e.target;
    const { searchConversations: getConversationsHandler } = this.props;
    await this.setState({ keyword: value, conversationPage: 0 });
    if (value) {
      return getConversationsHandler({
        keyword: value, limit: 25, offset: 0, type: 'private'
      });
    }
    return getConversationsHandler({ limit: 25, offset: 0, type: 'private' });
  }, 500);

  handleScroll = async (event: { target: any; }) => {
    const { conversation, getConversations: getConversationsHandler } = this.props;
    const { requesting, data, total } = conversation.list;
    const { conversationPage, keyword } = this.state;
    const canloadmore = total > data.length;
    const ele = event.target;
    if (!canloadmore) return;
    if (ele.scrollHeight - ele.scrollTop === ele.clientHeight && !requesting && canloadmore) {
      this.setState({ conversationPage: conversationPage + 1 }, () => {
        getConversationsHandler({
          keyword, limit: 25, offset: conversationPage * 25, type: 'private'
        });
      });
    }
  }

  setActive = (conversationId: any) => {
    const {
      setActiveConversation: setActiveConversationHandler,
      currentPerformer,
      currentUser
    } = this.props;
    setActiveConversationHandler({ conversationId, recipientId: currentUser._id ? currentUser._id : currentPerformer._id });
  };

  render() {
    const { conversation } = this.props;
    const { data: conversations, requesting } = conversation.list;
    const { mapping, activeConversation = {} } = conversation;
    if (!this.conversationsRef) this.conversationsRef = createRef();
    return (
      <div className="conversation-list" ref={this.conversationsRef} onScroll={this.handleScroll.bind(this)}>
        <Event event="message_created" handler={this.onMessage} />
        <h4 className="text-center" style={{ fontSize: '22px' }}>Messenger</h4>
        <ConversationSearch
          onSearch={(e) => {
            e.persist();
            this.onSearchConversation(e);
          }}
        />
        {conversations.length > 0
          && conversations.map((conversationId) => (
            <ConversationListItem
              key={conversationId}
              data={mapping[conversationId]}
              setActive={this.setActive.bind(this)}
              selected={activeConversation._id === conversationId}
            />
          ))}
        {requesting && (
        <div className="text-center">
          <img alt="loading" src="/loading-ico.gif" width="50px" />
        </div>
        )}
        {!requesting && !conversations.length && <p className="text-center">No conversation found.</p>}
      </div>
    );
  }
}

const mapStates = (state: any) => ({
  conversation: state.conversation,
  message: state.message,
  currentUser: state.user.current,
  currentPerformer: state.performer.current
});

const mapDispatch = {
  searchConversations,
  getConversations,
  setActiveConversation,
  getConversationDetail,
  receiveMessageSuccess,
  updateLastMessage
};
export default connect(mapStates, mapDispatch)(ConversationList);
