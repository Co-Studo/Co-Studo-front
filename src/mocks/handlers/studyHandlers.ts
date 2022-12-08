import { rest } from 'msw';

import { myStudy, studyDetail } from '@mocks/constants/study';
import wrap from '@mocks/helpers/wrap';

export const getMyStudy = (req, res, ctx) =>
  // get user by cookie
  res(ctx.status(200), ctx.json(wrap(myStudy)));

export const getStudyDetail = (req, res, ctx) =>
  res(ctx.status(200), ctx.json(wrap(studyDetail)));

export default [
  rest.get('/study/mine', getMyStudy),
  rest.get('/study/id', getStudyDetail),
];
