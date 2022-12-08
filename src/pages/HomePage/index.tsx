import { Slider } from '@cos-ui/primitives';
import { FlexBox, Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchMyStudies } from '@apis/study';
import PageLayout from '@components/common/PageLayout';
import MyStudyInfoCard from '@components/MyStudyInfoCard';

// Paper List -> Carousel 가능성

const HomePage = () => {
  const { data } = useQuery(['myStudies'], fetchMyStudies, {
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout>
      <Text variant="sectionTitle">안녕하세요!</Text>
      <Slider
        options={{
          slidesToShow: 4,
          slidesToScroll: 3,
          speed: 500,
          slidesMargin: '10px',
        }}
      >
        <Slider.List>
          {data?.results?.map((study) => (
            <Slider.Item>
              <MyStudyInfoCard key={study.id} study={study} />
            </Slider.Item>
          ))}
        </Slider.List>
        <FlexBox>
          <Slider.PrevButton
            css={{ width: '50px', height: '50px', border: '1px solid #000' }}
          >
            &lt;
          </Slider.PrevButton>
          <Slider.NextButton
            css={{ width: '50px', height: '50px', border: '1px solid #000' }}
          >
            &gt;
          </Slider.NextButton>
        </FlexBox>
      </Slider>
    </PageLayout>
  );
};

export default HomePage;
