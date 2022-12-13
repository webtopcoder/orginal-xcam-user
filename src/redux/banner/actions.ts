import { createAsyncAction } from '@lib/redux';

export const {
  getBanners,
  getBannersSuccess,
  getBannersFail
} = createAsyncAction('getBanners', 'GET_BANNERS');
