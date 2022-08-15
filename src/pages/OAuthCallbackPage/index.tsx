import axios from 'axios';
import { useEffect } from 'react';

interface JwtResponse {
  accessToken: string;
  refreshToken: string;
}

const OAuthCallbackPage: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const loginUrl = `__API_END_POINT__/api/user/githubLogin?code=${code}`;

  useEffect(() => {
    (async () => {
      const {
        data: { results: jwtResponse },
      } = await axios.get<{ ok: boolean; results: JwtResponse }>(loginUrl);

      console.log(jwtResponse);
    })();
  }, [loginUrl]);

  return <h3>loading...</h3>;
};

export default OAuthCallbackPage;
