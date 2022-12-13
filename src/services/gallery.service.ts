import { IResponse, IDataResponse, IPerformerGallery } from 'src/interfaces';
import { APIRequest } from './api-request';

export class GalleryService extends APIRequest {
  search(
    params?: { [key: string]: any },
    isPerformer = true
  ): Promise<IResponse<IDataResponse<IPerformerGallery>>> {
    return this.get(
      this.buildUrl(
        isPerformer
          ? '/performer/performer-assets/galleries/search'
          : '/user/performer-assets/galleries/search',
        params
      )
    );
  }

  purchased(params?: {
    [key: string]: any;
  }): Promise<IResponse<IDataResponse<IPerformerGallery>>> {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id: string, headers?: { [key: string]: string }) {
    return this.get(
      `/performer/performer-assets/galleries/${id}/view`,
      headers
    );
  }

  publicdetails(id: string, headers?: { [key: string]: string }) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id: string) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }
}

export const galleryService = new GalleryService();
