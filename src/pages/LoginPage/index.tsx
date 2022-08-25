import PageLayout from '@components/common/PageLayout';
import GithubLoginButton from '@pages/LoginPage/GithubLoginButton';

const LoginPage: React.FC = () => (
  <PageLayout>
    <h1>Login Page !</h1>
    <GithubLoginButton />
  </PageLayout>
);

export default LoginPage;
