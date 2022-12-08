import { StudyEntity } from '@apis/study';

type RecruitingStudyProps = {
  study: StudyEntity;
};

const RecruitingStudy = ({ study }: RecruitingStudyProps) => (
  <span>{study.title}</span>
);

export default RecruitingStudy;
