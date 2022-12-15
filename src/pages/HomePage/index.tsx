import { Slider } from '@cos-ui/primitives';
import { BasicTab, FlexBox, Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';
import { css } from 'styled-components';

import { fetchMyStudies } from '@apis/study';
import Icon from '@components/common/Icon';
import PageLayout from '@components/common/PageLayout';
import MyStudyInfoCard from '@pages/HomePage/MyStudyInfoCard';
import RecruitingStudies from '@pages/HomePage/RecruitingStudies';

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
        <Slider.PrevButton
          css={css`
            position: absolute;
            left: 0;
            top: calc(50% - 25px);
            color: ${({ theme }) => theme.palette.primary};
            &::disabled {
              color: ${({ theme }) => theme.palette.neutral_2};
            }
          `}
        >
          <Icon iconName="leftArrow" />
        </Slider.PrevButton>
        <Slider.NextButton
          css={css`
            position: absolute;
            right: 50px;
            top: calc(50% - 25px);
            color: ${({ theme }) => theme.palette.primary};
            &::disabled {
              color: ${({ theme }) => theme.palette.neutral_2};
            }
          `}
        >
          <Icon iconName="rightArrow" />
        </Slider.NextButton>
      </Slider>
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
    </PageLayout>
  );
};

export default HomePage;
