import { rest } from 'msw';

import me from '@mocks/constants/me';
import wrap from '@mocks/helpers/wrap';

const getMe = (req, res, ctx) => res(ctx.status(200), ctx.json(wrap(me)));

const githubLogin = (_, res, ctx) =>
  res(
    ctx.status(200),
    ctx.cookie('accessToken', 'fakeAccessToken'),
    ctx.cookie('refreshToken', 'fakeRefreshToken'),
  );

export default [
  rest.get('/api/user/githubLogin', githubLogin),
  rest.get('/api/user/me', getMe),
];
