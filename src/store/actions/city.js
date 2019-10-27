export const types = {
  GET_CITY: {
    REQUEST: 'GET_CITY.REQUEST',
    SUCCESS: 'GET_CITY.SUCCESS',
    FAIL: 'GET_CITY.FAIL'
  },
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE'
};

const getCityRequest = data => ({
  type: types.GET_CITY.REQUEST,
  data
});

const getCitySuccess = data => ({
  type: types.GET_CITY.SUCCESS,
  ...data
});

const getCityFail = () => ({
  type: types.GET_CITY.FAIL
});

const addToFavorite = data => ({
  type: types.ADD_TO_FAVORITE,
  data
});

export { getCityRequest, getCitySuccess, getCityFail, addToFavorite };
