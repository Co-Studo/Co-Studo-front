import {
  Navigate,
  Route,
  Routes as RouterRoutes,
  BrowserRouter as Router,
} from 'react-router-dom';

import LoginPage from '@pages/LoginPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';

const Routes: React.FC = () => (
  <Router>
    <RouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<OAuthCallbackPage />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </RouterRoutes>
  </Router>
);

export default Routes;
