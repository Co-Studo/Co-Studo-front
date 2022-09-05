import { useMutation } from '@tanstack/react-query';
import { css } from 'styled-components';

import { fetchLogout } from '@apis/user';
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
          <img
            css={css`
              width: 2.4rem;
              height: 2.4rem;
              border-radius: 1.2rem;
            `}
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
