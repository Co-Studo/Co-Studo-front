import {
  Route,
  Routes as RouterRoutes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

import Layout from '@layouts/Layout';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import OAuthCallbackPage from '@pages/OAuthCallbackPage';
import StudyCreationPage from '@pages/StudyCreationPage';
import StudyDetailPage from '@pages/StudyDetailPage';

// TODO: 별도의 페이지 생성
const Introduce = () => <div>introduce</div>;
const Article = () => <div>article</div>;
const Announcement = () => <div>announcement</div>;

const Routes = () => (
  <Router>
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/study" element={<Layout />}>
        <Route path="create" element={<StudyCreationPage />} />
        <Route path=":studyId" element={<StudyDetailPage />}>
          <Route path="introduce" element={<Introduce />} />
          <Route path="announcement" element={<Announcement />} />
          <Route path="article" element={<Article />} />
          <Route index element={<Navigate to="introduce" replace />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<OAuthCallbackPage />} />
    </RouterRoutes>
  </Router>
);

export default Routes;
