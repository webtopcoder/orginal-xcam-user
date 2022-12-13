import { all, spawn } from 'redux-saga/effects';

import userSagas from './user/sagas';
import authSagas from './auth/sagas';
import performerSagas from './performer/sagas';
import messageSagas from './message/sagas';
import settingSagas from './settings/sagas';
import streamMessageSagas from './stream-chat/sagas';
import videosSagas from './videos/sagas';
import photosSagas from './photos/sagas';
import productSagas from './products/sagas';
import galleriesSagas from './galleries/sagas';
import studioSagas from './studio/sagas';
import bannerSagas from './banner/sagas';

function* rootSaga() {
  yield all(
    [
      ...authSagas,
      ...userSagas,
      ...performerSagas,
      ...messageSagas,
      ...settingSagas,
      ...streamMessageSagas,
      ...videosSagas,
      ...photosSagas,
      ...productSagas,
      ...galleriesSagas,
      ...studioSagas,
      ...bannerSagas
    ].map(spawn)
  );
}

export default rootSaga;
