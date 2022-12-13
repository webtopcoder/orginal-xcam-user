/* eslint-disable no-shadow */
export const PUBLIC_CHAT = 'public';
export const PRIVATE_CHAT = 'private';
export const GROUP_CHAT = 'group';
export const OFFLINE = 'offline';
export const MODEL_STREAM_CHANNEL = 'MODEL_STREAM_CHANNEL';

export enum MODEL_STREAM_EVENT_NAME {
  GROUP_START = 'GROUP_START',
  PRIVATE_ACCPET = 'PRIVATE_ACCPET'
}

export enum BroadcastStatus {
  FINISHED = 'finished',
  BROADCASTING = 'broadcasting',
  CREATED = 'created'
}

export enum BroadcastType {
  LiveStream = 'liveStream',
  IpCamera = 'ipCamera',
  StreamSource = 'streamSource',
  Vod = 'Vod'
}

export interface IOneTimeToken {
  tokenId?: string,
  id: string,
  expireDate?: number,
  type: 'publish' | 'play',
  roomId?: string
}

export interface StreamSettings {
  viewerURL: string,
  publisherURL: string,
  optionForBroadcast: 'hls' | 'webrtc',
  optionForPrivate: 'hls' | 'webrtc',
  secureOption: boolean,
  defaultOfflineModelImage: string;
  defaultPrivateCallImage: string;
  defaultGroupChatImage: string;
  AntMediaAppname: string
}

export const HLS = 'hls';
export const WEBRTC = 'webrtc';

export const defaultStreamValue = {
  publish: true,
  publicStream: true,
  plannedStartDate: 0,
  plannedEndDate: 0,
  duration: 0,
  mp4Enabled: 0,
  webMEnabled: 0,
  expireDurationMS: 0,
  speed: 0,
  pendingPacketSize: 0,
  hlsViewerCount: 0,
  webRTCViewerCount: 0,
  rtmpViewerCount: 0,
  startTime: 0,
  receivedBytes: 0,
  bitrate: 900,
  absoluteStartTimeMs: 0,
  webRTCViewerLimit: -1,
  hlsViewerLimit: -1
};
