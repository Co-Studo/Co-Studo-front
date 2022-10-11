import { User } from 'firebase/auth';

import Avatar from '@components/common/Avatar';
import Dropdown from '@components/common/Dropdown';
import StyledDropdown from '@components/common/Dropdown/dropdown.styled';
import { logout } from '@fbase/auth';
import useLocalStorage from '@hooks/useLocalStorage';

type UserInfoCircleProps = {
  user: User;
};

const UserInfoCircle = ({ user }: UserInfoCircleProps) => {
  const [, setIsLogin] = useLocalStorage('isLogin', false);

  const handleLogoutClick = () => {
    setIsLogin(false);
    logout();
  };

  return (
    <Dropdown>
      <Dropdown.Trigger
        trigger={
          <Avatar
            src={user.photoURL || ''}
            alt={user.displayName || 'no display name'}
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
