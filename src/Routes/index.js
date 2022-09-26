import LoginPage from 'Admin/LoginPage';

export const ADMIN_ROUTES = () => [];

export const LOGIN_ROUTES = () => [
  {
    path: '/admin',
    exact: true,
    main: <LoginPage />
  }
];
