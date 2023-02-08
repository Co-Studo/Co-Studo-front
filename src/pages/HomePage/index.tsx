import PageLayout from '@components/common/PageLayout';
import MyStudies from '@pages/HomePage/MyStudies';
import RecruitingStudies from '@pages/HomePage/RecruitingStudies';

const HomePage = () => (
  <PageLayout>
    <MyStudies />
    <div css="margin-bottom: 10rem;" />
    <RecruitingStudies />
  </PageLayout>
);

export default HomePage;
