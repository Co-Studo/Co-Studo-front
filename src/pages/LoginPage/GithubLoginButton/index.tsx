import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import StyledButton from '@components/common/Button/button.styled';
import { login, setMe } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';
import { userState } from '@store/user';

const GithubLoginButton: React.FC = () => {
  const navigate = useNavigate();
  const [, setIsLogin] = useLocalStorage('isLogin', false);
  const setUser = useSetRecoilState(userState);

  const handleGithubLoginClick = async () => {
    await login({ authProvider: 'github' });
    setIsLogin(true);
    setMe({ setUser });
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
