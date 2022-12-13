import React, { PureComponent, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../stream-chat/MessageList.less';
import { loadMoreMessages } from '@redux/message/actions';
import { IPerformer } from 'src/interfaces';
import Compose from './Compose';
import Message from './Message';

interface IProps {
  loadMoreMessages: Function;
  message: any;
  conversation: any;
  currentUser: any;
  currentPerformer: IPerformer;
}

class MessageList extends PureComponent<IProps> {
  messagesRef: any;

  state = {
    offset: 1,
    onloadmore: false
  };

  async componentDidMount() {
    if (!this.messagesRef) this.messagesRef = createRef();
  }

  async componentDidUpdate(prevProps: IProps) {
    const { conversation, message } = this.props;
    const { onloadmore } = this.state;
    const messages = message.items;
    if (
      prevProps
      && prevProps.conversation
      && prevProps.conversation._id !== conversation._id
    ) {
      this.setOffset();
    }

    if (messages !== prevProps.message.items) {
      if (onloadmore) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ onloadmore: false });
      } else {
        this.scrollToBottom();
      }
    }
  }

  async handleScroll(conversation, event) {
    const { message, loadMoreMessages: dispatchLoadMoreMessages } = this.props;
    const { fetching, items, total } = message;
    const { offset } = this.state;
    const canloadmore = total > items.length;
    const ele = event.target;
    if (!canloadmore) return;
    if (ele.scrollTop === 0 && conversation._id && !fetching && canloadmore) {
      await this.setState({ offset: offset + 1, onloadmore: true });
      dispatchLoadMoreMessages({
        conversationId: conversation._id,
        limit: 20,
        offset: (offset - 1) * 20
      });
    }
  }

  async setOffset() {
    this.setState({ offset: 1 });
  }

  renderMessages = () => {
    const { message, currentUser, currentPerformer } = this.props;
    const messages = message.items;
    let i = 0;
    const messageCount = messages.length;
    const tempMessages = [];
    while (i < messageCount) {
      const previous = messages[i - 1];
      const current = messages[i];
      const next = messages[i + 1];
      const isMine = current.senderId
        === ((currentUser && currentUser._id)
          || (currentPerformer && currentPerformer._id));
      const currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

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
    this.scrollToBottom();
    return tempMessages;
  };

  scrollToBottom() {
    const { onloadmore } = this.state;
    if (onloadmore) {
      return;
    }
    if (this.messagesRef && this.messagesRef.current) {
      const ele = this.messagesRef.current;
      window.setTimeout(() => {
        ele.scrollTop = ele.scrollHeight;
      }, 100);
    }
  }

  render() {
    const { conversation, message } = this.props;
    const { fetching } = message;
    if (!this.messagesRef) this.messagesRef = createRef();
    return (
      <div className="message-list custom">
        {conversation && conversation._id ? (
          <>
            <div
              className="message-list-container"
              ref={this.messagesRef}
              onScroll={this.handleScroll.bind(this, conversation)}
            >
              {fetching && <p className="text-center">fetching...</p>}
              {this.renderMessages()}
            </div>

            <Compose conversation={conversation} />
          </>
        ) : (
          <div className="start-conversation">
            <p>Click conversation to start</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStates = (state: any) => {
  const { conversationMap } = state.message;
  const { activeConversation } = state.conversation;
  const messages = conversationMap[activeConversation._id]
    ? conversationMap[activeConversation._id].items || []
    : [];
  const totalMessages = conversationMap[activeConversation._id]
    ? conversationMap[activeConversation._id].total || 0
    : 0;
  const fetching = conversationMap[activeConversation._id]
    ? conversationMap[activeConversation._id].fetching || false
    : false;
  return {
    message: {
      items: messages,
      total: totalMessages,
      fetching
    },
    conversation: activeConversation,
    currentUser: state.user.current,
    currentPerformer: state.performer.current
  };
};

const mapDispatch = { loadMoreMessages };
export default connect(mapStates, mapDispatch)(MessageList);
