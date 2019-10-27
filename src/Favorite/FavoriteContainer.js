import { connect } from 'react-redux';

import Favorite from './Favorite';
import { getFavoritiesRequest } from '../store/actions/weather';

const mapStateToProps = state => ({
  favorities: state.city && state.city.favorities,
  favoritiesWeather: state.weather.favoritiesWeather
});

export default connect(
  mapStateToProps,
  {
    getFavoritiesRequest
  }
)(Favorite);
