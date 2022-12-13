import { APIRequest } from './api-request';

export class RefundRequestService extends APIRequest {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params?: { [key: string]: any }) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }
}

export const refundRequestService = new RefundRequestService();
