/* eslint-disable camelcase */
import React from 'react';
import classnames from 'classnames';
import withAntMedia from 'src/antmedia';
import { streamService } from 'src/services';
import { StreamSettings } from 'src/interfaces';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import {
  WebRTCAdaptorConfigs,
  WebRTCAdaptorProps
} from 'src/antmedia/interfaces';
import './index.less';
import videojs from 'video.js';
import Router from 'next/router';
import { isMobile } from 'react-device-detect';

interface IProps extends WebRTCAdaptorProps {
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

const DEFAULT_IMAGE_URL = '';

class Subscriber extends React.PureComponent<IProps> {
  private streamId: string;

  private onTrack: string;

  private player: videojs.Player;

  private getLiveStreamOrVodURLInterval: NodeJS.Timeout;

  private playerNode: HTMLVideoElement;

  componentDidMount() {
    Router.events.on('routeChangeStart', this.onbeforeunload);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onbeforeunload);
    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }
  }

  onbeforeunload = () => {
    this.destroyPlaybackVideo();
  };

  ended = async () => {
    this.player && this.player.error(null);
    const { settings } = this.props;
    if (!this.streamId) {
      this.resetPlaybackVideo();
      return;
    }

    const src = await streamService.getLiveStreamOrVodURL({
      streamId: this.streamId,
      settings,
      appName: settings.AntMediaAppname
    });
    if (src) {
      this.getLiveStreamOrVodURLInterval = setInterval(() => {
        fetch(src, { method: 'HEAD' }).then(() => {
          this.playHLS(this.streamId);
        });
      }, 5000);
    }
  };

  async handelWebRTCAdaptorCallback(
    info: WEBRTC_ADAPTOR_INFORMATIONS,
    obj: any
  ) {
    const { webRTCAdaptor, settings } = this.props;
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
      if (this.streamId) {
        setTimeout(() => {
          webRTCAdaptor.getStreamInfo(this.streamId);
        }, 500);
      }
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.NEW_STREAM_AVAILABLE) {
      if (this.onTrack === obj.streamId) {
        return;
      }

      if (this.player) {
        this.player.dispose();
        this.player = null;
        this.playerNode = null;
      }

      this.onTrack = obj.streamId;
      this.createRemoteVideo(obj.stream);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PLAY_FINISHED) {
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 3000);
      this.onTrack = null;
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.STREAM_INFORMATION) {
      if (this.streamId && this.streamId === obj.streamId) {
        const token = await streamService.getSubscriberToken({
          streamId: obj.streamId,
          settings
        });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  cbErrorHandler(error: string) {
    if (error === 'no_stream_exist') {
      const { webRTCAdaptor, initWebRTCAdaptor } = this.props;
      if (!webRTCAdaptor) {
        initWebRTCAdaptor(
          this.handelWebRTCAdaptorCallback.bind(this),
          this.cbErrorHandler.bind(this)
        );
      } else {
        this.streamId
          && setTimeout(() => {
            webRTCAdaptor.getStreamInfo(this.streamId);
          }, 3000);
      }
    } else if (error === 'already_playing') {
      if (this.streamId) {
        const { webRTCAdaptor } = this.props;
        if (!webRTCAdaptor) return;

        if (isMobile) {
          if (this.playerNode) {
            this.playerNode.readyState !== 4 && webRTCAdaptor.stop(this.streamId);
          } else {
            webRTCAdaptor.stop(this.streamId);
          }
        } else if (this.player) {
          this.player.readyState() !== 4 && webRTCAdaptor.stop(this.streamId);
        } else {
          webRTCAdaptor.stop(this.streamId);
        }
      }
    }
  }

  createPlaybackideo(poster = DEFAULT_IMAGE_URL) {
    const { classNames } = this.props;
    if (!this.playerNode) {
      const video = document.createElement('video');
      video.setAttribute('id', 'subscriber');
      video.setAttribute('class', classnames('video-js', classNames));
      video.autoplay = true;
      video.muted = true;
      video.controls = true;
      video.playsInline = true;
      document.querySelector('.video-container').append(video);
      this.playerNode = video;
    }

    const player = videojs(
      this.playerNode,
      {
        autoplay: true,
        liveui: true,
        muted: true,
        controls: true,
        bigPlayButton: false,
        poster
      },
      () => {
        if (!poster) player.addClass('vjs-waiting');
        this.player = player;
      }
    );
    player.on('ended', this.ended);
    player.on('error', this.ended);
  }

  resetPlaybackVideo(poster = DEFAULT_IMAGE_URL) {
    this.destroyPlaybackVideo();
    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }
    this.createPlaybackideo(poster);
  }

  destroyPlaybackVideo() {
    this.streamId = null;
    this.onTrack = null;
    if (this.player) {
      this.player.dispose();
      this.player = null;
      this.playerNode = null;
    } else if (this.playerNode) {
      this.playerNode.remove();
      this.playerNode = null;
    }

    const video = document.getElementById('subscriber') as HTMLVideoElement;
    if (video) {
      video.srcObject = null;
      video.remove();
    }
  }

  createRemoteVideo(stream: any) {
    const { classNames, webRTCAdaptor } = this.props;
    if (!this.playerNode) {
      const video = document.createElement('video');
      video.setAttribute('id', 'subscriber');
      video.setAttribute('class', classnames('video-js', classNames));
      video.autoplay = true;
      video.muted = true;
      video.controls = true;
      video.playsInline = true;
      document.querySelector('.video-container').append(video);
      this.playerNode = video;
    }

    this.playerNode.srcObject = stream;

    if (!isMobile) {
      const player = videojs(
        this.playerNode,
        {
          liveui: true,
          autoplay: true,
          muted: true,
          controls: true,
          bigPlayButton: false
        },
        () => {
          player.hasStarted(true);
          this.player = player;
        }
      );
      player.on('error', () => {
        player.error(null);
      });
      player.on('ended', () => {
        setTimeout(() => {
          if (this.onTrack && this.player && this.player.readyState() !== 4) {
            webRTCAdaptor && webRTCAdaptor.getStreamInfo(this.onTrack);
          }
        }, 30 * 1000); // 30 seconds
      });
      player.addClass('vjs-waiting');
      return;
    }

    this.playerNode.addEventListener('ended', () => {
      setTimeout(() => {
        if (this.onTrack && this.playerNode && this.playerNode.readyState !== 4) {
          webRTCAdaptor && webRTCAdaptor.getStreamInfo(this.onTrack);
        }
      }, 30 * 1000); // 30 seconds
    });
  }

  async play(streamId: string) {
    if (!streamId) {
      return;
    }

    const { initWebRTCAdaptor, initialized, webRTCAdaptor } = this.props;
    this.streamId = streamId;
    if (initialized) {
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(streamId);
      }, 500);
      return;
    }

    initWebRTCAdaptor(
      this.handelWebRTCAdaptorCallback.bind(this),
      this.cbErrorHandler.bind(this)
    );
  }

  async playHLS(streamId: string, streamHeight = 0) {
    if (!streamId) {
      return;
    }

    if (!this.player) {
      this.createPlaybackideo();
    }

    if (this.getLiveStreamOrVodURLInterval) {
      clearInterval(this.getLiveStreamOrVodURLInterval);
      this.getLiveStreamOrVodURLInterval = null;
    }

    const { configs, settings } = this.props;
    const appName = configs.appName || settings.AntMediaAppname;
    this.streamId = streamId;
    const src = await streamService.getLiveStreamOrVodURL(
      {
        appName,
        settings,
        streamId
      },
      streamHeight
    );
    if (!src) {
      return;
    }

    setTimeout(() => {
      if (!this.player) return;

      this.player.addClass('vjs-waiting');
      this.player.src({
        type: 'application/x-mpegURL',
        src
      });
      this.player.play();
      this.player.controls(true);
    }, 500);
  }

  stop() {
    this.resetPlaybackVideo();
  }

  poster(src: string) {
    if (this.player) {
      this.player.removeClass('vjs-waiting');
      this.player.poster(src);
    } else if (this.playerNode) {
      this.playerNode.poster = src;
    }
  }

  render() {
    return <div className="video-container" />;
  }
}

export default withAntMedia(Subscriber);
