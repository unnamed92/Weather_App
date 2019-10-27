import { put, takeLatest, call } from 'redux-saga/effects';
import {
  types,
  getWeatherSuccess,
  getWeatherFail,
  getForecastSuccess,
  getForecastFail,
  getFavoritiesSuccess,
  getFavoritiesFail
} from '../actions/weather';
import axios from 'axios';

const apikey = 'qy6mSOjHAomfYh931j68FM3Q403BIn9q';

function* getWeatherSaga(params) {
  const { data } = params;
  function fetchWeather() {
    return axios({
      method: 'get',
      url: `http://dataservice.accuweather.com/currentconditions/v1/${data}?apikey=${apikey}`
    });
  }

  try {
    const weatherResponse = yield call(fetchWeather, data);
    yield put(
      getWeatherSuccess({
        data: weatherResponse.data['0']
      })
    );
  } catch (error) {
    console.log(error);
    yield put(getWeatherFail());
  }
}

function* getForecastSaga(params) {
  const { data } = params;
  function fetchWeather() {
    return axios({
      method: 'get',
      url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data}?apikey=${apikey}`
    });
  }

  try {
    const weatherResponse = yield call(fetchWeather, data);
    yield put(
      getForecastSuccess({
        data: weatherResponse.data.DailyForecasts
      })
    );
  } catch (error) {
    console.log(error);
    yield put(getForecastFail());
  }
}

function* getFavoritiesSaga(params) {
  const { data } = params;
  function fetchWeather() {
    return axios({
      method: 'get',
      url: `http://dataservice.accuweather.com/currentconditions/v1/${data}?apikey=${apikey}`
    });
  }

  try {
    const favoriteweatherResponse = yield call(fetchWeather, data);
    console.log('favoriteweatherResponse', favoriteweatherResponse);
    yield put(
      getFavoritiesSuccess({
        data: favoriteweatherResponse.data
      })
    );
  } catch (error) {
    console.log(error);
    yield put(getFavoritiesFail());
  }
}

function* watchGetWeatherSaga() {
  yield takeLatest(types.GET_WEATHER.REQUEST, getWeatherSaga);
}

function* watchGetForecastSaga() {
  yield takeLatest(types.GET_FORECAST.REQUEST, getForecastSaga);
}

function* watchGetFavoritiesSaga() {
  yield takeLatest(types.GET_FAVORITIES.REQUEST, getFavoritiesSaga);
}

export { watchGetWeatherSaga, watchGetForecastSaga, watchGetFavoritiesSaga };
