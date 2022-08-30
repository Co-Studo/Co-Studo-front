import {
  Route,
  Routes as RouterRoutes,
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '@layouts/Layout';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';

const Routes: React.FC = () => (
  <Router>
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<OAuthCallbackPage />} />
    </RouterRoutes>
  </Router>
);

export default Routes;
