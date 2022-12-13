import { createAsyncAction, createAction } from 'src/lib/redux';

export const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = createAsyncAction('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');

export const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = createAsyncAction('searchPerformer', 'SEARCH_PERFORMER');

export const setPerformerSearching = createAction('SET_PERFORMER_SEARCHING');

export const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = createAsyncAction('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
export const setupdatingPerformerProfile = createAction(
  'updatingPerformerProfile'
);
export const updatePaymentInfo = createAction('UPDATE_PAYMENT_INFO');
export const updateDirectDeposit = createAction('UPDATE_DIRECT_DEPOSIT');
export const updatePaxum = createAction('UPDATE_PAXUM');
export const updateBitpay = createAction('UPDATE_BITPAY');
export const updateStreamingStatus = createAction('UPDATE_STREAMING_STATUS');
export const updateDefaultPrice = createAction('UPDATE_DEFAULT_PRICE');

export const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = createAsyncAction('getPerformerDetails', 'GET_PERFORMER_DETAILS');
export const setGettingPerformerDetails = createAction(
  'setGettingPerformerDetails'
);
export const setPerformerDetails = createAction('SET_PERFORMER_DETAILS');
export const updatePerformerAsset = createAction('UPDATE_PERFORMER_ASSET');
export const setFavoritePerformerDetails = createAction(
  'SET_FAVORITE_PERFORMER_DETAILS'
);

export const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = createAsyncAction('getMyProducts', 'GET_MY_PRODUCT');
export const setGettingMyProducts = createAction('setGettingMyProducts');
export const addMyProduct = createAction('addMyProduct');
export const removeMyProduct = createAction('removeMyProduct');

export const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = createAsyncAction('getEarning', 'GET_EARNING');
export const setGettingEarning = createAction('SET_GETTING_EARNIG');

export const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = createAsyncAction('getPayoutRequest', 'GET_PAYOUT_REQUEST');
export const setGettingPayoutRequest = createAction('SET_GETTING_PAYOUT_REQUEST');
export const removePayoutRequest = createAction('REMOVE_PAYOUT_REQUEST');

export const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = createAsyncAction('getMyVideos', 'GET_MY_VIDEO');
export const setgettingMyVideos = createAction('setgettingMyVideos');
export const addMyVideos = createAction('addMyVideos');
export const removeMyVideo = createAction('removeMyVideo');

export const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = createAsyncAction('getMyPhotos', 'GET_MY_PHOTO');
export const setgettingMyPhotos = createAction('setgettingMyPhotos');
export const addMyPhotos = createAction('addMyPhotos');
export const removeMyPhoto = createAction('removeMyPhoto');

export const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = createAsyncAction('getMyGalleries', 'GET_MY_GALLERIES');
export const setgettingMyGalleries = createAction('setgettingMyGalleries');
export const addMyGalleries = createAction('addMyGalleries');
export const removeMyGalleries = createAction('removeMyGalleries');

export const updateCurrentPerformer = createAction('updateCurrentPerformer');
export const updatePerformerFavourite = createAction(
  'UPDATE_PERFORMER_FAVOURITE'
);
export const updateCurrentPerformerBalance = createAction(
  'UPDATE_CURRENT_PERFORMER_BALANCE'
);
