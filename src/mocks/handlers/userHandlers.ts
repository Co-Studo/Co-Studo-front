import { rest } from 'msw';

import me from '@mocks/constants/me';
import wrap from '@mocks/helpers/wrap';

const getMe = (req, res, ctx) => {
  const {
    cookies: { refreshToken },
  } = req;
  if (refreshToken.includes('Expire')) {
    return res(
      ctx.status(400),
      ctx.json({
        ok: false,
        message: '로그인 정보가 만료되었습니다. 다시 로그인 해주세요.',
      }),
    );
  }
  return res(ctx.status(200), ctx.json(wrap(me)));
};

const githubLogin = (_, res, ctx) =>
  res(
    ctx.status(200),
    ctx.cookie('accessToken', 'fakeAccessToken'),
    ctx.cookie('refreshToken', 'fakeRefreshToken'),
  );

const logout = (_, res, ctx) =>
  res(
    ctx.status(200),
    ctx.cookie('accessToken', 'fakeAccessTokenExpire'),
    ctx.cookie('refreshToken', 'fakeRefreshTokenExpire'),
  );

export default [
  rest.get('/api/user/githubLogin', githubLogin),
  rest.get('/api/user/me', getMe),
  rest.get('/api/user/logout', logout),
];
