// https://github.com/ant-media/Ant-Media-Server/wiki/WebRTC-WebSocket-Messaging-Reference

// eslint-disable-next-line no-shadow
export enum WEBRTC_ADAPTOR_INFORMATIONS {
  // initialized: WebSocket connection is initialized successfully in this state.
  INITIALIZED = 'initialized',

  AVAILABLE_DEVICES = 'available_devices',

  // publish_started: WebRTC stream publishing has been started in this state.
  PUBLISH_STARTED = 'publish_started',

  // publish_finished: WebRTC stream publishing has been finished in this state.
  PUBLISH_FINISHED = 'publish_finished',

  // screen_share_extension_available: Screen Share extension is available in this state.
  SCREEN_SHARE_EXTENSION_AVAILABLE = 'screen_share_extension_available',

  // screen_share_stopped: Screen Share is stopped in this state.
  SCREEN_SHARE_STOPPED = 'screen_share_stopped',

  // closed: WebSocket connection is closed in this state.
  CLOSED = 'closed',

  // pong: When client sent ping message, server answers pong message.
  PONG = 'pong',

  // refreshConnection: When WebSocket connection is refreshed and stream is published in this state.
  REFRESH_CONNECTION = 'refreshConnection',

  // ice_connection_state_changed: If Ice Connection is changed, server sends changed info.
  ICE_CONNECTION_STATE_CHANGED = 'ice_connection_state_changed',

  // updated_stats: When Peer stats are changed, server sends updated values.
  UPDATED_STATS = 'updated_stats',

  PLAY_FINISHED = 'play_finished',

  PLAY_STARTED = 'play_started',

  // joinedTheRoom: Called when WebSocket is connected. It has parameter that contains stream id for publishing and streams array in order to play the stream.
  JOINED_THE_ROOM = 'joinedTheRoom',

  // streamJoined: Called when a new stream is joined to the room. It has parameter about the stream id for playing.
  STREAM_JOINED = 'streamJoined',

  // newStreamAvailable: Called when a previously joined stream is ready to play.
  NEW_STREAM_AVAILABLE = 'newStreamAvailable',

  // streamLeaved: Called when a stream is leaved from the room.
  STREAM_LEAVED = 'streamLeaved',

  // leavedFromRoom: Called when this client is leaved from the room.
  LEAVED_FROM_ROOM = 'leavedFromRoom',

  STREAM_INFORMATION = 'streamInformation',

  BITRATE_MEASUREMENT = 'bitrateMeasurement'
}
