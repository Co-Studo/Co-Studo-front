import { useRecoilState } from 'recoil';

import Avatar from '@components/common/Avatar';
import Dropdown from '@components/common/Dropdown';
import StyledDropdown from '@components/common/Dropdown/dropdown.styled';
import { logout } from '@fbase/auth';
import { userState } from '@store/user';

const UserInfoCircle = ({ setIsLogin }) => {
  const [user] = useRecoilState(userState);

  const handleLogoutClick = () => {
    setIsLogin(false);
    logout();
  };

  return (
    <Dropdown>
      <Dropdown.Trigger
        trigger={<Avatar src={user?.photoURL || ''} alt="" />}
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
