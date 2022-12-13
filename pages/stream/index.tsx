/* eslint-disable dot-notation */
import React, { PureComponent } from 'react';
import Head from 'next/head';
import { Row, Col, message } from 'antd';
import { IResponse } from 'src/services/api-request';
import {
  IPerformer,
  IUser,
  IUIConfig,
  StreamSettings,
  HLS,
  WEBRTC,
  IProduct,
  IVideo,
  IPhoto,
  IPerformerGallery
} from 'src/interfaces';
import { connect } from 'react-redux';
import { streamService, performerService, messageService } from 'src/services';
import { SocketContext, Event } from 'src/socket';
import nextCookie from 'next-cookies';
import ModalBuyAssets from '@components/performer-assets/common/modal-buy-assets';
import PerformerProduct from '@components/performer-assets/product-carousel';
import PerformerVideo from '@components/performer-assets/video-carousel';
import PerformerGallery from '@components/performer-assets/gallery-carousel';
import ProfileCard from '@components/performer/profile-card';
import PerformerCarousel from '@components/performer/performer-carousel';
import Header from '@components/streaming/header';
import Footer from '@components/streaming/footer';
import Router from 'next/router';
import ChatBox from '@components/stream-chat/chat-box';
import LiveSubscriber from 'src/components/streaming/subscriber';
import {
  loadStreamMessages,
  getStreamConversationSuccess,
  receiveStreamMessageSuccess,
  resetStreamMessage,
  resetAllStreamMessage,
  resetStreamConversation
} from '@redux/stream-chat/actions';
import {
  getPerformerDetails,
  updatePerformerAsset
} from '@redux/performer/actions';
import { updateCurrentUserBalance } from '@redux/user/actions';
import { getResponseError } from '@lib/utils';
import { StatusCodes } from 'http-status-codes';
import './index.less';
import { currentUserSelecter } from '@redux/selectors';
import { getPoster } from '@lib/stream';

// eslint-disable-next-line no-shadow
enum PERFORMER_ASSETS_TYPE {
  PRODUCT = 'product',
  GALLERY = 'gallery',
  VIDEO = 'video'
}

// eslint-disable-next-line no-shadow
enum STREAM_EVENT {
  JOIN_BROADCASTER = 'join-broadcaster',
  MODEL_LEFT = 'model-left',
  ROOM_INFORMATIOM_CHANGED = 'public-room-changed',
  MODEL_UPDATE_STREAMING_STATUS = 'modelUpdateStreamingStatus',
  USER_LEFT_ROOM = 'USER_LEFT_ROOM'
}

// eslint-disable-next-line no-shadow
enum EVENT {
  BLOCK_USERS = 'nofify_users_block'
}

interface IProps {
  resetStreamMessage: Function;
  resetAllStreamMessage: Function;
  getStreamConversationSuccess: Function;
  loadStreamMessages: Function;
  activeConversation: any;
  ui: IUIConfig;
  user: IUser;
  loggedIn: boolean;
  performer: IPerformer;
  success: boolean;
  searching: boolean;
  settings: StreamSettings;
  data: IPerformer;
  getPerformerDetails: Function;
  updatePerformerAsset: Function;
  updateCurrentUserBalance: Function;
  receiveStreamMessageSuccess: Function;
  products: Record<string, IProduct>;
  videos: Record<string, IVideo>;
  photos: Record<string, IPhoto>;
  galleries: Record<string, IPerformerGallery>;
  getStreamConversation: Function;
  resetStreamConversation: Function;
}

interface IStates {
  total: number;
  members: IUser[];
}

class LivePage extends PureComponent<IProps, IStates> {
  static authenticate = false;

  private subscriberRef: any;

  private buyAssetsRef: any;

  private socket: SocketIOClient.Socket;

  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      if (process.browser && query.performer) {
        return {
          performer: JSON.parse(query.performer)
        };
      }

      const { token } = nextCookie(ctx);
      const headers = { Authorization: token };
      const resp: IResponse<IPerformer> = await performerService.details(
        query.username,
        headers
      );
      const performer = resp.data;
      if (performer.isBlocked) {
        throw StatusCodes.FORBIDDEN;
      }

