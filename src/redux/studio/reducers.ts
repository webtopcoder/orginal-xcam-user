import { merge } from 'lodash';
import { createReducers } from '@lib/redux';
import { IReduxAction, IUser, IStats } from 'src/interfaces';
import { logout } from '@redux/auth/actions';
import {
  updateCurrentStudio,
  setUpdatingStudio,
  updateStudioSuccess,
  updateStudioFail,
  getMembersSearching,
  getMembersFail,
  getMembersSuccess,
  updateMemberStatus,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail,
  getMembersCommissionsSearching,
  updateMemberCommision,
  setGettingStudioEarning,
  getStudioEarningSuccess,
  getStudioEarningFail,
  getPerformerRequestSuccess,
  getPerformerRequestFail,
  setGettingPerformerRequest,
  getStudioStatsSuccess,
  updateTotalPerformer,
  getStudioPayoutRequestFail,
  getStudioPayoutRequestSuccess,
  setGettingStudioPayoutRequest
} from './actions';

const initialState = {
  current: {
    _id: null,
    avatar: '/default-user-icon.png',
    stats: {},
    balance: 0,
    name: '',
    email: ''
  },
  updatingStudio: false,
  members: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  commissions: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  performerRequests: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  earning: {
    data: [],
    stats: null,
    total: 0,
    searching: false,
    success: false,
    error: null,
    fromDate: null,
    toDate: null
  },
  studioPayout: {
    data: [],
    total: 0,
    searching: false,
    success: false,
    error: null
  },
  updateStudioSuccess: false,
  updateStudioError: null
};

const studioReducers = [
  {
    on: updateCurrentStudio,
    reducer(state: any, data: any) {
      return {
        ...state,
        current: data.payload
      };
    }
  },
  {
    on: updateStudioSuccess,
    reducer(state: any, data: IReduxAction<IUser>) {
      return {
        ...state,
        current: data.payload,
        updateStudioSuccess: true,
        updatingStudio: false,
        updateStudioError: null
      };
    }
  },
  {
    on: updateStudioFail,
    reducer(state, data) {
      return {
        ...state,
        updateStudioSuccess: false,
        updatingStudio: false,
        updateStudioError: data.payload
      };
    }
  },
  {
    on: setUpdatingStudio,
    reducer(state) {
      return {
        ...state,
        updatingStudio: true,
        updateStudioSuccess: false
      };
    }
  },
  {
    on: getMembersSearching,
    reducer(state) {
      return {
        ...state,
        members: {
          ...state.members,
          searching: true,
          error: null
        }
      };
    }
  },
  {
    on: getMembersSuccess,
    reducer(state, action) {
      return {
        ...state,
        members: {
          searching: false,
          success: true,
          data: action.payload.data,
          total: action.payload.total,
          error: null
        }
      };
    }
  },
  {
    on: getMembersFail,
    reducer(state, action) {
      return {
        ...state,
        members: {
          ...state.members,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: updateMemberStatus,
    reducer(state, action) {
      return {
        ...state,
        members: {
          ...state.members,
          data: state.members.data.map((member) => ({
            ...member,
            status:
              member._id === action.payload
                ? (member.status === 'active' ? 'inactive' : 'active') : member.status
          }))
        }
      };
    }
  },
  {
    on: getMembersCommissionsSearching,
    reducer(state) {
      return {
        ...state,
        commissions: {
          ...state.commissions,
          searching: true,
          error: null
        }
      };
    }
  },
  {
    on: getMembersCommissionsSuccess,
    reducer(state, action) {
      return {
        ...state,
        commissions: {
          searching: false,
          success: true,
          data: action.payload.data,
          total: action.payload.total,
          error: null
        }
      };
    }
  },
  {
    on: getMembersCommissionsFail,
    reducer(state, action) {
      return {
        ...state,
        commissions: {
          ...state.commissions,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: updateMemberCommision,
    reducer(state, action) {
      const { id, memberCommission } = action.payload;
      const { commissions } = state;
      const commission = commissions.data.find((c) => c._id === id);
      if (commission) {
        commission.commissionSetting.memberCommission = memberCommission;
      }
      return {
        ...state,
        commissions: {
          ...state.commissions,
          data: [...commissions.data]
        }
      };
    }
  },
  {
    on: getStudioEarningSuccess,
    reducer(state: any, action: IReduxAction<any>) {
      return {
        ...state,
        earning: {
          data: action.payload.data.data,
          total: action.payload.data.total,
          fromDate: action.payload.fromDate,
          toDate: action.payload.toDate,
          stats: action.payload.stats,
          searching: false,
          success: true,
          error: null
        }
      };
    }
  },
  {
    on: getStudioEarningFail,
    reducer(state, action) {
      return {
        ...state,
        earning: {
          ...state.earning,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: setGettingStudioEarning,
    reducer(state) {
      return {
        ...state,
        earning: {
          ...state.earning,
          searching: true,
          success: false
        }
      };
    }
  },
  {
    on: setGettingPerformerRequest,
    reducer(state) {
      return {
        ...state,
        performerRequests: {
          ...state.performerRequests,
          searching: true,
          error: null
        }
      };
    }
  },
  {
    on: getPerformerRequestSuccess,
    reducer(state, action) {
      return {
        ...state,
        performerRequests: {
          searching: false,
          success: true,
          data: action.payload.data,
          total: action.payload.total,
          error: null
        }
      };
    }
  },
  {
    on: getPerformerRequestFail,
    reducer(state, action) {
      return {
        ...state,
        performerRequests: {
          ...state.performerRequests,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: logout,
    reducer() {
      return {
        ...initialState
      };
    }
  },
  {
    on: getStudioStatsSuccess,
    reducer(state, action: IReduxAction<IStats>) {
      return {
        ...state,
        current: {
          ...state.current,
          stats: action.payload
        }
      };
    }
  },
  {
    on: updateTotalPerformer,
    reducer(state, action: IReduxAction<number>) {
      const { current } = state;
      return {
        ...state,
        stats: {
          ...state.stats,
          totalPerformer: current.stats.totalPerformer + action.payload
        }
      };
    }
  },

  // studio payout request
  {
    on: getStudioPayoutRequestSuccess,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        studioPayout: {
          data: action.payload.data,
          total: action.payload.total,
          searching: false,
          success: true,
          error: null
        }
      };
    }
  },
  {
    on: getStudioPayoutRequestFail,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        studioPayout: {
          ...state.studioPayout,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: setGettingStudioPayoutRequest,
    reducer(state) {
      return {
        ...state,
        studioPayout: {
          ...state.studioPayout,
          searching: true,
          error: null
        }
      };
    }
  }
];

export default merge(
  {},
  createReducers('studio', [studioReducers], initialState)
);
