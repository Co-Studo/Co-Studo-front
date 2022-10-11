import {
  Route,
  Routes as RouterRoutes,
  BrowserRouter as Router,
} from 'react-router-dom';

import Layout from '@layouts/Layout';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';
import StudyCreationPage from '@pages/StudyCreationPage';

const Routes: React.FC = () => (
  <Router>
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/study" element={<Layout />}>
        <Route path="create" element={<StudyCreationPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<OAuthCallbackPage />} />
    </RouterRoutes>
  </Router>
);

export default Routes;
