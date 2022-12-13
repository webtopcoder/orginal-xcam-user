import { createAction, createAsyncActions } from '@lib/redux';

export const [
  getPerformerGalleries,
  getPerformerGalleriesSuccess,
  getPerformerGalleriesFail
] = createAsyncActions('GET_PERFORMER_GALLERIES');
export const gettingPerformerGalleries = createAction('GETTING_PERFORMER_GALLERIES');

export const addPerformerGalleries = createAction('ADD_PERFORMER_GALLERIES');
export const purchaseGallerySuccess = createAction('PURCHASE_GALLERY_SUCCESS');
