import { flatten, omit } from 'lodash';
import { put, select, all } from 'redux-saga/effects';
import { createSagas } from '@lib/redux';
import {
  earningService,
  studioService,
  payoutRequestService
} from '@services/index';
import {
  IReduxAction,
  IResponse,
  IStudio,
  IPerformerDirectDeposit,
  IPerformerBitpay,
  IPerformerPaxum,
  IPerformerPaymentInfoUpdate
} from 'src/interfaces';
import {
  updateStudio,
  updateStudioSuccess,
  updateStudioFail,
  setUpdatingStudio,
  updateStudioPaymentInfo,
  updateStudioDirectDeposit,
  updateStudioBitpay,
  updateStudioPaxum,
  getMembers,
  getMembersSuccess,
  getMembersFail,
  getMembersSearching,
  getMembersCommissions,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail,
  getMembersCommissionsSearching,
  getStudioEarning,
  getStudioEarningFail,
  getStudioEarningSuccess,
  setGettingStudioEarning,
  getStudioPayoutRequest,
  getStudioPayoutRequestFail,
  getStudioPayoutRequestSuccess,
  setGettingStudioPayoutRequest,
  getPerformerRequest,
  getPerformerRequestFail,
  getPerformerRequestSuccess,
  setGettingPerformerRequest,
  getStudioStats,
  getStudioStatsSuccess,
  getStudioStatsFail
} from './actions';

const studioSagas = [
  {
    on: updateStudio,
    * worker(data: IReduxAction<any>) {
      try {
        yield put(setUpdatingStudio());
        const updated: IResponse<IStudio> = yield studioService.update(
          data.payload
        );
        yield put(updateStudioSuccess(updated.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updateStudioFail(err));
      }
    }
  },

  {
    on: updateStudioPaymentInfo,
    * worker(action: IReduxAction<IPerformerPaymentInfoUpdate>) {
      try {
        yield put(setUpdatingStudio());
        const resp: IResponse<IStudio> = yield studioService.updatePaymentInfo(
          action.payload
        );
        yield put(updateStudioSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updateStudioFail(err));
      }
    }
  },
  {
    on: updateStudioDirectDeposit,
    * worker(action: IReduxAction<IPerformerDirectDeposit>) {
      try {
        yield put(setUpdatingStudio());
        const resp: IResponse<IStudio> = yield studioService.updateDirectDepost(
          action.payload
        );
        yield put(updateStudioSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updateStudioFail(err));
      }
    }
  },
  {
    on: updateStudioBitpay,
    * worker(action: IReduxAction<IPerformerBitpay>) {
      try {
        yield put(setUpdatingStudio());
        const resp: IResponse<IStudio> = yield studioService.updateBitpay(
          action.payload
        );
        yield put(updateStudioSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updateStudioFail(err));
      }
    }
  },
  {
    on: updateStudioPaxum,
    * worker(action: IReduxAction<IPerformerPaxum>) {
      try {
        yield put(setUpdatingStudio());
        const resp: IResponse<IStudio> = yield studioService.updatePaxum(
          action.payload
        );
        yield put(updateStudioSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updateStudioFail(err));
      }
    }
  },
  {
    on: getMembers,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(getMembersSearching());
        const resp = yield studioService.getMembers(action.payload);
        yield put(getMembersSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMembersFail(err));
      }
    }
  },
  {
    on: getMembersCommissions,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(getMembersCommissionsSearching());
        const resp = yield studioService.getMemberCommissions(action.payload);
        yield put(getMembersCommissionsSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMembersCommissionsFail(err));
      }
    }
  },
  {
    on: getPerformerRequest,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingPerformerRequest());
        const resp = yield studioService.getPerformerRequest(action.payload);
        yield put(getPerformerRequestSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getPerformerRequestFail(err));
      }
    }
  },
  {
    on: getStudioEarning,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingStudioEarning());
        let difDateQuery = false;
        const earning = yield select((state) => state.performer.earning);
        const { fromDate, toDate } = action.payload;
        const query = omit(action.payload, ['fromDate', 'toDate']);
        if (fromDate && toDate) {
          query.fromDate = fromDate;
          query.toDate = toDate;
        }

        if (earning.toDate !== toDate || earning.fromDate !== fromDate) difDateQuery = true;

        const [resp, stats] = yield all([
          earningService.search(query, 'studio'),
          earning.stats && !difDateQuery
            ? earning.stats
            : earningService.stats(query, 'studio')
        ]);
        yield put(
          getStudioEarningSuccess({ ...query, stats, data: resp.data })
        );
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getStudioEarningFail(err));
      }
    }
  },
  {
    on: getStudioStats,
    * worker() {
      try {
        const resp = yield studioService.stats();
        yield put(getStudioStatsSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getStudioStatsFail(err));
      }
    }
  },
  {
    on: getStudioPayoutRequest,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingStudioPayoutRequest());
        const resp = yield payoutRequestService.studioSearch(action.payload);
        yield put(getStudioPayoutRequestSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getStudioPayoutRequestFail(err));
      }
    }
  }
];

export default flatten([createSagas(studioSagas)]);
