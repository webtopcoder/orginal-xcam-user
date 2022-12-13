import classnames from 'classnames';

export function initializePlayer(id: string, cls?: string): HTMLVideoElement {
  const video = document.createElement('video');
  video.id = id;
  video.className = classnames('video-js broadcaster', cls);
  video.autoplay = true;
  video.muted = true;
  video.controls = true;
  video.playsInline = true;
  return video;
}
