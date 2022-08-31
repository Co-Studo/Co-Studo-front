import { useQuery } from '@tanstack/react-query';

import { ServerResponse } from '@apis/http';
import { fetchMe, UserEntity } from '@apis/user';
import PageLayout from '@components/common/PageLayout';

const HomePage: React.FC = () => {
  const { data } = useQuery<ServerResponse<UserEntity>>(['fetchMe'], fetchMe);

  return <PageLayout>안녕하세요! {data?.results?.nickname}</PageLayout>;
};

export default HomePage;
