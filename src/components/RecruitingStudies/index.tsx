import { FlexBox } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchRecruitingStudies } from '@apis/study';
import RecruitingStudy from '@components/RecruitingStudies/RecruitingStudy';

type RecruitingStudiesProps = {
  sortBy: 'new' | 'popular';
};

const RecruitingStudies = ({ sortBy }: RecruitingStudiesProps) => {
  const { data: recruitingStudies } = useQuery(
    ['recruitingStudies'],
    () => fetchRecruitingStudies(sortBy),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <FlexBox as="ul">
      {recruitingStudies?.results.map((study) => (
        <RecruitingStudy study={study} />
      ))}
    </FlexBox>
  );
};

export default RecruitingStudies;
