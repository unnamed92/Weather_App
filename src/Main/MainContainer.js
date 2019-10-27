import { connect } from 'react-redux';

import Main from './Main';
import {
  getWeatherRequest,
  getForecastRequest
} from '../store/actions/weather';
import { getCityRequest, addToFavorite } from '../store/actions/city';

const mapStateToProps = state => ({
  currentWeather: state.weather.currentWeather,
  forecast: state.weather.forecast,
  city: state.city
});

export default connect(
  mapStateToProps,
  {
    getWeatherRequest,
    getCityRequest,
    getForecastRequest,
    addToFavorite
  }
)(Main);
