import { types } from '../actions/weather';

const initialState = {};

export default function lang(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_WEATHER.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case types.GET_WEATHER.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentWeather: action.data
      };
    case types.GET_WEATHER.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Something went wrong!'
      };
    case types.GET_FORECAST.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case types.GET_FORECAST.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        forecast: action.data
      };
    case types.GET_FORECAST.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Something went wrong!'
      };
    case types.GET_FAVORITIES.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case types.GET_FAVORITIES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        favoritiesWeather: action.data
      };
    case types.GET_FAVORITIES.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Something went wrong!'
      };
    default:
      return state;
  }
}
