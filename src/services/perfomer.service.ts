import {
  IPerformer,
  ICreatePerformerProductPayload,
  IUpdatePerformerProductPayload
} from 'src/interfaces';
import { isUrl } from '@lib/string';
import { omit } from 'lodash';
import cookie from 'js-cookie';

import { APIRequest, IResponse, TOKEN } from './api-request';
import { getGlobalConfig } from './config';

export class PerformerService extends APIRequest {
  me(headers?: { [key: string]: string }): Promise<IResponse<IPerformer>> {
    return this.get('/performers/me', headers);
  }

  updateMe(payload: any) {
    return this.put('/performers', payload);
  }

  search(query?: { [key: string]: any }) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username: string, headers = {}): Promise<IResponse<IPerformer>> {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    const config = getGlobalConfig();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    const config = getGlobalConfig();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    const config = getGlobalConfig();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/release-form/upload`;
  }

  myProduct(query?: { [key: string]: any }) {
    return this.get(
      this.buildUrl('/performer/performer-assets/products/search', query)
    );
  }

  createProduct(
    url: string,
    data: ICreatePerformerProductPayload,
    options: { onProgress: Function } = {
      onProgress() {}
    }
  ): Promise<IResponse<any>> {
    const config = getGlobalConfig();
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: (event.loaded / event.total) * 100
          });
        }
      });

      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const { response } = req;
        if (!success) {
          return reject(response);
        }
        return resolve(response);
      });

      req.upload.addEventListener('error', () => {
        reject(req.response);
      });

      const formData = new FormData();
      // formData.append('file', file, file.name);
      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(omit(data, ['image', 'digitalFile'])).forEach((v) => {
        formData.append(v, data[v]);
      });

      req.responseType = 'json';
      req.open('POST', isUrl(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);

      const token: any = cookie.get(TOKEN);
      if (token) {
        req.setRequestHeader('Authorization', token);
      }
      req.send(formData);
    });
  }

  updateProduct(
    url: string,
    data: IUpdatePerformerProductPayload,
    options: { onProgress: Function } = {
      onProgress() {}
    }
  ): Promise<IResponse<any>> {
    const config = getGlobalConfig();
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: (event.loaded / event.total) * 100
          });
        }
      });

      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const { response } = req;
        if (!success) {
          return reject(response);
        }
        return resolve(response);
      });

      req.upload.addEventListener('error', () => {
        reject(req.response);
      });

      const formData = new FormData();
      // formData.append('file', file, file.name);
      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(omit(data, ['image', 'digitalFile'])).forEach((v) => {
        formData.append(v, data[v]);
      });

      req.responseType = 'json';
      req.open('PUT', isUrl(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);

      const token: any = cookie.get(TOKEN);
      if (token) {
        req.setRequestHeader('Authorization', token);
      }
      req.send(formData);
    });
  }

  removeProduct(id: string) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload): Promise<IResponse<IPerformer>> {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload): Promise<IResponse<IPerformer>> {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload): Promise<IResponse<IPerformer>> {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload): Promise<IResponse<IPerformer>> {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload: {
    status: string;
  }): Promise<IResponse<IPerformer>> {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload: {userIds?: string[], countries?: string[]}): Promise<IResponse<any>> {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList(): Promise<IResponse<any>> {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload): Promise<IResponse<IPerformer>> {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload): Promise<IResponse<any>> {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(password: string) {
    return this.post('/performers/suspend-account', { password });
  }

  checkBlock(performerId: string) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }
}

export const GENNDER_PERFORMER = ['female', 'transgender', 'male'];

export const performerService = new PerformerService();
