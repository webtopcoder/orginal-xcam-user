import { IceConnectionState } from './IceServer';

export type WebRTCAdaptorCallback = (info: string, obj: any) => void;

export type WebRTCAdaptorCallbackError = (error: any, message: string) => void;

export interface WebRTCAdaptor {
  getStreamInfo: (streamId: string) => void;

  closePeerConnection: (streamId: string) => void;

  publish: (streamId: string, token: string) => void;

  leave: (streamId: string) => void;

  play: (streamId: string) => void;

  stop: (streamId: string) => void;

  enableStats: (streamId: string) => void;

  disableStats: (streamId: string) => void;

  closeStream: () => void;

  closeWebSocket: () => void;

  iceConnectionState: (streamId: string) => IceConnectionState;

  forceStreamQuality: (streamId: string, resolution: number) => void;

  muteLocalMic: () => void;

  unmuteLocalMic: () => void;

}

export interface WebRTCAdaptorProps extends WebRTCAdaptor {
  classNames?: string;
  containerClassName?: string;
  initialized: boolean;
  // eslint-disable-next-line camelcase
  publish_started: boolean;
  onTrack: string;
  streamResolutions: number[];
  webRTCAdaptor: any;
  initWebRTCAdaptor: (
    cb?: WebRTCAdaptorCallback,
    cbError?: WebRTCAdaptorCallbackError
  ) => void;
  leaveSession: Function;
  startPublishing: (streamId: string) => void;
  stopPublishing: Function;
  fetchStream: (streamId: string, token: string, extension?: string) => Promise<string>;
}