      return {
        performer
      };
    } catch (e) {
      // const err = await PromisePurchaseItemModelresolve(e);
      if (process.browser) {
        return Router.push('/');
      }

      ctx.res.writeHead && ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end && ctx.res.end();
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      total: 0,
      members: []
    };
  }

  componentDidMount(): any {
    this.subscriberRef = React.createRef();
    this.buyAssetsRef = React.createRef();
    const { performer, user } = this.props;
    if (!performer) {
      Router.push('/');
      return;
    }

    if (user && user.role === 'performer') {
      Router.push('/live');
      return;
    }

    if (user && user.role === 'studio') {
      Router.push('/studio/account-settings');
      return;
    }

    this.socket = this.context;
    Router.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.initProfilePage();
  }

  componentDidUpdate(prevProps: IProps) {
    const { performer, data, activeConversation } = this.props;
    if (data && data.isBlocked) {
      Router.push('/403');
      return;
    }

    if (performer && performer._id !== prevProps.performer._id) {
      this.initProfilePage();
    }

    if (prevProps.activeConversation !== activeConversation) {
      prevProps.activeConversation?._id
        && this.socket.emit('public-stream/leave', {
          conversationId: prevProps.activeConversation._id
        });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    Router.events.off('routeChangeStart', this.onbeforeunload);
  }

  onChange({ total, members, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      this.setState({ total, members });
    }
  }

  onbeforeunload = () => {
    this.leavePublicRoom();
  };

  onBoughtAssetSuccess(type, id, payload) {
    const { updatePerformerAsset: dispatchUpdatePerformerAsset } = this.props;
    dispatchUpdatePerformerAsset({ type, id, payload });
  }

  async joinPeformerPublicRoom() {
    const {
      performer,
      loadStreamMessages: dispatchLoadStreamMessages,
      getStreamConversationSuccess: dispatchGetStreamConversationSuccess
    } = this.props;
    if (performer) {
      try {
        // this.setState({ loading: true })
        const resp = await messageService.findPublicConversationPerformer(
          performer._id
        );
        const conversation = resp.data;
        if (conversation && conversation._id) {
          dispatchGetStreamConversationSuccess({ data: conversation });
          dispatchLoadStreamMessages({
            conversationId: conversation._id,
            limit: 25,
            offset: 0,
            type: conversation.type
          });
          this.socket = this.context;
          this.socket
            && this.socket.emit('public-stream/join', {
              conversationId: conversation._id
            });
        } else {
          throw new Promise((resolve) => resolve('No available broadcast. Try again later'));
        }
      } catch (e) {
        const error = await Promise.resolve(e);
        message.error(getResponseError(error));
      } finally {
        // this.setState({ loading: false});
      }
    }
  }

  initProfilePage() {
    const {
      performer,
      performer: { streamingStatus },
      getPerformerDetails: dispatchGetPerformerDetail
    } = this.props;
    setTimeout(() => {
      this.subscriberRef.current
        && this.subscriberRef.current.resetPlaybackVideo(
          getPoster(streamingStatus)
        );
    }, 100);
    dispatchGetPerformerDetail(performer);
    this.inscreaseView();
    this.joinPeformerPublicRoom();
  }

  async subscribe({ performerId }) {
    try {
      const {
        settings: { optionForBroadcast },
        performer
      } = this.props;
      if (performer._id !== performerId) {
        return;
      }

      const resp = await streamService.joinPublicChat(performerId);
      const { sessionId } = resp.data;
      if (optionForBroadcast === HLS) {
        this.subscriberRef.current?.playHLS(sessionId);
      } else if (optionForBroadcast === WEBRTC) {
        this.subscriberRef.current?.play(sessionId);
      }
    } catch (err) {
      const error = await Promise.resolve(err);
      message.error(getResponseError(error));
    }
  }

  leavePublicRoom() {
    const {
      activeConversation,
      resetStreamMessage: dispatchResetStreamMessage,
      resetStreamConversation: dispatchResetStreamConversation
    } = this.props;
    dispatchResetStreamMessage();
    if (this.socket && activeConversation?.data?._id) {
      this.socket.emit('public-stream/leave', {
        conversationId: activeConversation.data._id
      });
    }

    dispatchResetStreamConversation();

    this.setState({
      total: 0,
      members: []
    });
  }

  modelLeftHandler({ performerId }) {
    const { performer } = this.props;
    if (performerId !== performer._id) {
      return;
    }

    this.subscriberRef.current?.stop();
    message.info('Model has left the room!');
  }

  async showAssetToBuy(type: PERFORMER_ASSETS_TYPE, item) {
    const {
      isBought, isSale, name, type: itemType
    } = item;
    switch (type) {
      case 'gallery':
        if (isBought || !isSale) {
          Router.push(
            {
              pathname: '/photos',
              query: {
                data: JSON.stringify(item),
                id: item._id
              }
            },
            `/photos/${item._id}`
          );
          return;
        }
        break;
      case 'product':
        if (isBought && itemType === 'digital') {
          message.info(
            `You have purchased ${name} already. Please check your email!`
          );
          return;
        }
        break;
      default:
        break;
    }
    this.buyAssetsRef.showModalBuyAssets(item, type);
  }

  userBlockHandler({ performerId }) {
    const { performer } = this.props;
    if (performerId === performer._id) {
      Router.push('/403');
    }
  }

  modelUpdateStreamingStatusHander({ status, id }) {
    const { performer } = this.props;
    if (id === performer._id) {
      setTimeout(() => {
        this.subscriberRef.current
          && this.subscriberRef.current.poster(
            getPoster(status)
          );
      }, 100);
    }
  }

  async inscreaseView() {
    try {
      const {
        performer: { _id: id }
      } = this.props;
      await performerService.increaseView(id);
      // eslint-disable-next-line no-empty
    } catch {}
  }

  userLeftRoomHandle({ username, conversationId }) {
    const { activeConversation } = this.props;
    if (activeConversation?.data?._id === conversationId) {
      const { total, members } = this.state;
      const leftMemberIndex = members.findIndex((m) => m.username === username);
      if (leftMemberIndex > -1) {
        this.setState({
          total: total - 1,
          members: members.splice(leftMemberIndex, 1)
        });
      }
    }
  }

  render() {
    const {
      performer,
      data,
      searching,
      success,
      products,
      videos,
      galleries,
      ui
    } = this.props;
    const { members, total } = this.state;
    return (
      <>
        <Head>
          <title>{`${ui?.siteName} | ${performer?.username}`}</title>
        </Head>

        <Event
          event={STREAM_EVENT.JOIN_BROADCASTER}
          handler={this.subscribe.bind(this)}
        />
        <Event
          event={STREAM_EVENT.MODEL_LEFT}
          handler={this.modelLeftHandler.bind(this)}
        />
        <Event
          event={STREAM_EVENT.USER_LEFT_ROOM}
          handler={this.userLeftRoomHandle.bind(this)}
        />
        <Event
          event={STREAM_EVENT.ROOM_INFORMATIOM_CHANGED}
          handler={this.onChange.bind(this)}
        />
        <Event
          event={EVENT.BLOCK_USERS}
          handler={this.userBlockHandler.bind(this)}
        />
        <Event
          event={STREAM_EVENT.MODEL_UPDATE_STREAMING_STATUS}
          handler={this.modelUpdateStreamingStatusHander.bind(this)}
        />

        <div className="profile-page">
          <ModalBuyAssets
            ref={(ref) => {
              this.buyAssetsRef = ref;
            }}
            onSucess={this.onBoughtAssetSuccess.bind(this)}
            {...this.props}
          />

          <Header performer={performer} />

          <Row className="streaming-container">
            <Col md={13} xs={24}>
              <LiveSubscriber
                ref={this.subscriberRef}
                configs={{
                  isPlayMode: true
                }}
              />
              <Footer {...this.props} />
            </Col>
            <Col md={11} xs={24}>
              <ChatBox
                {...this.props}
                members={members}
                totalParticipant={total}
              />
            </Col>
          </Row>
          <Row
            gutter={[
              { sm: 25, xs: 0 },
              { sm: 10, xs: 25 }
            ]}
          >
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <ProfileCard
                placeholderAvatarUrl={ui?.placeholderAvatarUrl}
                performer={data}
                searching={searching}
                success={success}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <PerformerProduct
                performer={data}
                products={products}
                searching={searching}
                success={success}
                purchaseProduct={this.showAssetToBuy.bind(this, 'product')}
              />
              <PerformerVideo
                performer={data}
                videos={videos}
                searching={searching}
                success={success}
              />
              <PerformerGallery
                performer={data}
                galleries={galleries}
                searching={searching}
                success={success}
                purchaseGallery={this.showAssetToBuy.bind(this, 'gallery')}
              />
              <PerformerCarousel
                performers={data && data.relatedPerformers}
                {...this.props}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

LivePage.contextType = SocketContext;

const mapStateToProps = (state) => ({
  ui: state.ui,
  ...state.streaming,
  ...state.performer.performerDetails,
  user: currentUserSelecter(state),
  loggedIn: state.auth.loggedIn,
  activeConversation: state.streamMessage.activeConversation
});
const mapDispatch = {
  loadStreamMessages,
  getStreamConversationSuccess,
  receiveStreamMessageSuccess,
  resetStreamMessage,
  resetAllStreamMessage,
  updateCurrentUserBalance,
  getPerformerDetails,
  updatePerformerAsset,
  resetStreamConversation
};
export default connect(mapStateToProps, mapDispatch)(LivePage);
