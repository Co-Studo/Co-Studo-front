import { Outlet } from 'react-router-dom';

import Header from '@layouts/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
