import { createAsyncAction, createAction } from '@lib/redux';

export const { login, loginSuccess, loginFail } = createAsyncAction(
  'login',
  'LOGIN'
);
export const loginRequesting = createAction('LOGIN_REQUESTING');

export const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = createAsyncAction('performerlogin', 'PERFORMER_LOGIN');

export const
  resetLoginData = createAction('resetLoginData');

export const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = createAsyncAction('studioLogin', 'STUDIO_LOGIN');

export const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = createAsyncAction('performerRegister', 'PERFORMER_REGISTER');
export const setPerformerRegisterSubmitting = createAction(
  'SET_PERFORMER_REGISTER_SUBMITTING'
);

export const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = createAsyncAction('userRegister', 'USER_REGISTER');
export const setUserRegisterSubmitting = createAction(
  'SET_USER_REGISTER_SUBMITTING'
);

export const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = createAsyncAction('updatePassword', 'UPDATE_PASSWORD');
export const setUpdatePasswordSubmitting = createAction(
  'SET_UPDATE_PASSWORD_SUBMITTING'
);

export const logout = createAction('logout');
