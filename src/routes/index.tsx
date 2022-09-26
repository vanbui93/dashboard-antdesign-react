import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

interface Route {
  path: string;
  main: JSX.Element;
}
export const ADMIN_ROUTES: () => Route[] = () => [
  {
    path: '/admin/main',
    main: <MainPage />
  }
];

export const LOGIN_ROUTES: () => Route[] = () => [
  {
    path: '/admin',
    main: <LoginPage />
  }
];
