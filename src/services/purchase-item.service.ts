import { APIRequest } from './api-request';

export class PurchaseItemService extends APIRequest {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id: string, type: string, data?: any) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id: string) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id: string) {
    return this.post(`/purchase-items/video/${id}`);
  }
}

export const purchaseItemService = new PurchaseItemService();
