import React from 'react';
import classnames from 'classnames';

export interface HTMLMediaProps
  extends React.AudioHTMLAttributes<any>,
    React.VideoHTMLAttributes<any> {
  id: string;
  classNames?: string;
}

const defaultProps = {
  muted: true,
  controls: true,
  playsInline: true,
  autoPlay: true,
  preload: 'auto'
};

export const LocalStream = ({ classNames, ...props }: HTMLMediaProps) => {
  const ref = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    const videoEl = ref.current;
    if (videoEl) {
      videoEl.addEventListener('play', () => {
        // eslint-disable-next-line no-console
        console.log('Pulisher is playing');
      });
    }
  }, []);

  const className = React.useMemo(() => classnames('video-js broadcaster'), [classNames]);

  return React.createElement('video', {
    ...defaultProps,
    ...props,
    ref,
    className
  });
};
