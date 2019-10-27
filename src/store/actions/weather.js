export const types = {
  GET_WEATHER: {
    REQUEST: 'GET_WEATHER.REQUEST',
    SUCCESS: 'GET_WEATHER.SUCCESS',
    FAIL: 'GET_WEATHER.FAIL'
  },
  GET_FORECAST: {
    REQUEST: 'GET_FORECAST.REQUEST',
    SUCCESS: 'GET_FORECAST.SUCCESS',
    FAIL: 'GET_FORECAST.FAIL'
  },
  GET_FAVORITIES: {
    REQUEST: 'GET_FAVORITIES.REQUEST',
    SUCCESS: 'GET_FAVORITIES.SUCCESS',
    FAIL: 'GET_FAVORITIES.FAIL'
  }
};

const getWeatherRequest = data => ({
  type: types.GET_WEATHER.REQUEST,
  data
});

const getWeatherSuccess = data => ({
  type: types.GET_WEATHER.SUCCESS,
  ...data
});

const getWeatherFail = () => ({
  type: types.GET_WEATHER.FAIL
});

const getForecastRequest = data => ({
  type: types.GET_FORECAST.REQUEST,
  data
});

const getForecastSuccess = data => ({
  type: types.GET_FORECAST.SUCCESS,
  ...data
});

const getForecastFail = () => ({
  type: types.GET_FORECAST.FAIL
});

const getFavoritiesRequest = data => ({
  type: types.GET_FAVORITIES.REQUEST,
  data
});

const getFavoritiesSuccess = data => ({
  type: types.GET_FAVORITIES.SUCCESS,
  ...data
});

const getFavoritiesFail = () => ({
  type: types.GET_FAVORITIES.FAIL
});

export {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherFail,
  getForecastRequest,
  getForecastSuccess,
  getForecastFail,
  getFavoritiesRequest,
  getFavoritiesSuccess,
  getFavoritiesFail
};
