import { createAction, createAsyncActions } from '@lib/redux';

export const [
  getPerformerPhotos,
  getPerformerPhotosSuccess,
  getPerformerPhotosFail
] = createAsyncActions('GET_PERFORMER_PHOTOS');
export const gettingPerformerPhotos = createAction('GETTING_PERFORMER_PHOTOS');
