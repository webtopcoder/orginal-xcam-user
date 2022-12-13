import { put, select } from 'redux-saga/effects';
import { createSagas } from '@lib/redux';
import { IResponse } from 'src/interfaces';
import { settingService } from 'src/services';
import { flatten } from 'lodash';
import { getCountries, updateSettings } from './actions';

const settingSagas = [
  {
    on: getCountries,
    * worker() {
      try {
        const countries = yield select((state) => state.settings.countries);
        if (countries && countries.length) return;
        const resp: IResponse<any> = yield settingService.getCountries();
        yield put(updateSettings({ countries: resp.data }));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
  }
];

export default flatten([createSagas(settingSagas)]);
