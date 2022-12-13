import { IResponse, IPerformerVideoPayload } from 'src/interfaces';
import { TOKEN } from 'src/services/api-request';
import { omit } from 'lodash';
import { isUrl } from '@lib/string';
import cookie from 'js-cookie';
import { APIRequest } from './api-request';
import { getGlobalConfig } from './config';

export class VideoService extends APIRequest {
  search(params?: { [key: string]: any }) {
    return this.get(
      this.buildUrl('/user/performer-assets/videos/search', params)
    );
  }

  purchased(params?: { [key: string]: any }) {
    return this.get(
      this.buildUrl('/purchased-items/user/videos', params)
    );
  }

  details(id: string, headers?: { [key: string]: string }) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query?: { [key: string]: any }) {
    return this.get(
      this.buildUrl('/performer/performer-assets/videos/search', query)
    );
  }

  removeMyVideo(id: string) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(
    url: string,
    data: IPerformerVideoPayload,
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
      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(omit(data, ['video', 'thumbnail', 'trailer'])).forEach(
        (v) => {
          formData.append(v, data[v]);
        }
      );

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
    data: IPerformerVideoPayload,
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
      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(omit(data, ['video', 'thumbnail', 'trailer'])).forEach((v) => {
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

  increaseView(id: string) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  }

  // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }
  userFindVideoById(id: string, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }
}

export const videoService = new VideoService();
