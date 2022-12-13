import { createReducers } from '@lib/redux';
import { merge } from 'lodash';
import { getBannersSuccess, getBannersFail } from './actions';

const initialState = {
  listBanners: {
    loading: false,
    data: [],
    error: null,
    success: false
  }
};

const bannerReducer = [
  {
    on: getBannersSuccess,
    reducer(state: any, data: any) {
      return {
        ...state,
        listBanners: {
          loading: false,
          data: data.payload,
          error: null,
          success: true
        }
      };
    }
  },
  {
    on: getBannersFail,
    reducer(state: any, data: any) {
      return {
        ...state,
        listBanners: {
          ...state.listBanners,
          loading: false,
          data: null,
          error: data.payload,
          success: false
        }
      };
    }
  }
];

export default merge(
  {},
  createReducers('banner', [bannerReducer], initialState)
);
