import { merge } from 'lodash';
import { createReducers } from '@lib/redux';
import {
  IReduxAction,
  IDataResponse,
  IPerformerCategogies,
  IPerformer,
  IProduct,
  IVideo,
  IPhoto,
  IPerformerGallery
} from 'src/interfaces';
import { logout } from '@redux/auth/actions';
import { AnyARecord } from 'dns';
import {
  getPerformerCategoriesFail,
  getPerformerCategoriesSuccess,
  setPerformerSearching,
  searchPerformerSuccess,
  searchPerformerFail,
  updatePerformerProfile,
  updatePerformerProfileFail,
  updatePerformerProfileSuccess,
  setupdatingPerformerProfile,
  updateCurrentPerformer,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail,
  setGettingPerformerDetails,
  setPerformerDetails,
  setFavoritePerformerDetails,
  getMyProductsSuccess,
  getMyProductsFail,
  setGettingMyProducts,
  addMyProduct,
  removeMyProduct,
  getMyVideosSuccess,
  getMyVideosFail,
  setgettingMyVideos,
  removeMyVideo,
  addMyVideos,
  getMyPhotosSuccess,
  getMyPhotosFail,
  addMyPhotos,
  removeMyPhoto,
  setgettingMyPhotos,
  getMyGalleriesSuccess,
  getMyGalleriesFail,
  addMyGalleries,
  setgettingMyGalleries,
  updatePerformerFavourite,
  removeMyGalleries,
  getPayoutRequestSuccess,
  getEarningFail,
  getEarningSuccess,
  setGettingEarning,
  getPayoutRequestFail,
  setGettingPayoutRequest,
  updatePerformerAsset,
  updateCurrentPerformerBalance
} from './actions';

export const initialState = {
  current: {
    _id: null,
    avatar: '/no-avatar.png',
    name: '',
    steamingStatus: '',
    email: ''
  },
  earning: {
    data: [],
    stats: null,
    total: 0,
    searching: false,
    success: false,
    error: null,
    fromDate: null,
    toDate: null
  },
  payout: {
    data: [],
    total: 0,
    searching: false,
    success: false,
    error: null
  },
  assets: {
    products: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    videos: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    photos: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    galleries: {
      data: [],
      total: 0,
      searching: false,
      success: false
    }
  },
  categories: {
    data: [],
    total: 0
  },
  performers: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  performerDetails: {
    data: {
      _id: null,
      avatar: '/no-avatar.png',
      name: '',
      email: '',
      products: [],
      videos: [],
      photos: [],
      galleries: [],
      relatedPerformer: [],
      tags: [],
      categoryIds: [],
      categories: [],
      languages: []
    },
    products: {},
    videos: {},
    photos: {},
    galleries: {},
    success: false,
    searching: false,
    error: null
  },
  getCagetoriesError: null,
  updateSuccess: false,
  updating: false,
  updateError: null
};

