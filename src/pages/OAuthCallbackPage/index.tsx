import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { userState, User } from '@store/user';

const OAuthCallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const loginUrl = `__API_END_POINT__/api/user/githubLogin?code=${code}`;
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    (async () => {
      await axios.get<{ ok: boolean }>(loginUrl, {
        withCredentials: true,
      });
      const {
        data: {
          results: { email, nickname, avatarUrl },
        },
      } = await axios.get<{ ok: boolean; results: User }>(
        `__API_END_POINT__/api/user/me`,
        {
          withCredentials: true,
        },
      );
      setUser({ email, nickname, avatarUrl });
      navigate('/');
    })();
  }, []);

  return <h3>loading...</h3>;
};

export default OAuthCallbackPage;
