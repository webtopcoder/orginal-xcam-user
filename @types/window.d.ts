import ReCAPTCHA from 'react-google-recaptcha';

declare global {
  interface Window {
    ReactSocketIO: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    grecaptcha: ReCAPTCHA;
  }
}
