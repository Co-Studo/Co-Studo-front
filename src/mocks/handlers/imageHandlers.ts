import { rest } from 'msw';

import image from '@mocks/constants/image';
import wrap from '@mocks/helpers/wrap';

const getImageUrl = (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(2000), ctx.json(wrap(image)));

export default [rest.post('/image', getImageUrl)];
