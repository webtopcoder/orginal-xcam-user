/* eslint-disable camelcase */
import React from 'react';
import { StreamSettings } from 'src/interfaces';
import { streamService } from 'src/services';
import classnames from 'classnames';
import withAntMedia from 'src/antmedia';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import { WebRTCAdaptorConfigs, WebRTCAdaptorProps } from 'src/antmedia/interfaces';
import { isMobile } from 'react-device-detect';

interface IProps extends WebRTCAdaptorProps {
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

class Subscriber extends React.PureComponent<IProps> {
  private streamIds: string[] = [];

  private availableStreamIds = [];

  async handler(info: WEBRTC_ADAPTOR_INFORMATIONS, obj: any) {
    const { webRTCAdaptor, settings } = this.props;
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.INITIALIZED) {
      if (Array.isArray(this.streamIds)) {
        const tokens = await Promise.all(this.streamIds.map((streamId) => streamService.getSubscriberToken({ streamId, settings })));
        this.streamIds.map((id, i) => webRTCAdaptor.play(id, tokens[i]));
        return;
      }

      const token = await streamService.getSubscriberToken({ streamId: this.streamIds, settings });
      webRTCAdaptor.play(this.streamIds, token);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.NEW_STREAM_AVAILABLE) {
      const availableStream = this.availableStreamIds.find((id) => id === obj.streamId);
      if (!availableStream) {
        this.availableStreamIds.push(obj.streamId);
        this.createRemoteVideo(obj);
      }
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.PLAY_FINISHED) {
      this.availableStreamIds = this.availableStreamIds.filter((id) => id !== obj.streamId);
      this.removeRemoteVideo(obj.streamId);
      setTimeout(() => {
        webRTCAdaptor.getStreamInfo(obj.streamId);
      }, 3000);
    } else if (info === WEBRTC_ADAPTOR_INFORMATIONS.STREAM_INFORMATION) {
      if (this.streamIds.includes(obj.streamId)) {
        const token = await streamService.getSubscriberToken({ streamId: obj.streamId, settings });
        webRTCAdaptor.play(obj.streamId, token);
      }
    }
  }

  async cbErrorHandler(error: string) {
    if (error === 'no_stream_exist') {
      const { webRTCAdaptor, initWebRTCAdaptor } = this.props;
      if (!webRTCAdaptor) {
        initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
      } else {
        this.streamIds.forEach((id) => webRTCAdaptor.getStreamInfo(id));
      }
    }
  }

  createRemoteVideo({ stream, streamId }) {
    const { classNames, containerClassName } = this.props;
    const video = document.createElement('video');
    const container = document.getElementsByClassName(containerClassName)[0];
    video.setAttribute('id', `streamId-subscriber-${streamId}`);
    video.setAttribute('class', classnames(classNames));
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.playsInline = true;
    video.width = isMobile ? container.clientWidth / 2 : container.clientWidth / 4;
    video.height = isMobile ? 150 : 100.5;
    video.srcObject = stream;
    container.append(video);
  }

  removeRemoteVideo(streamId: string) {
    const { containerClassName } = this.props;
    const video = document.getElementById(`streamId-subscriber-${streamId}`) as HTMLVideoElement;
    if (video) {
      video.srcObject = null;
      const container = document.getElementsByClassName(containerClassName)[0];
      container.removeChild(video);
    }
  }

  async play(streamIds: string[]) {
    const {
      initWebRTCAdaptor, initialized, webRTCAdaptor, settings
    } = this.props;
    this.streamIds = [...this.streamIds, ...streamIds];
    if (initialized) {
      if (Array.isArray(streamIds)) {
        const tokens = await Promise.all(streamIds.map((streamId) => streamService.getSubscriberToken({ streamId, settings })));
        streamIds.map((id, i) => webRTCAdaptor.play(id, tokens[i]));
      }
      return;
    }

    initWebRTCAdaptor(this.handler.bind(this), this.cbErrorHandler.bind(this));
  }

  close(streamId: string) {
    this.streamIds = this.streamIds.filter((id) => id !== streamId);
  }

  stop() {
    const { leaveSession } = this.props;
    this.streamIds = [];
    this.availableStreamIds = [];
    leaveSession();
  }

  render() {
    return (
      <></>
    );
  }
}

export default withAntMedia(Subscriber);
