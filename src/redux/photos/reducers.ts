import { createReducers } from '@lib/redux';
import { merge } from 'lodash';
import { IReduxAction, IPhoto, IDataResponse } from 'src/interfaces';
import {
  gettingPerformerPhotos,
  getPerformerPhotosSuccess,
  getPerformerPhotosFail
} from './actions';

const initialPhotosState = {
  error: null,
  data: {},
  total: 0,
  success: false,
  searching: false
};
const photoReducers = [
  {
    on: gettingPerformerPhotos,
    reducer() {
      return {
        ...initialPhotosState,
        searching: true
      };
    }
  },
  {
    on: getPerformerPhotosSuccess,
    reducer(_, action: IReduxAction<IDataResponse<IPhoto>>) {
      return {
        error: null,
        data: action.payload.data,
        total: action.payload.total,
        success: true,
        searching: false
      };
    }
  },
  {
    on: getPerformerPhotosFail,
    reducer(_, action: IReduxAction<IDataResponse<any>>) {
      return {
        data: null,
        error: action.payload,
        success: false,
        searching: false
      };
    }
  }
];
export default merge(
  {},
  createReducers('photos', [photoReducers], initialPhotosState)
);
