import { Slider } from '@cos-ui/primitives';
import { BasicTab, FlexBox, Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';

import { fetchMyStudies } from '@apis/study';
import PageLayout from '@components/common/PageLayout';
import MyStudyInfoCard from '@components/MyStudyInfoCard';
import RecruitingStudies from '@components/RecruitingStudies';

// Paper List -> Carousel 가능성

const HomePage = () => {
  const { data: studies } = useQuery(['myStudies'], fetchMyStudies, {
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout>
      <Text variant="sectionTitle">
        참여중인 스터디
        <Text.Highlight sx={{ color: 'neutral_2', ml: 1 }}>
          {studies?.results.length}
        </Text.Highlight>
      </Text>
      <FlexBox sx={{ gap: 2 }}>
        {studies?.results?.map((study) => (
          <MyStudyInfoCard key={study.id} study={study} />
        ))}
      </FlexBox>
      <BasicTab.Group>
        <FlexBox>
          <Text variant="sectionTitle" sx={{ mr: 2 }}>
            모집중인 스터디
          </Text>
          <BasicTab.List>
            <BasicTab>신규</BasicTab>
            <BasicTab>인기</BasicTab>
          </BasicTab.List>
        </FlexBox>
        <BasicTab.Panels>
          <BasicTab.Panel>
            <RecruitingStudies sortBy="new" />
          </BasicTab.Panel>
          <BasicTab.Panel>
            <RecruitingStudies sortBy="popular" />
          </BasicTab.Panel>
        </BasicTab.Panels>
      </BasicTab.Group>
      {/* <Slider
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
      </Slider> */}
    </PageLayout>
  );
};

export default HomePage;
