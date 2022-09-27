import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import Products from '../pages/Products';
import { IRoute } from '../types';

export const ADMIN_ROUTES: () => IRoute[] = () => [
  {
    path: '/admin/main',
    main: <MainPage />
  },
  {
    path: '/admin/products',
    main: <Products />
  }
];

export const LOGIN_ROUTES: () => IRoute[] = () => [
  {
    path: '/admin',
    main: <LoginPage />
  }
];
