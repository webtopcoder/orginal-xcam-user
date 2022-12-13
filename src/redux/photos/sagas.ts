import { put } from 'redux-saga/effects';
import { flatten } from 'lodash';
import { createSagas } from '@lib/redux';
import {
  IReduxAction, IResponse, IDataResponse, IPhoto
} from 'src/interfaces';
import { getResponseError } from 'src/lib';
import { photoService } from 'src/services';
import {
  getPerformerPhotos,
  gettingPerformerPhotos,
  getPerformerPhotosSuccess,
  getPerformerPhotosFail
} from './actions';

const photosSagas = [
  {
    on: getPerformerPhotos,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettingPerformerPhotos());
        const resp: IResponse<IDataResponse<IPhoto>> = yield photoService.search(action.payload);
        yield put(getPerformerPhotosSuccess({ data: resp.data.data, total: resp.data.total }));
      } catch (error) {
        const err = getResponseError(error);
        yield put(getPerformerPhotosFail(err));
      }
    }
  }
];

export default flatten([createSagas(photosSagas)]);
