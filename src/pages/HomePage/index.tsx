import { useQuery } from '@tanstack/react-query';
import { css } from 'styled-components';

import { fetchMyStudies } from '@apis/study';
import BigText from '@components/BigText';
import PageLayout from '@components/common/PageLayout';
import MyStudyInfoCard from '@components/MyStudyInfoCard';

// Paper List -> Carousel 가능성

const HomePage: React.FC = () => {
  const { data } = useQuery(['myStudies'], fetchMyStudies, {
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout>
      <BigText>안녕하세요!</BigText>
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
