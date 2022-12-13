import { flatten } from 'lodash';
import { put } from 'redux-saga/effects';
import { createSagas } from '@lib/redux';
import Router from 'next/router';
import {
  authService,
  userService,
  performerService,
  studioService
} from 'src/services';
import {
  PERFORMER_ROLE,
  USER_ROLE,
  STUDIO_ROLE
} from 'src/services/api-request';
import {
  ILogin,
  IperformerLogin,
  IRegisterFormData,
  IUserRegisterFormData,
  IReduxAction,
  IResponse,
  IPerformer,
  IUser,
  IUpdatePasswordFormData
} from 'src/interfaces';
import { message } from 'antd';
import { updateCurrentStudio } from '../studio/actions';
import { updateCurrentPerformer } from '../performer/actions';
import { updateCurrentUser } from '../user/actions';
import {
  login,
  loginSuccess,
  logout,
  loginFail,
  performerRegister,
  performerRegisterFail,
  setPerformerRegisterSubmitting,
  loginRequesting,
  userRegister,
  userRegisterFail,
  userRegisterSuccess,
  setUserRegisterSubmitting,
  performerRegisterSuccess,
  performerlogin,
  performerloginFail,
  performerloginSuccess,
  studioLogin,
  studioLoginSuccess,
  studioLoginFail,
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail,
  setUpdatePasswordSubmitting
} from './actions';

const authSagas = [
  {
    on: login,
    * worker(data: any) {
      try {
        yield put(loginRequesting());
        const payload = data.payload as ILogin;
        const resp = (yield authService.login(payload)).data;
        // store token, update store and redirect to dashboard page
        yield authService.setAuthHeader(resp.token, USER_ROLE);

        const userResp = (yield userService.me()).data;
        yield put(updateCurrentUser(userResp));
        yield put(loginSuccess());

        Router.push('/');
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(loginFail(error));
      }
    }
  },
  {
    on: performerlogin,
    * worker(data: any) {
      try {
        yield put(loginRequesting());
        const payload = data.payload as IperformerLogin;
        const resp = (yield authService.performerLogin(payload)).data;
        // store token, update store and redirect to dashboard page
        yield authService.setAuthHeader(resp.token, PERFORMER_ROLE);
        const performerResp = (yield performerService.me()).data;
        yield put(updateCurrentPerformer(performerResp));
        yield put(performerloginSuccess());
        Router.push('/live');
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(performerloginFail(error));
      }
    }
  },

  {
    on: studioLogin,
    * worker(data: IReduxAction<ILogin>) {
      try {
        yield put(loginRequesting());
        const payload = data.payload as ILogin;
        const resp = (yield authService.studioLogin(payload)).data;
        // store token, update store and redirect to dashboard page
        yield authService.setAuthHeader(resp.token, STUDIO_ROLE);
        const studioResp = (yield studioService.me()).data;
        yield put(updateCurrentStudio(studioResp));
        yield put(studioLoginSuccess());
        Router.push('/studio/account-settings');
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(studioLoginFail(error));
      }
    }
  },
  {
    on: performerRegister,
    * worker(data: IReduxAction<IRegisterFormData>) {
      try {
        yield put(setPerformerRegisterSubmitting());
        const { payload } = data;
        const resp: IResponse<IPerformer> = yield authService.performersRegister(
          payload
        );
        yield put(performerRegisterSuccess(resp.data));
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(performerRegisterFail(error));
      }
    }
  },
  {
    on: logout,
    * worker() {
      try {
        yield authService.removeToken();
        yield authService.removeRemember();
        Router.push('/');
        message.success('Log out!');
      } catch (e) {
        message.error('Something went wrong!');
      }
    }
  },
  {
    on: userRegister,
    * worker(data: IReduxAction<IUserRegisterFormData>) {
      try {
        yield put(setUserRegisterSubmitting());
        const resp: IResponse<IUser> = yield authService.userRegister(
          data.payload
        );
        yield put(userRegisterSuccess(resp.data));
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(userRegisterFail(error));
      }
    }
  },
  {
    on: updatePassword,
    * worker(action: IReduxAction<IUpdatePasswordFormData>) {
      try {
        yield put(setUpdatePasswordSubmitting());
        const resp: IResponse<IUser> = yield authService.updatePassword(
          action.payload
        );
        yield put(updatePasswordSuccess(resp.data));
      } catch (e) {
        const error = yield Promise.resolve(e);
        yield put(updatePasswordFail(error));
      }
    }
  }
];

export default flatten([createSagas(authSagas)]);
