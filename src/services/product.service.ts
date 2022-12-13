import { APIRequest } from './api-request';

export class ProductService extends APIRequest {
  details(id: string, headers?: { [key: string]: string; }) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params?: { [key: string]: any }) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params?: { [key: string]: any }) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id: string) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }
}

export const productService = new ProductService();
