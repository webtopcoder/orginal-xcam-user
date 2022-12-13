/* eslint-disable dot-notation */
/* eslint-disable no-return-assign */
import React from 'react';
import Popup from '@components/common/base/popup';
import videojs from 'video.js';

class PopupVideoDetail extends React.PureComponent {
  popup: any;

  handler(src: string) {
    let video = document.querySelector('#video');
    if (!video) {
      video = document.createElement('video');
      video.setAttribute('id', 'video');
      video.setAttribute('class', 'video-js');
      video.setAttribute('autoplay', 'autoplay');
      document.querySelector('.ant-modal-body').append(video);
    }

    if (!window['video-player']) {
      window['video-player'] = videojs('video', {
        poster: '/xcam-logo-black.png',
        controls: true
      });
    }

    window['video-player'].src({ type: 'video/mp4', src });
    window['video-player'].play();
    // window['video'].on()
  }

  onOk() {
    window['video-player'] = window['video-player'].pause();
    // window['video-player'].poster = '/xcam-logo-black.png';
    this.popup.setVisible(false);
  }

  showModalBuyAssets(videoUrl: string) {
    this.popup.setVisible(true);
    setTimeout(() => this.handler(videoUrl), 500);
  }

  render() {
    return (
      <Popup
        title="Video detail"
        ref={(ref) => (this.popup = ref)}
        content={<></>}
        onOk={this.onOk.bind(this)}
        onCancel={this.onOk.bind(this)}
      />
    );
  }
}

export default PopupVideoDetail;
