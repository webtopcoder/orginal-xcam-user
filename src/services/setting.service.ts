import { ISetting, ICountries } from 'src/interfaces';
import { APIRequest, IResponse } from './api-request';

export class SettingService extends APIRequest {
  all(group = ''): Promise<IResponse<ISetting>> {
    return this.get(this.buildUrl('/settings/public', { group }));
  }

  getCountries(): Promise<IResponse<ICountries[]>> {
    return this.get('/countries/list');
  }

  getTimezones(): Promise<IResponse<string[]>> {
    return this.get('/timezones/list');
  }
}

export const settingService = new SettingService();
