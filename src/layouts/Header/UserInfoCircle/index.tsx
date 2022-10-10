import { useMutation } from '@tanstack/react-query';

import { fetchLogout } from '@apis/user';
import Avatar from '@components/common/Avatar';
import Dropdown from '@components/common/Dropdown';
import StyledDropdown from '@components/common/Dropdown/dropdown.styled';
import useFetchMeInterval from '@queries/useFetchMeInterval';

const UserInfoCircle: React.FC<{ setIsLogin: (isLogin: boolean) => void }> = ({
  setIsLogin,
}) => {
  const { data } = useFetchMeInterval();
  const logoutMutation = useMutation(fetchLogout);

  const handleLogoutClick = () => {
    setIsLogin(false);
    logoutMutation.mutate();
  };

  return (
    <Dropdown>
      <Dropdown.Trigger
        trigger={
          <Avatar
            src={data?.results?.avatarUrl}
            alt={data?.results?.nickname}
          />
        }
      />
      <StyledDropdown.List transformOrigin="right">
        <StyledDropdown.Item onClick={handleLogoutClick}>
          로그아웃
        </StyledDropdown.Item>
      </StyledDropdown.List>
    </Dropdown>
  );
};

export default UserInfoCircle;
