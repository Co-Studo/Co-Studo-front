import styled from 'styled-components';

import GithubLoginButton from '@pages/LoginPage/GithubLoginButton';

const Title = ({ children, className = '' }) => (
  <h1 className={className}>{children}</h1>
);

const StyledTitle = styled(Title)`
  color: red;
`;

const RealStyledTitle = styled.h1`
  color: red;
`;

const LoginPage: React.FC = () => (
  <main>
    <h1>Login Page !</h1>
    <Title>hi~</Title>
    <StyledTitle>Hi~</StyledTitle>
    <RealStyledTitle>HH</RealStyledTitle>
    <hr />
    <GithubLoginButton />
  </main>
);

export default LoginPage;
