/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import withAntmedia from 'src/antmedia';
import { Button, message } from 'antd';
import Router from 'next/router';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import { SocketContext } from 'src/socket';
import { StreamSettings } from 'src/interfaces';
import { streamService } from 'src/services';
import {
  WebRTCAdaptorConfigs,
  WebRTCAdaptorProps
} from 'src/antmedia/interfaces';
import videojs from 'video.js';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import './private-streaming-container.less';

const STREAM_JOINED = 'private-stream/streamJoined';
const STREAM_LEAVED = 'private-stream/streamLeaved';
const JOINED_THE_ROOM = 'JOINED_THE_ROOM';

interface IProps extends WebRTCAdaptorProps {
  onClick: any;
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

interface IState {
  conversationId: string;
  streamId: string;
  loading: boolean;
}

class PrivateStreamingContainer extends PureComponent<IProps, IState> {
  private activeStreams = [];

  private socket: any;

  private getLiveStreamOrVodURLInterval: NodeJS.Timeout;

  private publisher: videojs.Player;

  private player: videojs.Player;

  constructor(props: IProps) {
    super(props);
    this.state = {
      streamId: null,
      conversationId: null,
      loading: false
    };
  }

  componentDidMount() {
    this.socket = this.context;
    Router.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
  }

  componentDidUpdate(_, prevStates: IState) {
    const { conversationId } = this.state;
    if (conversationId && conversationId !== prevStates.conversationId) {
      this.initSocketEvent();
    }
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onbeforeunload);
    window.removeEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload = () => {
    this.leaveStream();
  };

  async handelWebRTCAdaptorCallback(
    info: WEBRTC_ADAPTOR_INFORMATIONS,
    obj: any
  ) {
    const { conversationId, streamId } = this.state;
    const { settings, webRTCAdaptor, configs } = this.props;
    this.socket = this.context;
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
      if (settings.optionForPrivate === 'hls') {
        const token = await streamService.getPublishToken({
          streamId,
          settings
        });
        webRTCAdaptor.publish(streamId, token);
      }

      webRTCAdaptor.joinRoom(conversationId, streamId);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.NEW_STREAM_AVAILABLE) {
      const activeStream = this.activeStreams.find((id) => id === obj.streamId);
      if (!activeStream) {
        this.activeStreams.push(obj.streamId);
        this.createRemoteVideo(obj.stream);
      }
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.JOINED_THE_ROOM) {
      if (settings.optionForPrivate === 'webrtc') {
        const token = await streamService.getPublishToken({
          streamId,
          settings
        });
        webRTCAdaptor.publish(streamId, token);
      }
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
      if (!isMobile) {
        const player = videojs(configs.localVideoId, {
          liveui: true,
          controls: true,
          muted: true,
          bigPlayButton: false,
          controlBar: {
            playToggle: false,
            currentTimeDisplay: false,
            volumePanel: false,
            pictureInPictureToggle: false
          }
        });
        player.on('error', () => {
          player.error(null);
        });
        player.one('play', () => {
          this.publisher = player;
        });
      }
      this.socket.emit('private-stream/join', {
        conversationId,
        streamId: obj.streamId
      });
      this.setState({ loading: false });
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_FINISHED) {
      this.socket.emit('private-stream/leave', {
        conversationId,
        streamId: obj.streamId
      });
      this.setState({ loading: false });
    }
  }

  initSocketEvent() {
    const { initWebRTCAdaptor } = this.props;
    this.socket = this.context;
    this.socket.on(
      JOINED_THE_ROOM,
      ({ streamId, streamList, conversationId: _id }) => {
        const { conversationId } = this.state;
        if (_id !== conversationId) return;

        this.setState({ streamId });
        initWebRTCAdaptor(this.handelWebRTCAdaptorCallback.bind(this));
        if (streamList.length) {
          this.playHLS(streamList[0]);
        }
      }
    );
    this.socket.on(
      STREAM_JOINED,
      (data: { streamId: string; conversationId: string }) => {
        const { streamId, conversationId } = this.state;
        if (conversationId !== data.conversationId) return;

        if (streamId !== data.streamId) {
          this.playHLS(data.streamId);
        }
      }
    );
    this.socket.on(
      STREAM_LEAVED,
      (data: { streamId: string; conversationId: string }) => {
        const { conversationId, streamId } = this.state;
        if (
          !conversationId
          || conversationId !== data.conversationId
          || streamId === data.streamId
        ) return;

        message.error('Private call has ended.');
        window.setTimeout(() => {
          Router.push('/');
        }, 10 * 1000);
      }
    );
  }

