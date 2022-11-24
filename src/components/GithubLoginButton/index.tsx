import { Button, FlexBox } from '@cos-ui/react';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { login } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';

const GithubLoginButton = () => {
  const [, setIsLogin] = useLocalStorage('isLogin', false);
  const navigate = useNavigate();

  const handleGithubLoginClick = async () => {
    await login({ authProvider: 'github' });
    setIsLogin(true);
    navigate('/');
  };

  return (
    <Button size="medium" color="github" onClick={handleGithubLoginClick}>
      <FlexBox
        sx={{ justifyContent: 'center', alignItems: 'center', gap: '0.4rem' }}
      >
        <span>Github Login</span>
        <FontAwesomeIcon icon={brands('github')} />
      </FlexBox>
    </Button>
  );
};

export default GithubLoginButton;
