/* eslint-disable no-nested-ternary */
import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Link from 'next/link';
import './MessageList.less';
import {
  loadMoreStreamMessages,
  receiveStreamMessageSuccess,
  resetStreamMessage,
  deleteMessage,
  deleteMessageSuccess
} from '@redux/stream-chat/actions';
import { SocketContext } from 'src/socket';
import { IUser, IPerformer } from 'src/interfaces';
import Router from 'next/router';
import Compose from './Compose';
import Message from './Message';

interface IProps {
  loadMoreStreamMessages: Function;
  receiveStreamMessageSuccess: Function;
  message: any;
  conversation: any;
  currentUser: IUser;
  currentPerformer: IPerformer;
  deleteMessage: Function;
  deleteMessageSuccess: Function;
  resetStreamMessage: Function;
  loggedIn: boolean;
}
class MessageList extends PureComponent<IProps> {
  messagesRef: any;

  state = {
    page: 1,
    onloadmore: false
  };

  async componentDidMount() {
    if (!this.messagesRef) this.messagesRef = createRef();
    const { conversation } = this.props;
    const socket = this.context;
    if (conversation && conversation._id) {
      socket
        && socket.on
        && socket.on(
          `message_created_conversation_${conversation._id}`,
          (data) => {
            this.onMessage(data, 'created');
          }
        );
      socket
        && socket.on
        && socket.on(
          `message_deleted_conversation_${conversation._id}`,
          (data) => {
            this.onMessage(data, 'deleted');
          }
        );
    }
    Router.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.reconnect();
  }

