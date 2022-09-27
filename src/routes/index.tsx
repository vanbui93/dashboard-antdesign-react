import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import Products from '../pages/Products';
import { IRoute } from '../types';

export const ADMIN_ROUTES: () => IRoute[] = () => [
  {
    path: '/dashboard',
    main: <MainPage />
  },
  {
    path: '/products',
    main: <Products />
  }
];

export const LOGIN_ROUTES: () => IRoute[] = () => [
  {
    path: '/login',
    main: <LoginPage />
  }
];
