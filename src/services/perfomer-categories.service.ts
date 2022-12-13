import { APIRequest } from './api-request';

export class PerformerCategoriesService extends APIRequest {
  getList(query?: { [key: string]: any }) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id: string) {
    return this.get(`/performer-categories/${id}/view`);
  }
}

export const performerCategories = new PerformerCategoriesService();
