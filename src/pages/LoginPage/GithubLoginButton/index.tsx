import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import StyledButton from '@components/common/Button/button.styled';
import { login } from '@fbase/auth';

const GithubLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGithubLoginClick = async () => {
    await login({ authProvider: 'github' });
    navigate('/');
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
