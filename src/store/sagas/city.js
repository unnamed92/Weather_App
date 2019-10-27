import { put, takeLatest, call } from 'redux-saga/effects';
import { types, getCitySuccess, getCityFail } from '../actions/city';
import axios from 'axios';

const apikey = 'qy6mSOjHAomfYh931j68FM3Q403BIn9q';

function* getCitySaga(params) {
  const { data } = params;

  function fetchCity() {
    return axios({
      method: 'get',
      url: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${data}`
    });
  }

  try {
    const cityResponse = yield call(fetchCity, data);
    yield put(
      getCitySuccess({
        data: cityResponse.data
      })
    );
  } catch (error) {
    console.log(error);
    yield put(getCityFail());
  }
}

function* watchGetCitySaga() {
  yield takeLatest(types.GET_CITY.REQUEST, getCitySaga);
}

export { watchGetCitySaga };
