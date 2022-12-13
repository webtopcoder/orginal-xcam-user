import { createReducers } from '@lib/redux';
import { merge } from 'lodash';
import { IReduxAction, IDataResponse, IPerformerGallery } from 'src/interfaces';
import {
  gettingPerformerGalleries,
  getPerformerGalleriesSuccess,
  getPerformerGalleriesFail,
  addPerformerGalleries,
  purchaseGallerySuccess
} from './actions';

const initialGalleiresState = {
  error: null,
  data: {},
  ids: [],
  total: 0,
  success: false,
  searching: false
};
const galleryReducers = [
  {
    on: gettingPerformerGalleries,
    reducer() {
      return {
        ...initialGalleiresState,
        searching: true
      };
    }
  },
  {
    on: getPerformerGalleriesSuccess,
    reducer(state, action: IReduxAction<IDataResponse<IPerformerGallery>>) {
      return {
        ...state,
        ...action.payload,
        error: null,
        success: true,
        searching: false
      };
    }
  },
  {
    on: getPerformerGalleriesFail,
    reducer(state, action: IReduxAction<IDataResponse<any>>) {
      return {
        ...state,
        error: action.payload,
        success: false,
        searching: false
      };
    }
  },
  {
    on: addPerformerGalleries,
    reducer(state, action: IReduxAction<IPerformerGallery[]>) {
      const { ids, data } = state;
      const galleries = action.payload;
      galleries.forEach((g) => {
        data[g._id] = g;
        ids.push(g._id);
      });
      return {
        ...state
      };
    }
  },
  {
    on: purchaseGallerySuccess,
    reducer(state, action: IReduxAction<string>) {
      const { data } = state;
      data[action.payload].isBought = true;
      return { ...state };
    }
  }
];
export default merge(
  {},
  createReducers('galleries', [galleryReducers], initialGalleiresState)
);
