import 'antd/dist/antd.min.css';
import { Fragment, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ADMIN_ROUTES, LOGIN_ROUTES } from './routes';
import './scss/style.scss';

const App: React.FC = () => {
  const [loginRoute, setLoginRoute] = useState([] as any);
  const [menuAdminRoute, setMenuAdminRoute] = useState([] as any);
  const userStorage: Array<string> = JSON.parse(sessionStorage.getItem('user') || '{}');

  useEffect(() => {
    setLoginRoute(LOGIN_ROUTES);
  }, []);

  useEffect(() => {
    setMenuAdminRoute(ADMIN_ROUTES);
  }, []);

  const renderAdminRoute = (menuAdminRoute: string[]) => {
    let result = null;
    if (menuAdminRoute.length > 0) {
      result = menuAdminRoute.map((route: any, index: number) => {
        return (
          <Route key={index} path="/" element={<AdminLayout />}>
            <Route path={route.path} element={userStorage ? route.main : <LoginPage />} />
          </Route>
        );
      });
    }
    return result;
  };

  const renderLoginRoute = (loginRoute: string[]) => {
    let result = null;
    if (loginRoute.length > 0) {
      result = loginRoute.map((route: any, index: number): any => {
        return (
          <Route path="/" key={index}>
            <Route path={route.path} element={userStorage ? route.main : <LoginPage />} />
          </Route>
        );
      });
    }
    return result;
  };

  const AdminLayout = () => {
    return (
      <>
        <div className="wrap-admin">
          <Outlet />
        </div>
      </>
    );
  };

  return (
    <Fragment>
      <div className="App">
        <Routes>
          {renderAdminRoute(menuAdminRoute)}
          {renderLoginRoute(loginRoute)}
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