  componentDidUpdate(prevProps: IProps) {
    const { message } = this.props;
    const { onloadmore } = this.state;
    const messages = message.items;
    if (messages !== prevProps.message.items) {
      if (onloadmore) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ onloadmore: false });
      } else {
        this.scrollToBottom();
      }
    }
  }

  componentWillUnmount() {
    const { conversation } = this.props;
    const socket = this.context;
    socket && socket.off(`message_created_conversation_${conversation._id}`);
    socket && socket.off(`message_deleted_conversation_${conversation._id}`);
    socket && socket.off('reconnect', this.rejoin);
    Router.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
  }

  async handleScroll(conversation, event) {
    const {
      message,
      loadMoreStreamMessages: dispatchLoadMoreStreamMessages
    } = this.props;
    const { page } = this.state;
    const { fetching, items, total } = message;
    const canloadmore = total > items.length;
    const ele = event.target;
    if (!canloadmore) return;
    if (ele.scrollTop === 0 && conversation._id && !fetching && canloadmore) {
      await this.setState({ page: page + 1, onloadmore: true });
      dispatchLoadMoreStreamMessages({
        conversationId: conversation._id,
        type: conversation.type,
        limit: 25,
        offset: page * 25
      });
    }
  }

  onbeforeunload = () => {
    const { conversation, resetStreamMessage: dispatchResetStreamMessage } = this.props;
    if (conversation && conversation._id) {
      dispatchResetStreamMessage();
    }
  }

  onMessage = (message, type) => {
    const {
      receiveStreamMessageSuccess: dispatchReceiveStreamMessageSuccess,
      deleteMessageSuccess: dispatchDeleteMessageSuccess
    } = this.props;
    if (!message) {
      return;
    }
    type === 'created' && dispatchReceiveStreamMessageSuccess(message);
    type === 'deleted' && dispatchDeleteMessageSuccess(message);
  };

  onDelete = (messageId) => {
    const { deleteMessage: dispatchDeleteMessage } = this.props;
    if (!messageId) return;
    dispatchDeleteMessage({ messageId });
  };

  renderMessages = () => {
    const {
      message,
      currentUser,
      currentPerformer,
      conversation,
      loggedIn
    } = this.props;
    const messages = message.items;
    const { fetching } = message;
    let i = 0;
    const messageCount = messages && messages.length;
    if (!messages.length && !fetching) {
      const text = loggedIn ? (
        'There are no chat!'
      ) : (
        <>
          There are no chat, please
          <Link href="/auth/register">
            <a> register </a>
          </Link>
          or
          <Link href="/auth/login">
            <a> login </a>
          </Link>
          to send message!
        </>
      );
      return <Message data={{ isSystem: true, text }} />;
    }

    const tempMessages = [];
    while (i < messageCount) {
      const previous = messages[i - 1];
      const current = messages[i];
      const next = messages[i + 1];
      const userId = currentUser && currentUser._id
        ? currentUser._id
        : currentPerformer && currentPerformer._id
          ? currentPerformer._id
          : null;
      const isMine = current.senderId === userId;
      const currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;
      const isOwner = conversation && conversation.performerId === current.senderId;
      const canDelete = (!current.isDeleted
          && currentPerformer
          && currentPerformer._id === conversation.performerId)
        || (!current.isDeleted && currentUser._id === current.senderId)
        || (!current.isDeleted
          && currentUser.roles
          && currentUser.roles.includes('admin'));
      if (previous) {
        const previousMoment = moment(previous.createdAt);
        const previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.senderId === current.senderId;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        const nextMoment = moment(next.createdAt);
        const nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.senderId === current.senderId;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }
      if (current._id) {
        tempMessages.push(
          <Message
            onDelete={this.onDelete.bind(this, current._id)}
            canDelete={canDelete}
            isOwner={isOwner}
            key={i}
            isMine={isMine}
            startsSequence={startsSequence}
            endsSequence={endsSequence}
            showTimestamp={showTimestamp}
            data={current}
          />
        );
      }
      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  };

  rejoin = () => {
    const { conversation } = this.props;
    if (conversation && conversation._id) {
      const socket = this.context;
      conversation.type === 'stream_public'
        && socket.emit('public-stream/rejoin', {
          conversationId: conversation._id
        });
      (conversation.type === 'stream_group'
        || conversation.type === 'stream_private')
        && socket.emit('REJOIN_ROOM', {
          conversationId: conversation._id
        });
    }
  };

  scrollToBottom() {
    const { onloadmore } = this.state;
    if (onloadmore) {
      return;
    }
    if (this.messagesRef && this.messagesRef.current) {
      const ele: HTMLDivElement = this.messagesRef.current;
      window.setTimeout(() => {
        ele.scroll({
          top: ele.scrollHeight,
          behavior: 'auto'
        });
      }, 100);
    }
  }

  reconnect() {
    const socket = this.context;
    if (socket) {
      socket.on('reconnect', this.rejoin);
    }
  }

  render() {
    const { conversation, message } = this.props;
    const { fetching } = message;
    if (!this.messagesRef) this.messagesRef = createRef();
    return (
      <div
        className="message-list"
        onScroll={this.handleScroll.bind(this, conversation)}
      >
        {conversation && conversation._id && (
          <>
            <div className="message-list-container" ref={this.messagesRef}>
              {fetching && <p className="text-center">fetching...</p>}
              {this.renderMessages()}
            </div>
            <Compose conversation={conversation} />
          </>
        )}
      </div>
    );
  }
}

MessageList.contextType = SocketContext;

const mapStates = (state: any) => {
  const { conversationMap, activeConversation } = state.streamMessage;
  const messages = activeConversation.data && conversationMap[activeConversation.data._id]
    ? conversationMap[activeConversation.data._id].items || []
    : [];
  const totalMessages = activeConversation.data && conversationMap[activeConversation.data._id]
    ? conversationMap[activeConversation.data._id].total || 0
    : 0;
  const fetching = activeConversation.data && conversationMap[activeConversation.data._id]
    ? conversationMap[activeConversation.data._id].fetching || false
    : false;

  return {
    message: {
      items: messages,
      total: totalMessages,
      fetching
    },
    conversation: activeConversation.data,
    currentUser: state.user.current,
    currentPerformer: state.performer.current,
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatch = {
  loadMoreStreamMessages,
  receiveStreamMessageSuccess,
  deleteMessage,
  deleteMessageSuccess,
  resetStreamMessage
};

export default connect(mapStates, mapDispatch)(MessageList);
