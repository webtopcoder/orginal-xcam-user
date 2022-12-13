import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import nextCookie from 'next-cookies';
import withReduxSaga from '@redux/withReduxSaga';
import { Store } from 'redux';
import BaseLayout from '@layouts/base-layout';
import {
  authService,
  userService,
  performerService,
  studioService,
  bannerService
} from '@services/index';
import Router from 'next/router';
import { NextPageContext } from 'next';
import { loginSuccess } from '@redux/auth/actions';
import { updateCurrentUser } from '@redux/user/actions';
import { updateCurrentPerformer } from '@redux/performer/actions';
import { settingService } from '@services/setting.service';
import { updateCurrentStudio } from '@redux/studio/actions';
import { updateUIValue } from '@redux/ui/actions';
import { PERFORMER_ROLE, USER_ROLE, IResponse } from 'src/services/api-request';
import { Socket } from 'src/socket';
import '../style/index.less';
import { updateSettings } from '@redux/settings/actions';
import { getBannersSuccess } from '@redux/banner/actions';
import { SETTING_KEYS } from 'src/constants';
import { updateLiveStreamSettings } from '@redux/streaming/actions';
import { pick } from 'lodash';
import Head from 'next/head';
import cookie from 'cookie';
import { IUIConfig } from 'src/interfaces';
import { setGlobalConfig } from '@services/config';

