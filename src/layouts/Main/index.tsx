import { Outlet } from 'react-router-dom';

import { HEADER_HEIGHT } from '@layouts/Header';

const mainStyle = {
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  marginTop: `${HEADER_HEIGHT}`,
};

const Main = () => (
  <main css={mainStyle}>
    <Outlet />
  </main>
);

export default Main;
