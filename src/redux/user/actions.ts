import {
  createAction,
  createAsyncAction
} from '@lib/redux';

export const updateCurrentUser = createAction('updateCurrentUser');
export const updateCurrentUserAvatar = createAction('updateCurrentUserAvatar');
export const updateCurrentUserBalance = createAction(
  'updateCurrentUserBalance'
);

export const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = createAsyncAction('updateUser', 'UPDATE_USER');

export const setUpdating = createAction('updatingUser');

export const setReducer = createAction('setUserReducer');

export const buyTokenSuccess = createAction('buyTokenSuccess');

export const {
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed
} = createAsyncAction('getFavoritePerformers', 'GET_FAVOURITE');
export const gettingFavoritePerformers = createAction('GETTING_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');

export const {
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail
} = createAsyncAction('getPaymentTokenHistroy', 'GET_PAYMET_TOKE_HISTORY');
export const gettigPaymentTokenHistory = createAction('GETTING_PAYMET_TOKE_HISTORY');
