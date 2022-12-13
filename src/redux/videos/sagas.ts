import { put } from 'redux-saga/effects';
import { flatten } from 'lodash';
import { createSagas } from '@lib/redux';
import { IReduxAction, IResponse, IDataResponse } from 'src/interfaces';
import { videoService } from 'src/services';
import { getResponseError } from 'src/lib';
import {
  getPerformersVideos,
  getPerformersVideosFail,
  getPerformersVideosSuccess,
  gettingPerformerVideos
} from './actions';

const videosSagas = [
  {
    on: getPerformersVideos,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettingPerformerVideos());
        const resp: IResponse<IDataResponse<any>> = yield videoService.search(
          action.payload
        );
        const videos = resp.data.data;
        const ids = videos.map((v) => v._id);
        const data = videos.length && (videos.length > 1 ? videos.reduce((previousValue, currentValue, index) => {
          if (index === 1) {
            return { [previousValue._id]: previousValue, [currentValue._id]: currentValue };
          }

          const value = { ...previousValue };
          value[currentValue._id] = currentValue;
          return value;
        }) : { [videos[0]._id]: videos[0] });

        yield put(
          getPerformersVideosSuccess({
            total: resp.data.total,
            data,
            ids
          })
        );
      } catch (e) {
        const err = getResponseError(e);
        yield put(getPerformersVideosFail(err));
      }
    }
  }
];

export default flatten([createSagas(videosSagas)]);
