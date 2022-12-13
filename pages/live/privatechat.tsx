/* eslint-disable no-console */
import './index.less';
import { PureComponent } from 'react';
import Header from 'next/head';
import {
  Row, Col, message, Button
} from 'antd';
import Router from 'next/router';
import PrivateChatContainer from '@components/streaming/private-streaming-container';
import PreviewPlayer from '@components/streaming/subscriber';
import { IUser } from 'src/interfaces';
import { streamService } from 'src/services';
import { connect } from 'react-redux';
import { accessPrivateRequest } from 'src/redux/streaming/actions';
import { SocketContext, Event } from 'src/socket';
import ChatBox from '@components/stream-chat/chat-box';
import {
  getStreamConversationSuccess,
  resetStreamMessage,
  resetStreamConversation
} from '@redux/stream-chat/actions';
import { getResponseError } from '@lib/utils';
import { Description } from '@components/streaming';
import { updateCurrentPerformerBalance } from '@redux/performer/actions';

// eslint-disable-next-line no-shadow
enum STREAM_EVENT {
  JOINED_THE_ROOM = 'JOINED_THE_ROOM',
  JOIN_ROOM = 'JOIN_ROOM',
  LEAVE_ROOM = 'LEAVE_ROOM',
  RECEIVED_PAID_TOKEN = 'RECEIVED_PAID_TOKEN',
  STREAM_INFORMATION_CHANGED = 'private-stream/streamInformationChanged'
}

interface IProps {
  query: any;
  getStreamConversationSuccess: Function;
  activeConversation: any;
  resetStreamMessage: Function;
  accessPrivateRequest: Function;
  resetStreamConversation: Function;
  updateCurrentPerformerBalance: Function;
}

interface IStates {
  total?: number;
  members?: IUser[];
  roomJoined: boolean;
  receivedToken: number;
}

class ModelPrivateChat extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static onlyPerformer = true;

  private streamRef: any;

  private previewPlayerRef;

  private socket: SocketIOClient.Socket;

  static async getInitialProps({ ctx }) {
    const { query } = ctx;
    if (!query.id) {
      if (process.browser) {
        Router.push('/');
      }

      ctx.res.writeHead && ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end && ctx.res.end();
    }

    return {
      query
    };
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      roomJoined: false,
      total: 0,
      receivedToken: 0,
      members: []
    };
  }

  componentDidMount() {
    const { query, accessPrivateRequest: dispatchAccessPrivateRequest } = this.props;
    window.addEventListener('beforeunload', this.onbeforeunload);
    Router.events.on('routeChangeStart', this.onbeforeunload);
    this.socket = this.context;
    dispatchAccessPrivateRequest(query.id);
  }

  componentDidUpdate(prevProps: IProps) {
    const {
      activeConversation,
      query,
      accessPrivateRequest: dispatchAccessPrivateRequest
    } = this.props;
    if (prevProps.query.id !== query.id) {
      this.socket = this.context;
      dispatchAccessPrivateRequest(query.id);
      this.previewPlayerRef && this.previewPlayerRef.destroyPlaybackVideo();
    }

    if (prevProps.activeConversation !== activeConversation) {
      prevProps.activeConversation?._id
        && this.socket.emit(STREAM_EVENT.LEAVE_ROOM, {
          conversationId: prevProps.activeConversation._id
        });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    Router.events.off('routeChangeStart', this.onbeforeunload);
  }

  handler({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({ total, members });
    }
  }

  onbeforeunload = () => {
    this.leaveSession();
  };

  receivedPaidTokenHandler = ({ token, conversationId }) => {
    const { activeConversation, updateCurrentPerformerBalance: dispatchUpdateCurrentPerformerBalance } = this.props;
    const { receivedToken } = this.state;
    if (activeConversation?.data?._id === conversationId) {
      dispatchUpdateCurrentPerformerBalance(token);
      this.setState({
        receivedToken: receivedToken + token
      });
    }
  };

  leaveSession() {
    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage,
      resetStreamConversation: dispatchResetStreamConversation
    } = this.props;
    if (this.socket && activeConversation?.data?._id) {
      this.socket.emit(STREAM_EVENT.LEAVE_ROOM, {
        conversationId: activeConversation.data._id
      });
      this.socket.off(STREAM_EVENT.RECEIVED_PAID_TOKEN);
    }
    dispatchResetStreamMessage();
    dispatchResetStreamConversation();
    this.setState({
      roomJoined: false,
      total: 0,
      receivedToken: 0,
      members: []
    });
  }

  async acceptRequest() {
    const {
      query,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess
    } = this.props;
    if (!query.id) return;

    try {
      this.previewPlayerRef && this.previewPlayerRef.destroyPlaybackVideo();
      const resp = await streamService.acceptPrivateChat(query.id);
      if (resp && resp.data) {
        this.socket = this.context;
        const { sessionId, conversation } = resp.data;
        this.socket
          && this.socket.emit(STREAM_EVENT.JOIN_ROOM, {
            conversationId: conversation._id
          });
        this.streamRef && this.streamRef.start(sessionId, conversation._id);
        dispatchGetStreamConversationSuccess({
          data: conversation
        });
      }
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  }

  roomJoinedHandler({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({
        total,
        members,
        roomJoined: true
      });
    }
  }

  preview() {
    const { query } = this.props;
    this.previewPlayerRef
      && this.previewPlayerRef.playHLS(query.streamId);
  }

  render() {
    const {
      total, members, roomJoined, receivedToken
    } = this.state;
    return (
      <>
        <Header>
          <title>Private Chat</title>
        </Header>

        <Event
          event={STREAM_EVENT.STREAM_INFORMATION_CHANGED}
          handler={this.handler.bind(this)}
        />
        <Event
          event={STREAM_EVENT.JOINED_THE_ROOM}
          handler={this.roomJoinedHandler.bind(this)}
        />
        <Event
          event={STREAM_EVENT.RECEIVED_PAID_TOKEN}
          handler={this.receivedPaidTokenHandler.bind(this)}
        />

        <Row>
          <Col md={12} xs={24}>
            <PrivateChatContainer
              ref={(ref) => {
                this.streamRef = ref;
              }}
              configs={{
                localVideoId: 'private-publisher'
              }}
              onClick={this.acceptRequest.bind(this)}
            />
            <Button
              block
              type="text"
              hidden={roomJoined}
              style={{ background: 'black', color: 'white', margin: '10px 0' }}
              onClick={this.preview.bind(this)}
            >
              Preview
            </Button>
            <PreviewPlayer
              ref={(ref) => {
                this.previewPlayerRef = ref;
              }}
              configs={{
                isPlayMode: true
              }}
            />
            <Description
              roomJoined={roomJoined}
              receivedToken={receivedToken}
            />
          </Col>
          <Col xs={24} md={12}>
            <ChatBox
              {...this.props}
              totalParticipant={total}
              members={members}
            />
          </Col>
        </Row>
      </>
    );
  }
}

ModelPrivateChat.contextType = SocketContext;

const mapStateToProps = (state) => ({
  activeConversation: state.streamMessage.activeConversation
});

const mapDispatchs = {
  accessPrivateRequest,
  getStreamConversationSuccess,
  resetStreamMessage,
  resetStreamConversation,
  updateCurrentPerformerBalance
};

export default connect(mapStateToProps, mapDispatchs)(ModelPrivateChat);
