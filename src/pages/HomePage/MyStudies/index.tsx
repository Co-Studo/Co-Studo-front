import { Slider } from '@cos-ui/primitives';
import { FlexBox, Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';
import { css } from 'styled-components';

import { fetchMyStudies } from '@apis/study';
import Icon from '@components/common/Icon';
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
    </FlexBox>
  );
};

export default MyStudies;
