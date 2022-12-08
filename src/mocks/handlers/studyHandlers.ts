import { rest } from 'msw';

import { studies, studyDetail } from '@mocks/constants/study';
import wrap from '@mocks/helpers/wrap';

export const getMyStudy = (req, res, ctx) =>
  res(ctx.status(200), ctx.json(wrap(studies)));

export const getStudyDetail = (req, res, ctx) =>
  res(ctx.status(200), ctx.json(wrap(studyDetail)));

export const getStudy = (req, res, ctx) => {
  const recruiting = req.url.searchParams.get('recruiting');
  const sort = req.url.searchParams.get('sort');

  let response = [...studies];
  if (recruiting) {
    response = response.filter((study) => study.isRecruiting);
  }

  if (sort) {
    response.sort((a, b) => {
      if (sort === 'new') {
        return b.createdAt._seconds - a.createdAt._seconds;
      }
      if (sort === 'popular') {
        return (
          b.participants.length +
          b.applicants.length -
          (a.participants.length + a.applicants.length)
        );
      }
      return b.createdAt._seconds - a.createdAt._seconds;
    });
  }
  return res(ctx.status(200), ctx.json(wrap(response)));
};

export default [
  rest.get('/study/mine', getMyStudy),
  rest.get('/study/:studyId', getStudyDetail),
  rest.get('/study', getStudy),
];
