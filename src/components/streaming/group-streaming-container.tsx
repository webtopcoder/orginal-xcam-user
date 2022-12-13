/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import withAntmedia from 'src/antmedia';
import { Button, message } from 'antd';
import Router from 'next/router';
import { StreamSettings } from 'src/interfaces';
import { SocketContext } from 'src/socket';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import { streamService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { WebRTCAdaptorConfigs, WebRTCAdaptorProps } from 'src/antmedia/interfaces';
import videojs from 'video.js';
import { isMobile } from 'react-device-detect';
import './group-streaming-container.less';

const STREAM_JOINED = 'private-stream/streamJoined';
const STREAM_LEAVED = 'private-stream/streamLeaved';
const JOINED_THE_ROOM = 'JOINED_THE_ROOM';
const MODEL_LEFT_ROOM = 'MODEL_LEFT_ROOM';

interface IProps extends WebRTCAdaptorProps {
  onClick: any;
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

interface IState {
  streamId: string;
  streamList: string[];
  conversationId: string;
  loading: boolean;
}

class GroupStreamingContainer extends PureComponent<IProps, IState> {
  private socket;

  private publisherRef = React.createRef<HTMLVideoElement>();

  private publisher: videojs.Player;

  private players: Record<string, videojs.Player> = {};

  private getLiveStreamOrVodURLInterval: Record<string, NodeJS.Timeout> = {};

  constructor(props: IProps) {
    super(props);
    this.state = {
      streamId: null,
      streamList: [],
      conversationId: null,
      loading: false
    };
  }

  componentDidMount() {
    const { initWebRTCAdaptor } = this.props;
    this.socket = this.context;
    this.socket.on(JOINED_THE_ROOM, (data) => {
      const { streamId, streamList, conversationId: _id } = data;
      const { conversationId } = this.state;
      if (_id !== conversationId) return;

      this.setState({ streamId, streamList });
      initWebRTCAdaptor(this.handelWebRTCAdaptorCallback.bind(this));
      if (streamList.length) {
        streamList.forEach((id: string) => {
          const player = document.createElement('video');
          const container = document.getElementById('group-video-container');
          player.setAttribute('id', id);
          player.setAttribute('class', 'video-js broadcaster');
          player.setAttribute('autoplay', 'autoplay');
          container.append(player);
          this.players[id] = videojs(
            id,
            {
              height: 100,
              width: container.offsetWidth / 4,
              controls: true,
              controlBar: {
                volumePanel: {
                  inline: false
                },
                playToggle: false,
                liveDisplay: false
              }
            },
            () => this.onReadyCallback(id)
          );
        });
      }
    });

    this.socket.on(
      STREAM_LEAVED,
      (data: { streamId: string; conversationId: string }) => {
        const { conversationId, streamId, streamList } = this.state;
        if (
          conversationId !== data.conversationId
          || streamId === data.streamId
        ) return;
        this.setState({
          streamList: streamList.filter((id) => id !== data.streamId)
        });
        if (this.players[data.streamId]) {
          this.players[data.streamId].dispose();
          delete this.players[data.streamId];
        }
      }
    );

    this.socket.on(
      STREAM_JOINED,
      (data: { streamId: string; conversationId: string }) => {
        const { streamList, streamId, conversationId } = this.state;
        if (conversationId !== data.conversationId) return;
        if (streamId !== data.streamId) {
          this.setState({ streamList: [...streamList, data.streamId] });
          const player = document.createElement('video');
          const container = document.getElementById('group-video-container');
          player.setAttribute('id', data.streamId);
          player.setAttribute('class', 'video-js broadcaster');
          player.setAttribute('autoplay', 'autoplay');
          container.append(player);
          this.players[data.streamId] = videojs(
            data.streamId,
            {
              height: 100,
              width: container.offsetWidth / 4,
              muted: data.streamId === streamId,
              controls: true,
              controlBar: {
                volumePanel: {
                  inline: false
                },
                playToggle: false,
                liveDisplay: false
              }
            },
            () => this.onReadyCallback(data.streamId)
          );
        }
      }
    );

    this.socket.on(MODEL_LEFT_ROOM, (data: { streamId: string; conversationId: string }) => {
      const { conversationId } = this.state;
      if (conversationId !== data.conversationId) return;

      message.error('Model has left the room. You will be redirected in 10 seconds');
      setTimeout(() => {
        Router.push('/');
      }, 10000);
    });
    Router.events.on('routeChangeStart', this.onbeforeunload);
    window.addEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload = () => {
    this.leaveStream();
  }

  async onReadyCallback(streamId: string) {
    try {
      const { settings, configs } = this.props;
      const appName = configs.appName || settings.AntMediaAppname;
      const src = await streamService.getLiveStreamOrVodURL({
        appName,
        settings,
        streamId
      });
      if (!src) {
        return;
      }

      this.players[streamId].addClass('vjs-waiting');
      this.players[streamId].on('ended', () => this.ended(streamId));
      this.players[streamId].on('error', () => this.ended(streamId));

      setTimeout(() => {
        if (!this.players[streamId]) return;
        this.players[streamId].src({
          type: 'application/x-mpegURL',
          src
        });
        this.players[streamId].play();
      }, 10 * 1000);
    } catch (err) {
      const error = await Promise.resolve(err);
      message.error(getResponseError(error));
    }
  }

  async handelWebRTCAdaptorCallback(info: WEBRTC_ADAPTOR_INFORMATIONS, obj: any) {
    const { webRTCAdaptor, settings, configs } = this.props;
    const { conversationId, streamId } = this.state;
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
      const token = await streamService.getPublishToken({ streamId, settings });
      webRTCAdaptor.publish(streamId, token);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
      const container = document.getElementById('group-video-container');
      if (!isMobile) {
        const player = videojs(configs.localVideoId, {
          liveui: true,
          controls: true,
          muted: true,
          height: isMobile ? 150 : 100,
          width: isMobile ? container.offsetWidth / 2 : container.offsetWidth / 4,
          bigPlayButton: false,
          controlBar: {
            playToggle: false,
            currentTimeDisplay: false,
            fullscreenToggle: false,
            pictureInPictureToggle: false,
            volumePanel: false
          }
        });
        player.on('error', () => {
          player.error(null);
        });
        player.one('play', () => {
          this.publisher = player;
        });
      } else {
        this.publisherRef.current.style.width = '100%';
      }
      this.socket.emit('private-stream/join', {
        conversationId,
        streamId: obj.streamId
      });
      this.setState({ loading: false });
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_FINISHED) {
      if (this.publisher) {
        this.publisher.dispose();
        this.publisher = undefined;
      }

      this.socket.emit('private-stream/leave', {
        conversationId,
        streamId: obj.streamId
      });
      this.setState({ loading: false });
    }
  }

  start(sessionId: string, conversationId: string) {
    this.setState({ conversationId });
  }

  leaveStream() {
    const { publish_started } = this.props;
    const { conversationId, streamId } = this.state;
    Object.keys(this.getLiveStreamOrVodURLInterval).forEach((id) => {
      clearInterval(this.getLiveStreamOrVodURLInterval[id]);
      delete this.getLiveStreamOrVodURLInterval[id];
    });
    if (this.publisher) {
      this.publisher.dispose();
      this.publisher = undefined;
    }
    Object.keys(this.players).forEach((id) => {
      if (this.players[id]) {
        this.players[id].dispose();
        this.players[id] = undefined;
      }
    });
    this.socket.off(JOINED_THE_ROOM);
    this.socket.off(STREAM_JOINED);
    this.socket.off(STREAM_LEAVED);
    this.socket.off(MODEL_LEFT_ROOM);
    if (streamId && publish_started) {
      this.socket.emit('private-stream/leave', {
        conversationId,
        streamId
      });
    }

    this.setState({
      streamId: null,
      streamList: [],
      conversationId: null
    });
  }

  async ended(streamId: string) {
    this.players[streamId] && this.players[streamId].error(null);
    const { settings } = this.props;
    const src = await streamService.getLiveStreamOrVodURL({
      streamId,
      settings,
      appName: settings.AntMediaAppname
    });
    if (src) {
      this.getLiveStreamOrVodURLInterval[streamId] = setInterval(() => {
        fetch(src, { method: 'HEAD' }).then(() => {
          if (this.players[streamId]) {
            this.players[streamId].src({
              type: 'application/x-mpegURL',
              src
            });
            this.players[streamId].play();
          }
          this.getLiveStreamOrVodURLInterval[streamId]
            && clearInterval(this.getLiveStreamOrVodURLInterval[streamId]);
        });
      }, 5000);
    }
  }

  leave() {
    if (process.browser) {
      window.location.reload();
    }
  }

  stop() {
    const { leaveSession } = this.props;
    leaveSession();
  }

  render() {
    const {
      onClick, initialized, configs, publish_started
    } = this.props;
    const { loading } = this.state;

    return (
      <>
        {!initialized ? (
          <Button
            type="primary"
            onClick={() => onClick()}
            loading={loading}
            block
          >
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
        <div style={{ position: 'relative' }} className="stream-group">
          <div id="group-video-container">
            <video
              ref={this.publisherRef}
              id={configs.localVideoId}
              className="video-js broadcaster"
              hidden={!publish_started}
              muted
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      </>
    );
  }
}

GroupStreamingContainer.contextType = SocketContext;
export default withAntmedia(GroupStreamingContainer);
