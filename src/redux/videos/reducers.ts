import { createReducers } from '@lib/redux';
import { merge } from 'lodash';
import { IReduxAction, IVideo } from 'src/interfaces';
import {
  gettingPerformerVideos,
  getPerformersVideosFail,
  getPerformersVideosSuccess,
  addPerformerVideos
} from './actions';

const initialState = {
  ids: [],
  data: {},
  searching: false,
  success: false,
  error: null
};

const videoReducers = [
  {
    on: gettingPerformerVideos,
    reducer() {
      return {
        ...initialState,
        searching: true
      };
    }
  },
  {
    on: getPerformersVideosSuccess,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        ...action.payload,
        searching: false,
        success: true,
        error: null
      };
    }
  },
  {
    on: getPerformersVideosFail,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        searching: false,
        success: false,
        error: action.payload
      };
    }
  },
  {
    on: addPerformerVideos,
    reducer(state, action: IReduxAction<IVideo[]>) {
      const { ids, data } = state;
      const videos = action.payload;
      videos.forEach((v) => {
        data[v._id] = v;
        ids.push(v._id);
      });
      return {
        ...state
      };
    }
  }
];

export default merge(
  {},
  createReducers('videos', [videoReducers], initialState)
);
