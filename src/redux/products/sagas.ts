import { getResponseError } from 'src/lib';
import { IResponse } from 'src/services/api-request';
import { createSagas } from '@lib/redux';
import { IReduxAction, IDataResponse, IProduct } from 'src/interfaces';
import { productService } from '@services/product.service';
import { flatten } from 'lodash';
import { put } from 'redux-saga/effects';
import {
  getPerformerProducts,
  getPerformerProductsSuccess,
  getPerformerProductsFail,
  gettingPerformerProduct
} from './actions';

const productSagas = [
  {
    on: getPerformerProducts,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(gettingPerformerProduct());
        const resp:IResponse<IDataResponse<IProduct>> = yield productService.search(action.payload);
        const products = resp.data.data;
        const ids = products.map((p) => p._id);
        const data = products.length && (products.length > 1 ? products.reduce((previousValue, currentValue, index) => {
          if (index === 1) {
            return { [previousValue._id]: previousValue, [currentValue._id]: currentValue };
          }

          const value = { ...previousValue };
          value[currentValue._id] = currentValue;
          return value;
        }) : { [products[0]._id]: products[0] });

        yield put(getPerformerProductsSuccess({
          data,
          total: resp.data.total,
          ids
        }));
      } catch (error) {
        const err = getResponseError(error);
        yield put(getPerformerProductsFail(err));
      }
    }
  }
];

export default flatten([createSagas(productSagas)]);
