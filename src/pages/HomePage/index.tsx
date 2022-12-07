import { Text } from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';
import { css } from 'styled-components';

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
      <ul
        css={css`
          display: flex;
          gap: 1rem;
        `}
      >
        {data?.results?.map((study) => (
          <MyStudyInfoCard key={study.id} study={study} />
        ))}
      </ul>
    </PageLayout>
  );
};

export default HomePage;
