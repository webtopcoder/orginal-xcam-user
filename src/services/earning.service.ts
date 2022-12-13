import { APIRequest } from './api-request';

class EarningService extends APIRequest {
  search(params?: { [key: string]: string }, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params?: { [key: string]: string }, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }
}

export const earningService = new EarningService();
