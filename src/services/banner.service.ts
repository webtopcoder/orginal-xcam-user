import { IBannerSearch } from 'src/interfaces';
import { APIRequest } from './api-request';

export class BannerService extends APIRequest {
  search(query: IBannerSearch) {
    return this.get(this.buildUrl('/banners/search', query as any));
  }
}

export const bannerService = new BannerService();
