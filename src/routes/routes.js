import MainContainer from '../Main/MainContainer';
import FavoriteContainer from '../Favorite/FavoriteContainer';

const routes = [
  {
    path: '/',
    component: MainContainer,
    exact: true
  },
  {
    path: '/favorites',
    component: FavoriteContainer,
    exact: true
  }
];

export default routes;
