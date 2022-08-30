import { useQueryClient } from '@tanstack/react-query';

import { UserEntity } from '@apis/user';
import PageLayout from '@components/common/PageLayout';

const HomePage: React.FC = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<UserEntity>(['fetchMe']);

  return <PageLayout>Hello {user?.nickname}</PageLayout>;
};

export default HomePage;
