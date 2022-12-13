import { forwardRef, useEffect } from 'react';
import './recaptcha.less';
import ReCAPTCHA from 'react-google-recaptcha';
import Router from 'next/router';

interface IProps {
  googleReCaptchaEnabled: boolean;
  googleReCaptchaSiteKey: string;
  error: string;
}

const GoogleReCaptcha = forwardRef<any, IProps>((props: IProps, ref) => {
  const {
    googleReCaptchaEnabled, googleReCaptchaSiteKey, error
  } = props;

  const onRouteChangeStart = () => {
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart);

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart);
    };
  }, []);

  return (
    <div className="recaptcha-box">
      {googleReCaptchaEnabled && (
        <ReCAPTCHA
          ref={ref}
          // size={size}
          // badge="inline"
          sitekey={googleReCaptchaSiteKey}
        />
      )}
      {error && (
        <p className="recaptcha-error-message">
          {error || 'Please verify that you are not a robot.'}
        </p>
      )}
    </div>
  );
});
export default GoogleReCaptcha;
