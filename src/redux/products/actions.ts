import { createAction, createAsyncActions } from '@lib/redux';

export const [
  getPerformerProducts,
  getPerformerProductsSuccess,
  getPerformerProductsFail
] = createAsyncActions('GET_PERFORMER_PRODUCTS');

export const gettingPerformerProduct = createAction('GETTING_PERFORMER_PRODUCTS');

export const loadMorePerformerProduct = createAction('LOAD_MORE_PERFORMER_PRODUCT');
export const purchaseProductSuccess = createAction('PURCHASE_PRODUCT_SUCCESS');
