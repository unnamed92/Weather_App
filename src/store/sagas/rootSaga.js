import { all } from 'redux-saga/effects';

import {
  watchGetWeatherSaga,
  watchGetForecastSaga,
  watchGetFavoritiesSaga
} from './weather';
import { watchGetCitySaga } from './city';

export default function* rootSaga() {
  yield all([
    watchGetWeatherSaga(),
    watchGetCitySaga(),
    watchGetForecastSaga(),
    watchGetFavoritiesSaga()
  ]);
}