declare global {
  interface Window {
    ReactSocketIO: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export const ROLE = {
  STUDIO: 'studio',
  PERFORMER: 'performer',
  USER: 'user'
};
function redirectLogin(ctx: NextPageContext, authenticate: boolean | string) {
  if (process.browser) {
    authService.removeToken();
    authService.removeRemember();
    if (authenticate && authenticate === ROLE.STUDIO) {
      Router.push('/studio/login');
      return;
    }

    Router.push('/auth/login/user');
    return;
  }

  // fix for production build
  // ctx.res.clearCookie && ctx.res.clearCookie('token');
  const authCookie = cookie.serialize('token', '', {
    maxAge: -1
  });
  ctx.res.writeHead
    && ctx.res.writeHead(302, {
      'Set-Cookie': authCookie,
      Location:
        authenticate && authenticate === ROLE.STUDIO
          ? '/studio/login'
          : '/auth/login/user'
    });
  ctx.res.end && ctx.res.end();
}

async function auth(ctx: NextPageContext, authenticate: boolean | string) {
  try {
    if (process.browser && !authenticate) return;

    const { store } = ctx;
    const state = store.getState();
    if (state.auth && state.auth.loggedIn) {
      return;
    }

    // TODO - move to a service
    const { token, role } = nextCookie(ctx);
    if (token && role) {
      authService.setAuthHeaderToken(token);
      let resp: IResponse<any>;
      if (role === PERFORMER_ROLE) {
        resp = await performerService.me({
          Authorization: token
        });
        store.dispatch(updateCurrentPerformer(resp.data));
      }

      if (role === USER_ROLE) {
        resp = await userService.me({
          Authorization: token
        });
        store.dispatch(updateCurrentUser(resp.data));
      }

      if (role === ROLE.STUDIO) {
        resp = await studioService.me({
          Authorization: token
        });
        store.dispatch(updateCurrentStudio(resp.data));
      }

      // TODO - check permission
      store.dispatch(loginSuccess());
    } else if (authenticate) {
      redirectLogin(ctx, authenticate);
      return;
    }
  } catch (e) {
    if (authenticate) {
      redirectLogin(ctx, authenticate);
    }
  }
}

async function updateSettingsStore(ctx: NextPageContext, settings) {
  try {
    const { store } = ctx;
    store.dispatch(updateSettings({
      tipSound: settings.tipSound,
      metaKeywords: settings.metaKeywords,
      metaDescription: settings.metaDescription,
      siteName: settings.siteName,
      logoUrl: settings.logoUrl,
      defaultOfflineModelImage: settings.defaultOfflineModelImage,
      defaultPrivateCallImage: settings.defaultPrivateCallImage,
      defaultGroupChatImage: settings.defaultGroupChatImage
    }));
    store.dispatch(getBannersSuccess(settings.banners));
    store.dispatch(
      updateUIValue({
        placeholderLoginUrl: settings.placeholderLoginUrl,
        placeholderAvatarUrl: settings.placeholderAvatarUrl,
        logo: settings.logoUrl,
        siteName: settings.siteName,
        menus: settings.menus,
        footerContent: settings.footerContent,
        currencySymbol: settings.currencySymbol,
        singularTextModel: settings.singularTextModel,
        pluralTextModel: settings.pluralTextModel,
        popup18Enabled: settings.popup18Enabled,
        popup18ContentId: settings.popup18ContentId,
        googleReCaptchaEnabled: settings.googleReCaptchaEnabled,
        googleReCaptchaSiteKey: settings.googleReCaptchaSiteKey
      })
    );
    store.dispatch(
      updateLiveStreamSettings(
        pick(settings, [
          SETTING_KEYS.VIEWER_URL,
          SETTING_KEYS.PUBLISHER_URL,
          SETTING_KEYS.SUBSCRIBER_URL,
          SETTING_KEYS.OPTION_FOR_BROADCAST,
          SETTING_KEYS.OPTION_FOR_PRIVATE,
          SETTING_KEYS.OPTION_FOR_GROUP,
          SETTING_KEYS.DEFAULT_OFFLINE_MODEL_IMAGE,
          SETTING_KEYS.DEFAULT_MODEL_PRIVATECALL_WITH_USER_IMAGE,
          SETTING_KEYS.DEFAULT_MODEL_IN_GROUP_CHAT_IMAGE,
          SETTING_KEYS.ANT_MEDIA_APPNAME
        ])
      )
    );
    // TODO - update others like meta data
  } catch (e) {
    // TODO - implement me
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

interface AppComponent extends NextPageContext {
  layout: string;
}

interface IApp {
  store: Store;
  layout: string;
  authenticate: boolean;
  Component: AppComponent;
  settings: IUIConfig;
  config: any;
}

const publicConfig = {} as any;
class Application extends App<IApp> {
  static settingQuery = false;

  // TODO - consider if we need to use get static props in children component instead?
  // or check in render?
  static async getInitialProps({ Component, ctx }) {
    // load configuration from ENV and put to config
    if (!process.browser) {
      // eslint-disable-next-line global-require
      const dotenv = require('dotenv');
      const myEnv = dotenv.config().parsed;

      // publish to server config with app
      setGlobalConfig(myEnv);

      // load public config and api-endpoint?
      Object.keys(myEnv).forEach((key) => {
        if (key.indexOf('NEXT_PUBLIC_') === 0) {
          publicConfig[key] = myEnv[key];
        }
      });
    }
    // won't check auth for un-authenticated page such as login, register
    // use static field in the component
    await auth(ctx, Component.authenticate);

    // server side to load settings, once time only
    let settings = {};
    if (!process.browser) {
      const [_settings, _banner] = await Promise.all([
        settingService.all(),
        bannerService.search({ status: 'active' })
      ]);
      // TODO encrypt, decypt header script, footer script or other info if needed
      settings = _settings.data || {};
      await updateSettingsStore(ctx, {
        ...settings,
        banners: _banner?.data?.data || []
      });
    }

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    // TODO - overwrite for ui config by using redux-store
    return {
      settings,
      pageProps,
      layout: Component.layout,
      config: publicConfig
    };
  }

  constructor(props) {
    super(props);
    setGlobalConfig(this.props.config);
  }

  render() {
    const {
      Component, pageProps, store, settings
    } = this.props;

    const { layout } = Component;
    return (
      <Provider store={store}>
        <Head>
          <title>
            {typeof settings.siteName === 'string'
            && settings.siteName.length > 0
              ? settings.siteName
              : 'Application'}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Socket>
          <BaseLayout
            layout={layout}
            maintenanceMode={settings.maintenanceMode}
          >
            <Component {...pageProps} />
          </BaseLayout>
        </Socket>
      </Provider>
    );
  }
}

export default withReduxSaga(Application);
