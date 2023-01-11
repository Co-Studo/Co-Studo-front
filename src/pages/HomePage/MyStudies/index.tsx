import { FlexBox, Text, Slider } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchMyStudies } from '@apis/study';
import MyStudyInfoCard from '@pages/HomePage/MyStudies/MyStudyInfoCard';

const MyStudies = () => {
  const { data: studies } = useQuery(['myStudies'], fetchMyStudies);

  return (
    <FlexBox sx={{ flexDirection: 'column', mb: '10rem' }}>
      <Text variant="sectionTitle">
        참여중인 스터디
        <Text.Highlight sx={{ color: 'neutral_2', ml: 1 }}>
          {studies?.results.length}
        </Text.Highlight>
      </Text>
      <Slider
        options={{
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 500,
        }}
      >
        <Slider.List>
          {studies?.results?.map((study) => (
            <Slider.Item>
              <MyStudyInfoCard key={study.id} study={study} />
            </Slider.Item>
          ))}
        </Slider.List>
        <Slider.PrevButton />
        <Slider.NextButton />
      </Slider>
    </FlexBox>
  );
};

export default MyStudies;
