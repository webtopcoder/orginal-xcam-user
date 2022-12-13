/* eslint-disable camelcase */
import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { StreamSettings } from 'src/interfaces';
import { SETTING_KEYS } from 'src/constants';
import { message as message_ } from 'antd';
import { NextComponentType, NextPageContext } from 'next';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { getGlobalConfig } from '@services/config';
import { WEBRTC_ADAPTOR_INFORMATIONS } from './constants';
import {
  WebRTCAdaptorConfigs,
  WebRTCAdaptorCallback,
  WebRTCAdaptorCallbackError,
  WebRTCAdaptor,
  WebRTCAdaptorProps,
  Device
} from './interfaces';

interface IProps {
  configs: Partial<WebRTCAdaptorConfigs>;
  settings: StreamSettings;
  classNames?: string;
  containerClassName?: string;
  forwardedRef?: any;
  initImmediately?: boolean;
  autoRepublishDisabled?: boolean;
  onClick?: any;
  onChange?: WebRTCAdaptorCallback;
}

interface IStates {
  initialized: boolean;
  publish_started: boolean;
  streamResolutions: number[];
  localStream: string;
  availableDevices: Device[];
}

type WrappedComponentProps = React.ComponentProps<
  React.ComponentClass<
    Partial<IProps & WebRTCAdaptorProps & React.RefAttributes<any>>
  >
>;

