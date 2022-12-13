import {
  createAction,
  createAsyncAction
} from '@lib/redux';

export const updateCurrentStudio = createAction('updateCurrentStudio');

export const {
  updateStudio,
  updateStudioSuccess,
  updateStudioFail
} = createAsyncAction('updateStudio', 'UPDATE_STUDIO');

export const setUpdatingStudio = createAction('updatingStudio');

export const updateStudioPaymentInfo = createAction(
  'UPDATE_STUDIO_PAYMENT_INFO'
);
export const updateStudioDirectDeposit = createAction(
  'UPDATE_STUDIO_DIRECT_DEPOSIT'
);
export const updateStudioPaxum = createAction('UPDATE_STUDIO_PAXUM');
export const updateStudioBitpay = createAction('UPDATE_STUDIO_BITPAY');

export const {
  getStudioEarning,
  getStudioEarningSuccess,
  getStudioEarningFail
} = createAsyncAction('getStudioEarning', 'GET_STUDIO_EARNING');
export const setGettingStudioEarning = createAction(
  'SET_GETTING_STUDIO_EARNIG'
);

export const {
  getStudioPayoutRequest,
  getStudioPayoutRequestSuccess,
  getStudioPayoutRequestFail
} = createAsyncAction('getStudioPayoutRequest', 'GET_STUDIO_PAYOUT_REQUEST');
export const setGettingStudioPayoutRequest = createAction(
  'SET_GETTING_STUDIO_PAYOUT_REQUEST'
);
export const removeStudioPayoutRequest = createAction(
  'REMOVE_STUDIO_PAYOUT_REQUEST'
);

export const {
  getPerformerRequest,
  getPerformerRequestSuccess,
  getPerformerRequestFail
} = createAsyncAction('getPerformerRequest', 'GET_PERFORMER_REQUEST');
export const setGettingPerformerRequest = createAction(
  'SET_GETTING_PERFORMER_REQUEST'
);

export const {
  getMembers,
  getMembersSuccess,
  getMembersFail
} = createAsyncAction('getMembers', 'GET_MEMBERS');
export const getMembersSearching = createAction('GET_MEMBER_SEACHING');
export const updateMemberStatus = createAction('UPDATE_MEMBER_STATUS');

export const {
  getMembersCommissions,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail
} = createAsyncAction('getMembersCommissions', 'GET_MEMBERS_COMMSSIONS');
export const getMembersCommissionsSearching = createAction(
  'GET_MEMBER_COMMSSIO_SEACHING'
);
export const updateMemberCommision = createAction('UPDATE_MEMBER_COMMISSION');

export const {
  getStudioStats,
  getStudioStatsSuccess,
  getStudioStatsFail
} = createAsyncAction('getStudioStats', 'GET_STUDIO_STATS');
export const updateTotalPerformer = createAction('UPDATE_TOTAL_PERFORMER');
