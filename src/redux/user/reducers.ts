import { merge } from 'lodash';
import { createReducers } from '@lib/redux';
import {
  IReduxAction,
  IUser,
  IReducerFieldUpdate,
  IDataResponse,
  IPerformer,
  IFavourite
} from 'src/interfaces';
import { logout } from '@redux/auth/actions';
import {
  updateCurrentUser,
  updateUserSuccess,
  updateUserFail,
  setUpdating,
  updateCurrentUserAvatar,
  updateCurrentUserBalance,
  setReducer,
  buyTokenSuccess,
  gettingFavoritePerformers,
  removeFavorite,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed,
  gettigPaymentTokenHistory,
  getPaymentTokenHistroyFail,
  getPaymentTokenHistroySuccess
} from './actions';

const initialState = {
  current: {
    _id: null,
    avatar: '/default-user-icon.png',
    name: '',
    email: ''
  },
  userUpdating: false,
  updateUserSuccess: false,
  updateUserError: null,
  paymentTokenHistory: {
    searching: false,
    data: [],
    total: 0,
    error: null,
    success: false
  },
  favourites: {
    searching: false,
    data: null,
    total: 0,
    error: null,
    success: false
  }
};

const userReducers = [
  {
    on: updateCurrentUser,
    reducer(state: any, data: any) {
      return {
        ...state,
        current: data.payload
      };
    }
  },
  {
    on: updateCurrentUserAvatar,
    reducer(state: any, data: any) {
      return {
        ...state,
        current: {
          ...state.current,
          avatar: data.payload
        }
      };
    }
  },
  {
    on: updateCurrentUserBalance,
    reducer(state, action: IReduxAction<number>) {
      return {
        ...state,
        current: {
          ...state.current,
          balance: state.current.balance + action.payload
        }
      };
    }
  },
  {
    on: updateUserSuccess,
    reducer(state: any, data: IReduxAction<IUser>) {
      return {
        ...state,
        current: data.payload,
        updateUserSuccess: true,
        userUpdating: false,
        updateUserError: null
      };
    }
  },
  {
    on: updateUserFail,
    reducer(state, data) {
      return {
        ...state,
        updateUserSuccess: false,
        userUpdating: false,
        updateUserError: data.payload
      };
    }
  },
  {
    on: setUpdating,
    reducer(state) {
      return {
        ...state,
        userUpdating: true,
        updateUserSuccess: false
      };
    }
  },
  {
    on: setReducer,
    reducer(state: any, data: IReduxAction<IReducerFieldUpdate<any>>) {
      return {
        ...state,
        [data.payload.field]: data.payload.data
      };
    }
  },
  {
    on: buyTokenSuccess,
    reducer(state: any, data: any) {
      const { current } = state;
      current.balance += data.payload;
      return {
        ...state,
        current: {
          ...state.current,
          balance: current.balance
        }
      };
    }
  },
  {
    on: gettingFavoritePerformers,
    reducer(state) {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          searching: true,
          data: null,
          total: 0,
          error: null,
          success: false
        }
      };
    }
  },
  {
    on: getFavoritePerformersSuccess,
    reducer(state: any, data: IReduxAction<IDataResponse<IPerformer>>) {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          searching: false,
          data: data.payload.data,
          total: data.payload.total,
          error: null,
          success: true
        }
      };
    }
  },
  {
    on: getFavoritePerformersFailed,
    reducer(state: any, data: IReduxAction<IDataResponse<IPerformer>>) {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          searching: false,
          data: null,
          total: 0,
          error: data.payload.data,
          success: false
        }
      };
    }
  },
  {
    on: removeFavorite,
    reducer(state, action: IReduxAction<string>) {
      const { favourites } = state;
      favourites.data = favourites.data.filter(
        (f: IFavourite) => f.performer._id !== action.payload
      );
      return {
        ...state
      };
    }
  },
  {
    on: gettigPaymentTokenHistory,
    reducer(state) {
      return {
        ...state,
        paymentTokenHistory: {
          ...state.paymentTokenHistory,
          searching: true,
          error: null,
          success: false
        }
      };
    }
  },
  {
    on: getPaymentTokenHistroySuccess,
    reducer(state, action: IReduxAction<IDataResponse<any>>) {
      return {
        ...state,
        paymentTokenHistory: {
          searching: false,
          data: action.payload.data,
          total: action.payload.total,
          error: null,
          success: true
        }
      };
    }
  },
  {
    on: getPaymentTokenHistroyFail,
    reducer(state, action) {
      return {
        ...state,
        paymentTokenHistory: {
          ...state.paymentTokenHistory,
          searching: false,
          error: action.payload,
          success: false
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
  }
];

export default merge({}, createReducers('user', [userReducers], initialState));
