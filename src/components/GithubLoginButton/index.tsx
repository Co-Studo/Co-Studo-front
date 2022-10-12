import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import StyledButton from '@components/common/Button/button.styled';
// import { login } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';

const GithubLoginButton = () => {
  const [, setIsLogin] = useLocalStorage('isLogin', false);
  const navigate = useNavigate();

  const handleGithubLoginClick = async () => {
    // await login({ authProvider: 'github' });
    setIsLogin(true);
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
