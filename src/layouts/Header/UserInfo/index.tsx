import useFetchMeInterval from '@queries/useFetchMeInterval';

const UserInfo: React.FC = () => {
  const { data } = useFetchMeInterval();

  return <span>안녕하세요, {data?.results?.nickname}</span>;
};

export default UserInfo;
