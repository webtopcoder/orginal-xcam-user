/* eslint-disable camelcase */
import { PureComponent } from 'react';
import withAntmedia from 'src/antmedia';
import { message } from 'antd';
import { getResponseError } from '@lib/utils';
import { streamService } from 'src/services';
import { StreamSettings } from 'src/interfaces';
import './index.less';
import {
  WebRTCAdaptorConfigs,
  WebRTCAdaptorProps
} from 'src/antmedia/interfaces';
import videojs from 'video.js';
import { WEBRTC_ADAPTOR_INFORMATIONS } from 'src/antmedia/constants';
import Router from 'next/router';
import { isMobile } from 'react-device-detect';
import MicControlsPlugin from 'src/videojs/mic-controls/plugin';
import { LocalStream } from 'src/antmedia/LocalStream';

interface IProps extends WebRTCAdaptorProps {
  settings: StreamSettings;
  configs: Partial<WebRTCAdaptorConfigs>;
}

class Publisher extends PureComponent<IProps> {
  private publisher: videojs.Player;

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    videojs.registerPlugin('webRTCMicControlsPlugin', MicControlsPlugin);
    Router.events.on('routeChangeStart', this.onbeforeunload);
    // window.addEventListener('beforeunload', this.onbeforeunload);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onbeforeunload);
    // window.removeEventListener('beforeunload', this.onbeforeunload);
  }

  onbeforeunload = () => {
    if (this.publisher) {
      this.publisher.dispose();
      this.publisher = undefined;
    }
  };

  async startPublishing(idOfStream: string) {
    const { webRTCAdaptor, leaveSession, settings } = this.props;
    try {
      const token = await streamService.getPublishToken({
        streamId: idOfStream,
        settings
      });
      webRTCAdaptor.publish(idOfStream, token);
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
      leaveSession();
    }
  }

  publish(streamId: string) {
    const { initialized } = this.props;
    initialized && this.startPublishing(streamId);
  }

  start() {
    const { initWebRTCAdaptor, initialized, publish_started } = this.props;
    const { onTrack } = this.props;
    if (initialized && !publish_started && onTrack) {
      this.startPublishing(onTrack);
    }

    initWebRTCAdaptor(this.handelWebRTCAdaptorCallback.bind(this));
  }

  handelWebRTCAdaptorCallback(info: WEBRTC_ADAPTOR_INFORMATIONS) {
    if (info === WEBRTC_ADAPTOR_INFORMATIONS.PUBLISH_STARTED) {
      if (!isMobile) {
        const { configs, muteLocalMic, unmuteLocalMic } = this.props;
        const player = videojs(configs.localVideoId, {
          liveui: true,
          controls: true,
          muted: true,
          bigPlayButton: false,
          controlBar: {
            playToggle: false,
            currentTimeDisplay: false,
            volumePanel: false
          }
        }, () => {
          player.hasStarted(true);
          if (player.hasPlugin('webRTCMicControlsPlugin')) {
            player.webRTCMicControlsPlugin({
              muteLocalMic,
              unmuteLocalMic,
              isMicMuted: false
            });
          }
          this.publisher = player;
        });
        player.on('error', () => {
          player.error(null);
        });
      }
    }
  }

  render() {
    const {
      publish_started,
      classNames,
      configs: { localVideoId }
    } = this.props;
    return (
      <>
        <div>
          <LocalStream
            id={localVideoId}
            hidden={!publish_started}
            className={classNames}
          />
        </div>
        {publish_started && (
          <div className="text-center">
            <span className="publishing">Publishing</span>
          </div>
        )}
      </>
    );
  }
}

export default withAntmedia<{}>(Publisher);

export const LivePublisher = withAntmedia<{}>(Publisher);
