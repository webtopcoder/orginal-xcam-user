/* eslint-disable camelcase */
import { IceServer } from './IceServer';

export interface WebRTCAdaptorConfigs {
  websocket_url: string;
  localVideoId: string;
  peerconnection_config: { iceServers: IceServer[] };
  sdp_constraints: {
    OfferToReceiveAudio: boolean;
    OfferToReceiveVideo: boolean;
  };
  mediaConstraints: {
    video: boolean;
    audio: boolean;
  };
  remotePeerConnection: any;
  remotePeerConnectionStats: any;
  remoteDescriptionSet: any;
  iceCandidateList: any;
  webSocketAdaptor: any;
  roomName: string;
  videoTrackSender: any;
  audioTrackSender: any;
  micGainNode: any;
  localStream: string;
  bandwidth: number; // default bandwidth kbps
  isMultiPeer: boolean; // used for multiple peer client
  multiPeerStreamId: string[]; // used for multiple peer client
  roomTimerId: number;
  remoteVideoId: string;
  isPlayMode: boolean;
  debug: boolean;

  publishMode: string; // camera, screen, screen+camera

  /**
   * Supported candidate types. Below types are for both sending and receiving candidates.
   * It means if when client receives candidate from STUN server, it sends to the server if candidate's protocol
   * is in the list. Likely, when client receives remote candidate from server, it adds as ice candidate
   * if candidate protocol is in the list below.
   */
  candidateTypes: ['udp', 'tcp'];

  desktopStream: any;

  /**
   * The cam_location below is effective when camera and screen is send at the same time.
   * possible values are top and bottom. It's on right all the time
   */
  camera_location: 'top';

  /**
   * The cam_margin below is effective when camera and screen is send at the same time.
   * This is the margin value in px from the edges
   */
  camera_margin: number;

  /**
   * Thiz camera_percent is how large the camera view appear on the screen. It's %15 by default.
   */
  camera_percent: number;
  appName: string; // LiveApp, WebRTCApp, WebRTCAppEE
  playStreamId: string[];
}
