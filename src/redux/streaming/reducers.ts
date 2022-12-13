import { merge } from 'lodash';
import { createReducers } from '@lib/redux';
import { IReduxAction } from 'src/interfaces';
import {
  addPrivateRequest, accessPrivateRequest, updateLiveStreamSettings
} from './actions';

const initialState = {
  privateRequests: [],
  settings: {
    viewerURL: '',
    publisherURL: '',
    optionForBroadcast: 'hls',
    optionForPrivate: 'hls',
    secureOption: false
  }
};

const reducers = [
  {
    on: addPrivateRequest,
    reducer(state: any, action: IReduxAction<any>) {
      return {
        ...state,
        privateRequests: [...state.privateRequests, action.payload]
      };
    }
  },
  {
    on: accessPrivateRequest,
    reducer(state: any, action: IReduxAction<string>) {
      return {
        ...state,
        privateRequests: state.privateRequests.filter((p) => p.conversationId !== action.payload)
      };
    }
  },
  {
    on: updateLiveStreamSettings,
    reducer(state: any, action: IReduxAction<any>) {
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      };
    }
  }
];
export default merge({}, createReducers('streaming', [reducers], initialState));