export default function withAntmedia<P = any>(
  WrappedComponent: NextComponentType<
    NextPageContext,
    any,
    WrappedComponentProps
  >
) {
  class WebRTCAdaptorWrapper extends React.Component<IProps, IStates> {
    private webRTCAdaptor: WebRTCAdaptor;

    private autoRepublishIntervalJob: NodeJS.Timeout;

    private initWebRTCAdaptorCallback: WebRTCAdaptorCallback;

    private initWebRTCAdaptorCallbackError: WebRTCAdaptorCallbackError;

    static async getInitialProps(ctx: NextPageContext) {
      const pageProps = WrappedComponent.getInitialProps
        && (await WrappedComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    constructor(props: IProps) {
      super(props);
      this.state = {
        initialized: false,
        publish_started: false,
        localStream: null,
        streamResolutions: [],
        availableDevices: []
      };
    }

    componentDidMount() {
      const { initImmediately } = this.props;
      initImmediately && this.initWebRTCAdaptor();
      Router.events.on('routeChangeStart', this.onbeforeunload);
      // window.addEventListener('beforeunload', this.onbeforeunload);
    }

    componentWillUnmount() {
      Router.events.off('routeChangeStart', this.onbeforeunload);
      // window.removeEventListener('beforeunload', this.onbeforeunload);
    }

    onbeforeunload = () => {
      this.leaveSession();
    };

    getStreamInfo(streamId: string) {
      this.webRTCAdaptor && this.webRTCAdaptor.getStreamInfo(streamId);
    }

    getLiveStreamOrVodURL() {}

    forceStreamQuality(streamId: string, streamHeight = 0) {
      this.webRTCAdaptor
        && this.webRTCAdaptor.forceStreamQuality(streamId, streamHeight);
    }

    leaveSession() {
      const { localStream, initialized } = this.state;
      const {
        configs: { isPlayMode }
      } = this.props;
      if (this.autoRepublishIntervalJob) {
        window.clearInterval(this.autoRepublishIntervalJob);
        this.autoRepublishIntervalJob = null;
      }

      if (this.webRTCAdaptor) {
        if (localStream) {
          this.webRTCAdaptor.stop(localStream);
          this.webRTCAdaptor.closePeerConnection(localStream);
        }
        if (initialized) {
          this.webRTCAdaptor.closeWebSocket();
          !isPlayMode && this.webRTCAdaptor.closeStream();
        }
        this.webRTCAdaptor = null;
      }

      this.initWebRTCAdaptorCallback = null;
      this.initWebRTCAdaptorCallbackError = null;
      this.setState({
        localStream: null,
        initialized: false,
        streamResolutions: [],
        availableDevices: []
      });
    }

    initWebRTCAdaptor(
      cb?: WebRTCAdaptorCallback,
      cbError?: WebRTCAdaptorCallbackError
    ) {
      const {
        configs, settings, autoRepublishDisabled, onChange
      } = this.props;
      const { isPlayMode } = configs;
      const publisherURL = isPlayMode
        ? settings[SETTING_KEYS.SUBSCRIBER_URL]
        : settings[SETTING_KEYS.PUBLISHER_URL];
      if (!publisherURL) {
        message_.error('Undefined WebsocketURL!');
        return;
      }

      if (!this.webRTCAdaptor && autoRepublishDisabled) return;
      const config = getGlobalConfig();
      const pc_config = {
        iceServers: [
          {
            urls: 'stun:stun.l.google.com:19302'
          }
        ]
      };

      const sdpConstraints = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: false
      };

      const mediaConstraints = {
        video: true,
        audio: true
      };

      const appName = configs.appName || settings.AntMediaAppname;
      const path = `${publisherURL}/${appName}/websocket`;

      let websocketURL = `ws://${path}`;

      if (window.location.protocol.startsWith('https')) {
        websocketURL = `wss://${path}`;
      }

      this.initWebRTCAdaptorCallback = cb;
      this.initWebRTCAdaptorCallbackError = cbError;
      // eslint-disable-next-line dot-notation
      this.webRTCAdaptor = new window['WebRTCAdaptor']({
        websocket_url: websocketURL,
        mediaConstraints,
        debug: config.NEXT_PUBLIC_DEBUG,
        peerconnection_config: pc_config,
        sdp_constraints: sdpConstraints,
        bandwidth:
          parseInt(config.NEXT_PUBLIC_MAX_VIDEO_BITRATE_KBPS, 10) || 900,
        isPlayMode: false,
        callback: (info: string, obj: any) => {
          if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
            this.setState({ initialized: true });
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
            if (obj.streamId) {
              this.setState({
                publish_started: true,
                localStream: obj.streamId
              });
              if (!this.autoRepublishIntervalJob && !autoRepublishDisabled) {
                this.autoRepublishIntervalJob = setInterval(
                  this.checkAndRepublishIfRequired.bind(this),
                  5000
                );
              }
              this.webRTCAdaptor
                && this.webRTCAdaptor.enableStats(obj.streamId);
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_FINISHED) {
            this.setState({ publish_started: false, localStream: null });
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.REFRESH_CONNECTION) {
            const { publish_started } = this.state;
            if (publish_started && !autoRepublishDisabled) {
              this.checkAndRepublishIfRequired();
            }
          } else if (
            info === WEBRTC_ADAPTOR_INFORMATIONS.ICE_CONNECTION_STATE_CHANGED
          ) {
            if (typeof obj !== 'undefined') {
              // eslint-disable-next-line no-console
              console.log('iceConnectionState Changed: ', JSON.stringify(obj));
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.UPDATED_STATS) {
            if (typeof obj !== 'undefined') {
              // eslint-disable-next-line no-console
              console.log('Peer stats Changed: ', JSON.stringify(obj));
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.BITRATE_MEASUREMENT) {
            if (typeof obj !== 'undefined') {
              // eslint-disable-next-line no-console
              console.log('Bitrate Measurement: ', JSON.stringify(obj));
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PLAY_STARTED) {
            if (obj.streamId) {
              this.webRTCAdaptor
                && this.webRTCAdaptor.enableStats(obj.streamId);
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PLAY_FINISHED) {
            this.setState({ streamResolutions: [] });
            if (obj.streamId) {
              // this.webRTCAdaptor && this.webRTCAdaptor.disableStats(obj.streamId);
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.CLOSED) {
            if (typeof obj !== 'undefined') {
              // eslint-disable-next-line no-console
              console.log(`Connection closed: ${JSON.stringify(obj)}`);
            }
          } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.AVAILABLE_DEVICES) {
            this.setState({ availableDevices: obj });
          }

          onChange && typeof onChange === 'function' && onChange(info, obj);
          cb && typeof cb === 'function' && cb(info, obj);
        },
        callbackError: (error, message) => {
          cbError && typeof cbError === 'function' && cbError(error, message);
          this.callbackError(error, message);
        },
        ...configs
      });
    }

    checkAndRepublishIfRequired() {
      try {
        const { localStream } = this.state;
        if (!this.webRTCAdaptor || !localStream) return;

        const iceState = this.webRTCAdaptor.iceConnectionState(localStream);
        if (
          iceState == null
          || iceState === 'failed'
          || iceState === 'disconnected'
        ) {
          // eslint-disable-next-line no-console
          console.error('Publish has stopped and will try to re-publish');
          this.webRTCAdaptor.stop(localStream);
          this.webRTCAdaptor.closePeerConnection(localStream);
          this.webRTCAdaptor.closeWebSocket();
          this.initWebRTCAdaptor(
            this.initWebRTCAdaptorCallback,
            this.initWebRTCAdaptorCallbackError
          );
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('error republish', e);
      }
    }

    callbackError(error, message) {
      // some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError
      // eslint-disable-next-line no-console
      console.error(`error callback: ${JSON.stringify(error)}`);
      if (typeof message === 'string') {
        // eslint-disable-next-line no-console
        console.error('error message:', message);
        message_.error(message, 5);
        return;
      }

      let errorMessage = JSON.stringify(error);
      if (
        errorMessage.indexOf('noStreamNameSpecified') !== -1
        || errorMessage.indexOf('no_stream_exist') !== -1
        || errorMessage.indexOf('WebSocketNotConnected') !== -1
        || errorMessage.indexOf('already_playing') !== -1
        || errorMessage.indexOf('already_publishing') !== -1
      ) {
        return;
      }

      if (
        errorMessage.indexOf('isTrusted') !== -1
        || errorMessage.indexOf('license_suspended_please_renew_license') !== -1
      ) {
        this.leaveSession();
        return;
      }

      if (errorMessage.indexOf('NotFoundError') !== -1) {
        errorMessage = 'Camera or Mic are not found or not allowed in your device';
      } else if (
        errorMessage.indexOf('NotReadableError') !== -1
        || errorMessage.indexOf('TrackStartError') !== -1
      ) {
        errorMessage = 'Camera or Mic is being used by some other process that does not let read the devices';
      } else if (
        errorMessage.indexOf('OverconstrainedError') !== -1
        || errorMessage.indexOf('ConstraintNotSatisfiedError') !== -1
      ) {
        errorMessage = 'There is no device found that fits your video and audio constraints. You may change video and audio constraints';
      } else if (
        errorMessage.indexOf('NotAllowedError') !== -1
        || errorMessage.indexOf('PermissionDeniedError') !== -1
      ) {
        errorMessage = 'You are not allowed to access camera and mic.';
      } else if (errorMessage.indexOf('TypeError') !== -1) {
        errorMessage = 'Video/Audio is required';
      } else if (errorMessage.indexOf('ScreenSharePermissionDenied') !== -1) {
        errorMessage = 'You are not allowed to access screen share';
      } else if (errorMessage.indexOf('unauthorized_access') !== -1) {
        errorMessage = 'Access Denied. You don’t have permission to access';
      } else if (errorMessage.indexOf('streamIdInUse') !== -1) {
        errorMessage = 'Stream have been already published. Please close the previous connection.';
      } else if (errorMessage.indexOf('publishTimeoutError') !== -1) {
        errorMessage = 'WebRTC Publishing Timeout Error';
        this.leaveSession();
      } else if (
        errorMessage.indexOf('not_allowed_unregistered_streams') !== -1
      ) {
        errorMessage = 'Stream with an unregistered id is not allowed';
      } else if (errorMessage.indexOf('UnsecureContext') !== -1) {
        errorMessage = 'Fatal Error: Browser cannot access camera and mic because of unsecure context. Please install SSL and access via https';
      } else if (errorMessage.indexOf('WebSocketNotSupported') !== -1) {
        errorMessage = 'Fatal Error: WebSocket not supported in this browser';
      } else if (errorMessage.indexOf('AudioAlreadyActive') !== -1) {
        errorMessage = 'AudioAlreadyActive';
      } else if (errorMessage.indexOf('stream_not_active_or_expired') !== -1) {
        errorMessage = 'Stream is not active or expired';
      } else if (errorMessage.indexOf('notSetRemoteDescription') !== -1) {
        /*
         * If getting codec incompatible or remote description error, should try to play HLS
         */
      } else if (errorMessage.indexOf('getUserMediaIsNotAllowed') !== -1) {
        errorMessage = 'You are not allowed to reach devices from an insecure origin, please enable ssl';
      } else if (errorMessage.indexOf('viewerLimitReached') !== -1) {
        errorMessage = 'Stream already hit the limit';
      } else {
        errorMessage = 'Bad request!';
      }

      errorMessage && message_.error(errorMessage, 5);
    }

    muteLocalMic() {
      if (this.webRTCAdaptor) {
        this.webRTCAdaptor.muteLocalMic();
      }
    }

    unmuteLocalMic() {
      if (this.webRTCAdaptor) {
        this.webRTCAdaptor.unmuteLocalMic();
      }
    }

    startPublishing(idOfStream: string) {
      if (this.webRTCAdaptor) {
        this.webRTCAdaptor.publish(idOfStream, null);
      }
    }

    stopPublishing() {
      if (this.autoRepublishIntervalJob) {
        window.clearInterval(this.autoRepublishIntervalJob);
        this.autoRepublishIntervalJob = null;
      }

      const { localStream } = this.state;
      this.webRTCAdaptor && this.webRTCAdaptor.stop(localStream);
    }

    fetchStream(
      streamId: string,
      token: string,
      extension = 'm3u8',
      cb: (error: any, src: string) => void
    ) {
      const { settings } = this.props;
      const { viewerURL, AntMediaAppname: appName } = settings;
      let src = `${window.location.protocol}//${viewerURL}/${appName}/streams/${streamId}_adaptive.${extension}?token=${token}`;
      fetch(src, { method: 'HEAD' })
        .then((response) => {
          if (response.status === 200) {
            cb(null, src);
          }

          src = src.replace('_adaptive', '');
          fetch(src, { method: 'HEAD' })
            // eslint-disable-next-line no-shadow
            .then((response) => {
              if (response.status === 200) {
                cb(null, src);
                return;
              }

              cb(response, null);
            })
            .catch((err) => {
              cb(err, null);
            });
        })
        .catch((err) => {
          cb(err, null);
        });
    }

    render() {
      const { forwardedRef } = this.props;
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          webRTCAdaptor={this.webRTCAdaptor}
          initWebRTCAdaptor={this.initWebRTCAdaptor.bind(this)}
          muteLocalMic={this.muteLocalMic.bind(this)}
          unmuteLocalMic={this.unmuteLocalMic.bind(this)}
          leaveSession={this.leaveSession.bind(this)}
          getStreamInfo={this.getStreamInfo.bind(this)}
          forceStreamQuality={this.forceStreamQuality.bind(this)}
          startPublishing={this.startPublishing.bind(this)}
          stopPublishing={this.stopPublishing.bind(this)}
          fetchStream={this.fetchStream.bind(this)}
          ref={forwardedRef}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({ settings: state.streaming.settings });
  const WrapperComponent = hoistNonReactStatic(
    connect(mapStateToProps)(WebRTCAdaptorWrapper),
    WrappedComponent
  );
  WrapperComponent.displayName = 'WrapperComponent';
  const ForwadedRefWapper = React.forwardRef<{}, Omit<IProps & P, 'settings'>>(
    (props, ref) => <WrapperComponent {...props} forwardedRef={ref} />
  );
  ForwadedRefWapper.displayName = 'WebRTCAdaptor';
  return ForwadedRefWapper;
}
