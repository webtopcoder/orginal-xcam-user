import { APIRequest } from './api-request';

export class TokenPackageService extends APIRequest {
  search(params?: { [key: string]: string }) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id: string) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }
}

export const tokenPackageService = new TokenPackageService();
