import axios from 'axios';
import { useEffect } from 'react';

const OAuthCallbackPage: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const loginUrl = `__API_END_POINT__/api/user/githubLogin?code=${code}`;

  useEffect(() => {
    (async () => {
      const jwtResponse = await axios.get(loginUrl);
      const accessToken = jwtResponse.headers['access-token'];
      console.log(accessToken);
    })();
  }, [loginUrl]);

  return <h3>loading...</h3>;
};

export default OAuthCallbackPage;
