import { FlexBox } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchRecruitingStudies } from '@apis/study';
import RecruitingStudyCard from '@pages/HomePage/RecruitingStudies/RecrutingStudyCards/RecruitingStudyCard';

type RecruitingStudyCardsProps = {
  sortBy: 'new' | 'popular';
};

const RecruitingStudyCards = ({ sortBy }: RecruitingStudyCardsProps) => {
  const { data: recruitingStudies } = useQuery(
    ['recruitingStudies'],
    () => fetchRecruitingStudies(sortBy),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <FlexBox as="ul" sx={{ gap: 10, flexWrap: 'wrap' }}>
      {recruitingStudies?.results.map((study) => (
        <RecruitingStudyCard study={study} />
      ))}
    </FlexBox>
  );
};

export default RecruitingStudyCards;
