import { types } from '../actions/city';

const initialState = {
  loading: false,
  error: false,
  cities: [],
  favorities: []
};

export default function lang(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CITY.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case types.GET_CITY.SUCCESS:
      return {
        loading: false,
        error: false,
        cities: action.data
      };
    case types.GET_CITY.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Wrooong!'
      };
    case types.ADD_TO_FAVORITE:
      return {
        ...state,
        favorities: state.favorities.concat([action.data])
      };
    default:
      return state;
  }
}
