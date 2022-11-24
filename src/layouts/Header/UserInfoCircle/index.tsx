import { Avatar, Dropdown } from '@cos-ui/react';
import { User } from 'firebase/auth';

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
      <Dropdown.List transformOrigin="right">
        <Dropdown.Item onClick={handleLogoutClick}>
          로그아웃
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default UserInfoCircle;
