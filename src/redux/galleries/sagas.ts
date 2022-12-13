import { put } from 'redux-saga/effects';
import { flatten } from 'lodash';
import { createSagas } from '@lib/redux';
import {
  IReduxAction,
  IResponse,
  IDataResponse,
  IPerformerGallery
} from 'src/interfaces';
import { getResponseError } from 'src/lib';
import { galleryService } from 'src/services';
import {
  getPerformerGalleries,
  getPerformerGalleriesSuccess,
  getPerformerGalleriesFail,
  gettingPerformerGalleries
} from './actions';

const galleriedSagas = [
  {
    on: getPerformerGalleries,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettingPerformerGalleries());
        const resp: IResponse<IDataResponse<any>> = yield galleryService.search(
          action.payload,
          false
        );

        const galleries = resp.data.data;
        const ids = galleries.map((g: IPerformerGallery) => g._id);
        const data = galleries.length && (galleries.length > 1 ? galleries.reduce((previousValue, currentValue, index) => {
          if (index === 1) {
            return { [previousValue._id]: previousValue, [currentValue._id]: currentValue };
          }

          const value = { ...previousValue };
          value[currentValue._id] = currentValue;
          return value;
        }) : { [galleries[0]._id]: galleries[0] });

        yield put(
          getPerformerGalleriesSuccess({
            data,
            ids,
            total: resp.data.total
          })
        );
      } catch (error) {
        const err = yield getResponseError(error);
        yield put(getPerformerGalleriesFail(err));
      }
    }
  }
];

export default flatten([createSagas(galleriedSagas)]);
