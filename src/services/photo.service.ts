import { omit } from 'lodash';
import { isUrl } from '@lib/string';
import cookie from 'js-cookie';
import { TOKEN } from 'src/services/api-request';
import {
  IResponse,
  IPerformerPhotoPayload,
  IDataResponse,
  IPhoto
} from 'src/interfaces';
import { APIRequest } from './api-request';
import { getGlobalConfig } from './config';

export class PhotoService extends APIRequest {
  search(params?: {
    [key: string]: string;
  }): Promise<IResponse<IDataResponse<IPhoto>>> {
    return this.get(
      this.buildUrl('/performer/performer-assets/photos/search', params)
    );
  }

  searchByGallery(
    galleryId: string,
    params?: {
      [key: string]: any;
    },
    headers?: Record<string, any>
  ) {
    return this.get(
      this.buildUrl(
        `/user/performer-assets/photos/${galleryId}/search`,
        params
      ),
      headers
    );
  }

  details(id: string, headers?: { [key: string]: string }) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query?: { [key: string]: any }) {
    return this.get(
      this.buildUrl('/performer/performer-assets/photos/search', query)
    );
  }

  remove(id: string) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(
    url: string,
    data: IPerformerPhotoPayload,
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
      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(omit(data, ['photo'])).forEach((v) => {
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

  update(
    url: string,
    data: IPerformerPhotoPayload,
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
      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(omit(data, ['photo'])).forEach((v) => {
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

  uploadImages(file: File, payload: any, onProgress?: Function) {
    return this.upload(
      '/performer/performer-assets/photos/upload',
      [
        {
          fieldname: 'photo',
          file
        }
      ],
      {
        onProgress,
        customData: payload
      }
    );
  }
}

export const photoService = new PhotoService();
