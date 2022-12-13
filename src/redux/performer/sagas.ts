/* eslint-disable no-return-assign */
import { createSagas } from '@lib/redux';
import { flatten, omit } from 'lodash';
import { put, all, select } from 'redux-saga/effects';
import {
  IReduxAction,
  IResponse,
  IPerformSearch,
  IPerformer,
  IPerformerPaymentInfoUpdate,
  IDataResponse,
  IProduct,
  IVideo,
  IPerformerDirectDeposit,
  IPerformerBitpay,
  IPerformerPaxum,
  IPerformerGallery,
  IPerformerDefaultPrice
} from 'src/interfaces';
import {
  performerCategories,
  performerService,
  videoService,
  productService,
  galleryService,
  earningService,
  payoutRequestService
} from 'src/services';
import { IPhoto } from 'src/interfaces/photo';
import { photoService } from '@services/photo.service';
import {
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail,
  getPerformerCategories,
  searchPerformer,
  searchPerformerFail,
  searchPerformerSuccess,
  setPerformerSearching,
  updatePerformerProfile,
  updatePerformerProfileFail,
  updatePerformerProfileSuccess,
  setupdatingPerformerProfile,
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail,
  setGettingPerformerDetails,
  getMyVideos,
  getMyVideosFail,
  getMyVideosSuccess,
  setgettingMyVideos,
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail,
  setGettingMyProducts,
  getEarning,
  getEarningFail,
  getEarningSuccess,
  setGettingEarning,
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail,
  setgettingMyPhotos,
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail,
  setgettingMyGalleries,
  updatePaymentInfo,
  updateDirectDeposit,
  updateBitpay,
  updatePaxum,
  updateStreamingStatus,
  updateDefaultPrice,
  getPayoutRequest,
  setGettingPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} from './actions';

