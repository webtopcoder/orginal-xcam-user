import { flatten } from 'lodash';
import { put } from 'redux-saga/effects';
import { createSagas } from '@lib/redux';
import { userService, favouriteService, purchaseItemService } from '@services/index';
import {
  IReduxAction, IResponse, IDataResponse, IPerformer
} from 'src/interfaces';
import {
  updateUser,
  updateUserSuccess,
  updateUserFail,
  setUpdating,
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed,
  gettingFavoritePerformers,
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail,
  gettigPaymentTokenHistory
} from './actions';

const userSagas = [
  // TODO - defind update current user or get from auth user info to reload current user data if needed
  {
    on: updateUser,
    * worker(data: IReduxAction<any>) {
      try {
        yield put(setUpdating());
        const updated = yield userService.updateMe(data.payload);
        yield put(updateUserSuccess(updated.data));
        // if this is current user, reload user info?
      } catch (e) {
        // TODO - alert error
        const err = yield Promise.resolve(e);
        yield put(updateUserFail(err));
      }
    }
  },
  {
    on: getFavoritePerformers,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettingFavoritePerformers());
        const resp: IResponse<IDataResponse<IPerformer>> = yield favouriteService.search(action.payload);
        yield put(getFavoritePerformersSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getFavoritePerformersFailed(err));
      }
    }
  },
  {
    on: getPaymentTokenHistroy,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettigPaymentTokenHistory());
        const resp: IResponse<IDataResponse<IPerformer>> = yield purchaseItemService.search(action.payload);
        yield put(getPaymentTokenHistroySuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getPaymentTokenHistroyFail(err));
      }
    }
  }
];

export default flatten([createSagas(userSagas)]);