const performerReducers = [
  {
    on: getPerformerCategoriesSuccess,
    reducer(
      state: any,
      actions: IReduxAction<IDataResponse<IPerformerCategogies>>
    ) {
      return {
        ...state,
        categories: { ...actions.payload },
        getCagetoriesError: null
      };
    }
  },
  {
    on: getPerformerCategoriesFail,
    reducer(state: any, actions: any) {
      return {
        ...state,
        getCagetoriesError: actions.payload
      };
    }
  },
  {
    on: searchPerformerSuccess,
    reducer(state: any, actions: IReduxAction<any>) {
      return {
        ...state,
        performers: {
          success: true,
          searching: false,
          error: null,
          data: actions.payload.data,
          total: actions.payload.total
        }
      };
    }
  },
  {
    on: searchPerformerFail,
    reducer(state: any, actions: any) {
      return {
        ...state,
        performers: {
          success: false,
          error: actions.payload,
          searching: false,
          data: []
        }
      };
    }
  },
  {
    on: setPerformerSearching,
    reducer(state: any) {
      return {
        ...state,
        performers: {
          ...state.performers,
          searching: true
        }
      };
    }
  },
  {
    on: updatePerformerProfile,
    reducer(state: AnyARecord) {
      return {
        ...state,
        updating: true
      };
    }
  },
  {
    on: updatePerformerProfileSuccess,
    reducer(state: any, data: IReduxAction<IPerformer>) {
      return {
        ...state,
        current: data.payload,
        updateSuccess: true,
        updating: false,
        updateError: null
      };
    }
  },
  {
    on: updatePerformerProfileFail,
    reducer(state, data) {
      return {
        ...state,
        updateSuccess: false,
        updating: false,
        updateError: data.payload
      };
    }
  },
  {
    on: setupdatingPerformerProfile,
    reducer(state) {
      return {
        ...state,
        updating: true,
        updateSuccess: false
      };
    }
  },
  {
    on: setPerformerDetails,
    reducer(state: any, action: IReduxAction<IPerformer>) {
      const { performerDetails } = state;
      performerDetails.data = { ...performerDetails.data, ...action.payload };
      return {
        ...state
      };
    }
  },
  {
    on: setFavoritePerformerDetails,
    reducer(state: any, action: IReduxAction<boolean>) {
      const { performerDetails } = state;
      const { data } = performerDetails;
      data.isFavorite = action.payload;
      return {
        ...state,
        performerDetails: { ...performerDetails }
      };
    }
  },
  {
    on: getPerformerDetailsSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      return {
        ...state,
        performerDetails: {
          data: data.payload.performer,
          products: data.payload.products,
          videos: data.payload.videos,
          photos: data.payload.photos,
          galleries: data.payload.galleries,
          searching: false,
          success: true,
          error: null
        }
      };
    }
  },
  {
    on: getPerformerDetailsFail,
    reducer(state, data) {
      return {
        ...state,
        performerDetails: {
          error: data.payload,
          success: false,
          searching: false
        }
      };
    }
  },
  {
    on: setGettingPerformerDetails,
    reducer(state) {
      return {
        ...state,
        performerDetails: {
          ...state.performerDetails,
          success: false,
          searching: true
        }
      };
    }
  },
  {
    on: getMyProductsSuccess,
    reducer(state: any, action: IReduxAction<IDataResponse<IProduct>>) {
      return {
        ...state,
        assets: {
          ...state.assets,
          products: {
            data: action.payload.data,
            total: action.payload.total,
            searching: false,
            success: true,
            error: null
          }
        }
      };
    }
  },
  {
    on: getMyProductsFail,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          products: {
            ...state.assets.products,
            searching: false,
            success: false,
            error: action.payload
          }
        }
      };
    }
  },
  {
    on: setGettingMyProducts,
    reducer(state) {
      return {
        ...state,
        assets: {
          ...state.assets,
          products: {
            ...state.assets.products,
            searching: true,
            success: false
          }
        }
      };
    }
  },
  {
    on: getEarningSuccess,
    reducer(state: any, action: IReduxAction<any>) {
      return {
        ...state,
        earning: {
          data: action.payload.data.data,
          total: action.payload.data.total,
          fromDate: action.payload.fromDate,
          toDate: action.payload.toDate,
          stats: action.payload.stats,
          searching: false,
          success: true,
          error: null
        }
      };
    }
  },
  {
    on: getEarningFail,
    reducer(state, action) {
      return {
        ...state,
        earning: {
          ...state.earning,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: setGettingEarning,
    reducer(state) {
      return {
        ...state,
        earning: {
          ...state.earning,
          searching: true,
          success: false
        }
      };
    }
  },
  {
    on: addMyProduct,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          products: {
            ...state.assets.products,
            data: [...state.assets.products.data, action.payload],
            total: state.assets.products.total + 1
          }
        }
      };
    }
  },
  {
    on: removeMyProduct,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          products: {
            ...state.assets.products,
            data: state.assets.products.data.filter(
              (product: IProduct) => product._id !== action.payload
            ),
            total: state.assets.products.total - 1
          }
        }
      };
    }
  },
  {
    on: getMyVideosSuccess,
    reducer(state: any, action: IReduxAction<IDataResponse<IVideo>>) {
      return {
        ...state,
        assets: {
          ...state.assets,
          videos: {
            data: action.payload.data,
            total: action.payload.total,
            searching: false,
            success: true,
            error: null
          }
        }
      };
    }
  },
  {
    on: getMyVideosFail,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          videos: {
            ...state.assets.videos,
            searching: false,
            success: false,
            error: action.payload
          }
        }
      };
    }
  },
  {
    on: setgettingMyVideos,
    reducer(state) {
      return {
        ...state,
        assets: {
          ...state.assets,
          videos: {
            ...state.assets.videos,
            searching: true,
            success: false
          }
        }
      };
    }
  },
  {
    on: removeMyVideo,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          videos: {
            ...state.assets.videos,
            data: state.assets.videos.data.filter(
              (video: IVideo) => video._id !== action.payload
            ),
            total: state.assets.videos.total - 1
          }
        }
      };
    }
  },
  {
    on: addMyVideos,
    reducer(state, action) {
      return {
        ...state,
        assets: {
          ...state.assets,
          videos: {
            ...state.assets.videos,
            data: [...state.assets.videos.data, ...action.payload]
          }
        }
      };
    }
  },
  {
    on: getMyPhotosSuccess,
    reducer(state: any, action: IReduxAction<IDataResponse<IPhoto>>) {
      const { assets } = state;
      assets.photos = {
        data: action.payload.data,
        total: action.payload.total,
        searching: false,
        success: true,
        error: null
      };
      return {
        ...state
      };
    }
  },
  {
    on: getMyPhotosFail,
    reducer(state, action) {
      const { assets } = state;
      assets.photos = {
        ...state.assets.photos,
        searching: false,
        success: false,
        error: action.payload
      };
      return {
        ...state
      };
    }
  },
  {
    on: setgettingMyPhotos,
    reducer(state) {
      const { assets } = state;
      assets.photos = {
        ...state.assets.photos,
        searching: true,
        success: false
      };
      return {
        ...state
      };
    }
  },
  {
    on: removeMyPhoto,
    reducer(state, action) {
      const { assets } = state;
      assets.photos = {
        ...state.assets.photos,
        data: state.assets.photos.data.filter(
          (p: IPhoto) => p._id !== action.payload
        ),
        total: state.assets.photos.total - 1
      };
      return {
        ...state
      };
    }
  },
  {
    on: addMyPhotos,
    reducer(state, action) {
      const { assets } = state;
      assets.photos = {
        ...state.assets.photos,
        data: [...state.assets.photos.data, ...action.payload]
      };
      return {
        ...state
      };
    }
  },

  // galleries
  {
    on: setgettingMyGalleries,
    reducer(state) {
      const { assets } = state;
      assets.galleries = {
        ...state.assets.galleries,
        searching: true,
        success: false
      };
      return {
        ...state
      };
    }
  },
  {
    on: getMyGalleriesSuccess,
    reducer(
      state: any,
      action: IReduxAction<IDataResponse<IPerformerGallery>>
    ) {
      const { assets } = state;
      assets.galleries = {
        data: action.payload.data,
        total: action.payload.total,
        searching: false,
        success: true,
        error: null
      };
      return {
        ...state
      };
    }
  },
  {
    on: getMyGalleriesFail,
    reducer(state, action) {
      const { assets } = state;
      assets.galleries = {
        ...state.assets.galleries,
        searching: false,
        success: false,
        error: action.payload
      };
      return {
        ...state
      };
    }
  },
  {
    on: removeMyGalleries,
    reducer(state, action) {
      const { assets } = state;
      assets.galleries = {
        ...state.assets.galleries,
        data: state.assets.galleries.data.filter(
          (p: IPhoto) => p._id !== action.payload
        ),
        total: state.assets.galleries.total - 1
      };
      return {
        ...state
      };
    }
  },
  {
    on: addMyGalleries,
    reducer(state, action) {
      const { assets } = state;
      assets.galleries = {
        ...state.assets.galleries,
        data: [...state.assets.galleries.data, ...action.payload]
      };
      return {
        ...state
      };
    }
  },
  {
    on: getPayoutRequestSuccess,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        payout: {
          data: action.payload.data,
          total: action.payload.total,
          searching: false,
          success: true,
          error: null
        }
      };
    }
  },
  {
    on: getPayoutRequestFail,
    reducer(state, action: IReduxAction<any>) {
      return {
        ...state,
        payout: {
          ...state.payout,
          searching: false,
          success: false,
          error: action.payload
        }
      };
    }
  },
  {
    on: setGettingPayoutRequest,
    reducer(state) {
      return {
        ...state,
        payout: {
          ...state.payout,
          searching: true,
          error: null
        }
      };
    }
  },

  // ======================================
  {
    on: updateCurrentPerformerBalance,
    reducer(state: any, action: IReduxAction<number>) {
      return {
        ...state,
        current: {
          ...state.current,
          balance: state.current.balance + action.payload
        }
      };
    }
  },
  {
    on: updateCurrentPerformer,
    reducer(state: any, data: IReduxAction<IPerformer>) {
      return {
        ...state,
        current: data.payload
      };
    }
  },
  {
    on: updatePerformerFavourite,
    reducer(state: any, action: IReduxAction<string>) {
      const { data } = state.performers;
      return {
        ...state,
        performers: {
          ...state.performers,
          data: data.map((d) => {
            if (d._id === action.payload) {
              return { ...d, isFavorite: !d.isFavorite };
            }

            return d;
          })
        }
      };
    }
  },
  {
    on: updatePerformerAsset,
    reducer(state: any, action: IReduxAction<any>) {
      const { type, id, payload } = action.payload;
      const { performerDetails } = state;
      if (type === 'gallery') {
        const { galleries } = performerDetails;
        return {
          ...state,
          performerDetails: {
            ...performerDetails,
            galleries: { ...galleries, [id]: { ...galleries[id], ...payload } }
          }
        };
      }
      if (type === 'product') {
        const { products } = performerDetails;
        return {
          ...state,
          performerDetails: {
            ...performerDetails,
            products: { ...products, [id]: { ...products[id], ...payload } }
          }
        };
      }

      return {
        ...state
      };
    }
  },
  {
    on: logout,
    reducer(state) {
      return {
        ...initialState,
        performers: state.performers,
        categories: state.categories
      };
    }
  }
];
export default merge(
  {},
  createReducers('performer', [performerReducers], initialState)
);