const performerSaga = [
  {
    on: getPerformerCategories,
    * worker(data: IReduxAction<any>) {
      try {
        const resp: IResponse<any> = yield performerCategories.getList(
          data.payload
        );

        yield put(getPerformerCategoriesSuccess(resp.data));
      } catch (err) {
        const error = yield Promise.resolve(err);
        yield put(getPerformerCategoriesFail(error));
      }
    }
  },
  {
    on: searchPerformer,
    * worker(action: IReduxAction<IPerformSearch>) {
      try {
        yield put(setPerformerSearching());
        const resp: IResponse<IDataResponse<
          IPerformer
        >> = yield performerService.search(action.payload);
        const currentPerformer = yield select(
          (state) => state.performer.current
        );
        const data = resp.data.data.filter((p) => p._id !== currentPerformer._id);
        const total = currentPerformer?._id ? resp.data.total - 1 : resp.data.total;
        yield put(searchPerformerSuccess({ data, total }));
      } catch (err) {
        const error = yield Promise.resolve(err);
        yield put(searchPerformerFail(error));
      }
    }
  },
  {
    on: updatePerformerProfile,
    * worker(data: IReduxAction<any>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updateMe(
          data.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
        // if this is current user, reload user info?
      } catch (e) {
        // TODO - alert error
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: getPerformerDetails,
    * worker(data: IReduxAction<IPerformer>) {
      try {
        yield put(setGettingPerformerDetails());
        const [
          performerResponse,
          performerProductReponse,
          performerVideoResponse,
          performerGalleryResponse,
          relatedPerformerResponse
        ]: [
          IResponse<IPerformer>,
          IResponse<IDataResponse<IProduct>>,
          IResponse<IDataResponse<IVideo>>,
          IResponse<IDataResponse<IPerformerGallery>>,
          IResponse<IDataResponse<IPerformer>>
        ] = yield all([
          performerService.details(data.payload.username),
          productService.search({
            performerId: data.payload._id,
            status: 'active'
          }),
          videoService.search({
            performerId: data.payload._id,
            status: 'active'
          }),
          galleryService.search(
            {
              performerId: data.payload._id,
              status: 'active'
            },
            false
          ),
          performerService.search({ status: 'active', excludedId: data.payload._id, limit: 12 })
        ]);
        const products: Record<string, IProduct> = {};
        const videos: Record<string, IVideo> = {};
        const galleries: Record<string, IPerformerGallery> = {};
        performerProductReponse.data.data.forEach((p) => (products[p._id] = p));
        performerVideoResponse.data.data.forEach((v) => (videos[v._id] = v));
        performerGalleryResponse.data.data.forEach(
          (g) => (galleries[g._id] = g)
        );
        yield put(
          getPerformerDetailsSuccess({
            performer: {
              ...performerResponse.data,
              products: performerProductReponse.data.data.map((p) => p._id),
              videos: performerVideoResponse.data.data.map((v) => v._id),
              galleries: performerGalleryResponse.data.data.map((g) => g._id),
              relatedPerformers: relatedPerformerResponse.data.data
            },
            // photos,
            videos,
            products,
            galleries
          })
        );
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getPerformerDetailsFail(err));
      }
    }
  },
  {
    on: getMyProducts,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingMyProducts());
        const resp: IResponse<IDataResponse<
          IProduct
        >> = yield performerService.myProduct(action.payload);
        yield put(getMyProductsSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMyProductsFail(err));
      }
    }
  },
  {
    on: getEarning,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingEarning());
        let difDateQuery = false;
        const earning = yield select((state) => state.performer.earning);
        const { fromDate, toDate } = action.payload;
        const query = omit(action.payload, ['fromDate', 'toDate']);
        if (fromDate && toDate) {
          query.fromDate = fromDate;
          query.toDate = toDate;
        }

        if (earning.toDate !== toDate || earning.fromDate !== fromDate) difDateQuery = true;

        const [resp, stats] = yield all([
          earningService.search(query),
          earning.stats && !difDateQuery
            ? earning.stats
            : earningService.stats(query)
        ]);
        yield put(getEarningSuccess({ ...query, stats, data: resp.data }));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getEarningFail(err));
      }
    }
  },
  {
    on: getPayoutRequest,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setGettingPayoutRequest());
        const [resp] = yield all([payoutRequestService.search(action.payload)]);
        yield put(getPayoutRequestSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getPayoutRequestFail(err));
      }
    }
  },
  {
    on: getMyVideos,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setgettingMyVideos());
        const resp: IResponse<IDataResponse<
          IVideo
        >> = yield videoService.myVideos(action.payload);
        yield put(getMyVideosSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMyVideosFail(err));
      }
    }
  },
  {
    on: getMyPhotos,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setgettingMyPhotos());
        const resp: IResponse<IDataResponse<
          IPhoto
        >> = yield photoService.myPhotos(action.payload);
        yield put(getMyPhotosSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMyPhotosFail(err));
      }
    }
  },
  {
    on: getMyGalleries,
    * worker(action: IReduxAction<any>) {
      try {
        yield put(setgettingMyGalleries());
        const resp: IResponse<IDataResponse<
          IPhoto
        >> = yield galleryService.search(action.payload);
        yield put(getMyGalleriesSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(getMyGalleriesFail(err));
      }
    }
  },
  {
    on: updatePaymentInfo,
    * worker(action: IReduxAction<IPerformerPaymentInfoUpdate>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updatePaymentInfo(
          action.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: updateDirectDeposit,
    * worker(action: IReduxAction<IPerformerDirectDeposit>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updateDirectDepost(
          action.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: updateBitpay,
    * worker(action: IReduxAction<IPerformerBitpay>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updateBitpay(
          action.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: updatePaxum,
    * worker(action: IReduxAction<IPerformerPaxum>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updatePaxum(
          action.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: updateStreamingStatus,
    * worker(action: IReduxAction<string>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updateStreamingStatus(
          { status: action.payload }
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  },
  {
    on: updateDefaultPrice,
    * worker(action: IReduxAction<IPerformerDefaultPrice>) {
      try {
        yield put(setupdatingPerformerProfile());
        const resp: IResponse<IPerformer> = yield performerService.updateDefaultPrice(
          action.payload
        );
        yield put(updatePerformerProfileSuccess(resp.data));
      } catch (e) {
        const err = yield Promise.resolve(e);
        yield put(updatePerformerProfileFail(err));
      }
    }
  }
];

export default flatten([createSagas(performerSaga)]);
