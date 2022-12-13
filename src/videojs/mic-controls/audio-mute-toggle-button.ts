import videojs from 'video.js';

interface AudioMuteToggleButtonOptions {
  muteLocalMic: any;
  unmuteLocalMic: any;
  isMicMuted: boolean;
}

const Button = videojs.getComponent('Button');

class AudioMuteToggleButton extends Button {
  private initialized = false;

  private isMicMuted = false;

  private _options: AudioMuteToggleButtonOptions;

  constructor(player: videojs.Player, options: any) {
    super(player, options);
    this._options = options;
    if (typeof this._options.isMicMuted !== 'undefined') {
      this.isMicMuted = this._options.isMicMuted;
    }
    if (player.readyState()) {
      this.initialized = true;
      const text = this.isMicMuted ? 'Unmute Local Mic' : 'Mute Local Mic';
      this.controlText(text);
    }
    this.on(player, 'timeupdate', () => {
      if (this.initialized) {
        this.update();
      }
    });
  }

  update() {}

  createEl() {
    return super.createEl('button', {
      innerHTML: '<span role="img" aria-label="audio" class="anticon anticon-audio"><svg viewBox="64 64 896 896" focusable="false" data-icon="audio" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true"><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path></svg></span>',
      className: 'vjs-audio vjs-control vjs-button'
    });
  }

  buildCSSClass() {
    return `${super.buildCSSClass()}`;
  }

  handleClick() {
    const { muteLocalMic, unmuteLocalMic } = this._options;
    if (this.initialized) {
      const audio = document.querySelector('.vjs-audio');
      audio.classList.toggle('vjs-audio-off');
      let controlText = '';
      if (this.isMicMuted) {
        unmuteLocalMic();
        controlText = 'Mute Local Mic';
      } else {
        muteLocalMic();
        controlText = 'Unmute Local Mic';
      }

      if (this.controlText() !== controlText) {
        this.controlText(controlText);
      }
      this.isMicMuted = !this.isMicMuted;
    }
  }
}

videojs.registerComponent('AudioMuteToggleButton', AudioMuteToggleButton);
export default AudioMuteToggleButton;
