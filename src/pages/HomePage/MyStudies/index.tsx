import { FlexBox, Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchMyStudies } from '@apis/study';
import MyStudyInfoCard from '@pages/HomePage/MyStudies/MyStudyInfoCard';

const MyStudies = () => {
  const { data: studies } = useQuery(['myStudies'], fetchMyStudies);

  return (
    <FlexBox sx={{ flexDirection: 'column', gap: 15.5 }}>
      <Text variant="sectionTitle">
        참여중인 스터디
        <Text.Highlight sx={{ color: 'neutral_2', ml: 10 }}>
          {studies?.results.length}
        </Text.Highlight>
      </Text>
      {/* Slider 임시 삭제, 임시 slice */}
      <FlexBox sx={{ gap: 10 }}>
        {studies?.results?.slice(0, 4).map((study) => (
          <MyStudyInfoCard key={study.id} study={study} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default MyStudies;
