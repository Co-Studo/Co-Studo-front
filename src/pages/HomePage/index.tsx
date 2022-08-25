import { useRecoilValue } from 'recoil';

import PageLayout from '@components/common/PageLayout';
import { userState } from '@store/user';


const HomePage: React.FC = () => {
  const user = useRecoilValue(userState);

  return <PageLayout>Hello {user.nickname}</PageLayout>;
};

export default HomePage;
