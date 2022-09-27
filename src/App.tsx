import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import { Content } from 'antd/lib/layout/layout';
import { Fragment, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import HeaderAdmin from './components/HeaderAdmin';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import { ADMIN_ROUTES, LOGIN_ROUTES } from './routes';
import './scss/style.scss';
import * as uiActions from './stores/actions/ui';
import { RootState, useAppDispatch, useAppSelector } from './stores/configureStore';
import { IRoute } from './types';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const opensidebar = useAppSelector((state: RootState) => state.ui.opensidebar);

  const [loginRoute, setLoginRoute] = useState([] as IRoute[]);
  const [menuAdminRoute, setMenuAdminRoute] = useState([] as IRoute[]);

  const userStorage: Array<string> = JSON.parse(sessionStorage.getItem('user') || '{}');

  useEffect(() => {
    setLoginRoute(LOGIN_ROUTES);
  }, []);

  useEffect(() => {
    setMenuAdminRoute(ADMIN_ROUTES);
  }, []);

  const renderAdminRoute = (menuAdminRoute: IRoute[]) => {
    let result = null;
    if (menuAdminRoute.length > 0) {
      result = menuAdminRoute.map((route, index) => {
        return (
          <Route key={index} path="/" element={<AdminLayout />}>
            <Route path={route.path} element={userStorage ? route.main : <LoginPage />} />
          </Route>
        );
      });
    }
    return result;
  };

  const renderLoginRoute = (loginRoute: IRoute[]) => {
    let result = null;
    if (loginRoute.length > 0) {
      result = loginRoute.map((route, index) => {
        return (
          <Route path="/" key={index}>
            <Route path={route.path} element={userStorage ? route.main : <LoginPage />} />
          </Route>
        );
      });
    }
    return result;
  };

  const handleDrawerOpen = (value: boolean) => {
    if (value === false) {
      dispatch(uiActions.showSidebar());
    } else {
      dispatch(uiActions.hideSidebar());
    }
  };

  const AdminLayout = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar opensidebar={opensidebar} onToggleSidebar={handleDrawerOpen} />
        <Layout className="site-layout">
          <HeaderAdmin opensidebar={opensidebar} onToggleSidebar={handleDrawerOpen} />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
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
