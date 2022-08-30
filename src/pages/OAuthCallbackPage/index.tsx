import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchGithubLogin } from '@apis/user';
import useLocalStorage from '@hooks/useLocalStorage';

const OAuthCallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const [, setIsLogin] = useLocalStorage('isLogin', false);

  if (!code) {
    throw Error('Github Code Undefined');
  }

  useEffect(() => {
    (async () => {
      await fetchGithubLogin(code);
      setIsLogin(true);
      navigate('/');
    })();
  }, []);

  return <h3>loading...</h3>;
};

export default OAuthCallbackPage;
