import 'video.js';

declare module 'video.js' {
  export interface VideoJsPlayer {
    webRTCMicControlsPlugin: (options?: any) => void;
  }
}
