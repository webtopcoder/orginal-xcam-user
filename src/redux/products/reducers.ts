import { merge } from 'lodash';
import { IProduct, IReduxAction, IDataResponse } from 'src/interfaces';
import { createReducers } from '@lib/redux';
import {
  gettingPerformerProduct,
  getPerformerProductsSuccess,
  getPerformerProductsFail,
  loadMorePerformerProduct,
  purchaseProductSuccess
} from './actions';

const initialProductState = {
  data: {},
  total: 0,
  error: null,
  searching: false,
  success: false,
  ids: []
};

const productReducers = [
  {
    on: gettingPerformerProduct,
    reducer() {
      return {
        ...initialProductState,
        searching: true
      };
    }
  },
  {
    on: getPerformerProductsSuccess,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        ids: action.payload.ids,
        error: null,
        searching: false,
        success: true
      };
    }
  },
  {
    on: getPerformerProductsFail,
    reducer(_, action: IReduxAction<IDataResponse<any>>) {
      return {
        data: null,
        error: action.payload.data,
        searching: false,
        success: false
      };
    }
  },
  {
    on: loadMorePerformerProduct,
    reducer(state, action: IReduxAction<IProduct[]>) {
      const { ids, data } = state;
      const products = action.payload;
      products.forEach((p) => {
        data[p._id] = p;
        ids.push(p._id);
      });
      return {
        ...state
      };
    }
  },
  {
    on: purchaseProductSuccess,
    reducer(state, action: IReduxAction<string>) {
      const { data } = state;
      data[action.payload].isBought = true;
      return { ...state };
    }
  }
];

export default merge(
  {},
  createReducers('product', [productReducers], initialProductState)
);
