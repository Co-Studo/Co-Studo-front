import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledButton from '@components/common/Button/button.styled';

const GithubLoginButton: React.FC = () => {
  const handleGithubLoginClick = async () => {
    const githubAuthUrl = 'https://github.com/login/oauth/authorize';
    const redirectUri = `__HOME_PAGE__/callback`;

    if (!process.env.CLIENT_ID) {
      throw new Error('Cannot find client id');
    }
    const queryConfig = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: redirectUri,
    };

    const searchParamsObj = new URLSearchParams(queryConfig);
    const queryString = `?${searchParamsObj.toString()}`;
    const githubLoginUrl = githubAuthUrl + queryString;
    window.location.href = githubLoginUrl;
  };

  return (
    <StyledButton
      width="large"
      height="medium"
      color="github"
      onClick={handleGithubLoginClick}
    >
      <span>Github Login</span>
      <FontAwesomeIcon icon={brands('github')} />
    </StyledButton>
  );
};

export default GithubLoginButton;