  start(sessionId: string, conversationId: string) {
    this.setState({ conversationId });
  }

  leaveStream() {
    const { publish_started, webRTCAdaptor } = this.props;
    const { conversationId, streamId } = this.state;
    if (this.publisher) {
      this.publisher.dispose();
      this.publisher = undefined;
    }
    if (this.player) {
      this.player.dispose();
      this.player = undefined;
    }
    this.getLiveStreamOrVodURLInterval
      && clearInterval(this.getLiveStreamOrVodURLInterval);
    this.socket.off(JOINED_THE_ROOM);
    this.socket.off(STREAM_JOINED);
    this.socket.off(STREAM_LEAVED);
    if (streamId && publish_started) {
      webRTCAdaptor && webRTCAdaptor.leaveFromRoom(conversationId);
      this.socket.emit('private-stream/leave', {
        conversationId,
        streamId
      });
    }

    this.setState({
      streamId: null,
      conversationId: null
    });
  }

  async ended(streamId: string) {
    this.player && this.player.error(null);
    const { settings } = this.props;
    const src = await streamService.getLiveStreamOrVodURL({
      streamId,
      settings,
      appName: settings.AntMediaAppname
    });
    if (src) {
      this.getLiveStreamOrVodURLInterval = setInterval(() => {
        fetch(src, { method: 'HEAD' }).then(() => {
          this.playHLS(streamId);
          this.getLiveStreamOrVodURLInterval
            && clearInterval(this.getLiveStreamOrVodURLInterval);
        });
      }, 5000);
    }
  }

  async playHLS(streamId: string) {
    const { settings, configs } = this.props;
    const appName = configs.appName || settings.AntMediaAppname;
    this.getLiveStreamOrVodURLInterval
      && clearInterval(this.getLiveStreamOrVodURLInterval);
    const src = await streamService.getLiveStreamOrVodURL({
      appName,
      settings,
      streamId
    });
    if (!src) {
      return;
    }

    let video = document.querySelector('#private-subscriber');
    if (!video) {
      video = document.createElement('video');
      video.setAttribute('id', 'private-subscriber');
      video.setAttribute('class', 'video-js broadcaster vjs-waiting');
      video.setAttribute('autoplay', 'autoplay');
      document.querySelector('.private-streaming-container').append(video);
    }

    if (!this.player) {
      this.player = videojs('private-subscriber', {
        liveui: true,
        controls: true,
        autoplay: true
      });
      this.player.on('ended', () => this.ended(streamId));
      this.player.on('error', () => this.ended(streamId));
    }

    setTimeout(() => {
      if (!this.player) return;
      this.player.src({
        type: 'application/x-mpegURL',
        src
      });
    }, 10 * 1000);
  }

  createRemoteVideo(stream: any) {
    const video = document.createElement('video');
    video.setAttribute('id', 'private-subscriber');
    video.setAttribute('class', 'video-js broadcaster');
    video.setAttribute('autoplay', 'autoplay');
    video.setAttribute('controls', 'controls');
    video.srcObject = stream;
    document.querySelector('.private-streaming-container').append(video);
  }

  leave() {
    if (process.browser) {
      this.leaveStream();
      setTimeout(() => {
        window.location.href = '/';
      }, 10 * 1000);
    }
  }

  stop() {
    const { leaveSession } = this.props;
    leaveSession();
  }

  async play(streamId: string) {
    const { settings, webRTCAdaptor } = this.props;
    const token = await streamService.getSubscriberToken({
      streamId,
      settings
    });
    webRTCAdaptor.play(streamId, token);
  }

  render() {
    const {
      onClick, initialized, containerClassName, publish_started, configs
    } = this.props;
    const { loading } = this.state;
    return (
      <>
        <div
          className={classnames(
            'private-streaming-container',
            containerClassName
          )}
          hidden={!publish_started}
        >
          <video
            id={configs.localVideoId}
            controls
            className="video-js broadcaster"
            autoPlay
            muted
            playsInline
          />
        </div>
        <div>
          {!initialized ? (
            <Button type="primary" onClick={onClick} loading={loading} block>
              Start Streaming
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={this.leave.bind(this)}
              block
              disabled={loading}
            >
              Stop Streaming
            </Button>
          )}
        </div>
      </>
    );
  }
}

PrivateStreamingContainer.contextType = SocketContext;
export default withAntmedia(PrivateStreamingContainer);
