/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import Header from 'next/head';
import classnames from 'classnames';
import {
  Row, Col, message, Button
} from 'antd';
import Router from 'next/router';
import { IPerformer, IUser } from 'src/interfaces';
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
import PrivatePublisher from 'src/components/streaming/webrtc/privatechat/publisher';
import PrivateSubscriber from 'src/components/streaming/webrtc/privatechat/subscriber';
import { getResponseError } from '@lib/utils';
import { Description } from '@components/streaming';
import PreviewPlayer from '@components/streaming/subscriber';
import { updateCurrentPerformerBalance } from '@redux/performer/actions';

// eslint-disable-next-line no-shadow
enum STREAM_EVENT {
  JOINED_THE_ROOM = 'JOINED_THE_ROOM',
  JOIN_ROOM = 'JOIN_ROOM',
  LEAVE_ROOM = 'LEAVE_ROOM',
  RECEIVED_PAID_TOKEN = 'RECEIVED_PAID_TOKEN',
  STREAM_INFORMATION_CHANGED = 'private-stream/streamInformationChanged'
}

const STREAM_JOINED = 'private-stream/streamJoined';
const STREAM_LEAVED = 'private-stream/streamLeaved';
const JOINED_THE_ROOM = 'JOINED_THE_ROOM';

interface IProps {
  user: IPerformer;
  getStreamConversationSuccess: Function;
  activeConversation: any;
  resetStreamMessage: Function;
  accessPrivateRequest: Function;
  query: any;
  resetStreamConversation: Function;
  updateCurrentPerformerBalance: Function;
}

interface IStates {
  processing: boolean;
  roomJoined: boolean;
  total?: number;
  receivedToken: number;
  members?: IUser[];
}

class ModelPrivateChat extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static onlyPerformer = true;

  private publisherRef;

  private subscriberRef;

  private previewPlayerRef;

  private socket: SocketIOClient.Socket;

  private streamId: string;

  private streamList: Array<string>;

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
      processing: false,
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
    this.publisherRef = React.createRef();
    this.subscriberRef = React.createRef();
    dispatchAccessPrivateRequest(query.id);
  }

  componentDidUpdate(prevProps: IProps) {
    const {
      query,
      activeConversation,
      accessPrivateRequest: dispatchAccessPrivateRequest
    } = this.props;
    if (prevProps.query.id !== query.id) {
      this.socket = this.context;
      dispatchAccessPrivateRequest(query.id);
      this.previewPlayerRef && this.previewPlayerRef.destroyPlaybackVideo();
    }
    if (
      activeConversation?.data?._id
      && activeConversation !== prevProps.activeConversation
    ) {
      this.initSocketEvent();
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
      this.setState({
        total,
        members
      });
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

  initSocketEvent() {
    this.socket = this.context;
    this.socket.on(
      JOINED_THE_ROOM,
      ({ streamId, streamList, conversationId }) => {
        const { activeConversation } = this.props;
        if (conversationId !== activeConversation.data._id) return;

        this.streamId = streamId;
        this.streamList = streamList;
        this.publisherRef.current
          && this.publisherRef.current.publish(streamId);
        if (streamList.length) {
          this.subscriberRef.current
            && this.subscriberRef.current.play(streamList[0]);
        }
      }
    );
    this.socket.on(
      STREAM_JOINED,
      (data: { streamId: string; conversationId: string }) => {
        const { activeConversation } = this.props;
        if (data.conversationId !== activeConversation.data._id) return;

        if (this.streamId !== data.streamId) {
          this.subscriberRef.current
            && this.subscriberRef.current.play(data.streamId);
        }
      }
    );
    this.socket.on(
      STREAM_LEAVED,
      (data: { streamId: string; conversationId: string }) => {
        const { activeConversation } = this.props;
        if (data.conversationId !== activeConversation.data._id) return;

        this.streamList = this.streamList.filter((id) => id !== data.streamId);
        if (this.streamId !== data.streamId) {
          this.subscriberRef.current && this.subscriberRef.current.close();
        }
        message.error('Private call has ended.');
        window.setTimeout(() => {
          Router.push('/live');
        }, 1000);
      }
    );
  }

  leaveSession() {
    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage,
      resetStreamConversation: dispatchResetStreamConversation
    } = this.props;
    dispatchResetStreamMessage();
    if (this.socket && activeConversation?.data?._id) {
      this.socket.off(JOINED_THE_ROOM);
      this.socket.off(STREAM_JOINED);
      this.socket.off(STREAM_LEAVED);
      this.socket.off(STREAM_EVENT.RECEIVED_PAID_TOKEN);
      this.socket.emit(STREAM_EVENT.LEAVE_ROOM, {
        conversationId: activeConversation.data._id
      });
      this.publisherRef.current && this.publisherRef.current.stop();
      this.subscriberRef.current && this.subscriberRef.current.stop();
    }
    dispatchResetStreamConversation();
    this.setState({
      processing: false,
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
      this.setState({ processing: true });
      const resp = await streamService.acceptPrivateChat(query.id);
      if (resp && resp.data) {
        this.socket = this.context;
        const { sessionId, conversation } = resp.data;
        this.socket
          && this.socket.emit(STREAM_EVENT.JOIN_ROOM, {
            conversationId: conversation._id
          });
        this.publisherRef.current
          && this.publisherRef.current.start(conversation._id, sessionId);
        dispatchGetStreamConversationSuccess({
          data: conversation
        });
      }
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ processing: false });
    }
  }

  roomJoinedHandler({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({
        roomJoined: true,
        total,
        members
      });
    }
  }

  leave() {
    this.publisherRef.current && this.publisherRef.current.stop();
    this.subscriberRef.current && this.subscriberRef.current.stop();

    setTimeout(() => {
      window.location.href = '/';
    }, 10 * 1000);
  }

  preview() {
    const { query } = this.props;
    this.previewPlayerRef && this.previewPlayerRef.playHLS(query.streamId);
  }

  render() {
    const {
      processing,
      total,
      members,
      roomJoined,
      receivedToken
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
            {!roomJoined ? (
              <Button
                type="primary"
                onClick={this.acceptRequest.bind(this)}
                loading={processing}
                block
              >
                Accept Private Call Request
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={this.leave.bind(this)}
                block
                disabled={processing}
              >
                Stop Streaming
              </Button>
            )}
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
            <div className={classnames('private-streaming-container', !roomJoined ? 'hidden' : '')}>
              <PrivatePublisher
                {...this.props}
                ref={this.publisherRef}
                configs={{
                  localVideoId: 'private-publisher'
                }}
              />
              <PrivateSubscriber
                {...this.props}
                ref={this.subscriberRef}
                configs={{
                  isPlayMode: true,
                  remoteVideoId: 'private-subscriber'
                }}
              />
            </div>
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
  user: state.user.current,
  activeConversation: state.streamMessage.activeConversation
});

const mapDispatchs = {
  accessPrivateRequest,
  getStreamConversationSuccess,
  resetStreamMessage,
  resetStreamConversation,
  updateCurrentPerformerBalance
};

export default connect(
  mapStateToProps,
  mapDispatchs
)(ModelPrivateChat);
