import { PureComponent } from 'react';
import classnames from 'classnames';
import './Messenger.less';
import { connect } from 'react-redux';
import { getStreamConversation } from '@redux/stream-chat/actions';
import MessageList from './MessageList';

interface IProps {
  streamId?: string;
  getStreamConversation: Function;
  activeConversation?: any;
  loggedIn: boolean;
}
class StreamMessenger extends PureComponent<IProps> {
  componentDidMount() {
    const { streamId, activeConversation, getStreamConversation: dispatchGetStreamConversation } = this.props;
    if (!activeConversation && streamId) {
      dispatchGetStreamConversation({ conversation: activeConversation.data, isPublic: true });
    }
  }

  render() {
    const { activeConversation, loggedIn } = this.props;
    return (
      <div className={classnames('message-stream', loggedIn ? 'user-logged-in' : '')}>
        {activeConversation && activeConversation.data && activeConversation.data.streamId ? <MessageList /> : <p>No conversation found.</p>}
      </div>
    );
  }
}
const mapStates = (state: any) => ({
  activeConversation: state.streamMessage.activeConversation,
  loggedIn: state.auth.loggedIn
});
const mapDispatchs = { getStreamConversation };
export default connect(mapStates, mapDispatchs)(StreamMessenger);
