import { css } from 'styled-components';

import useLocalStorage from '@hooks/useLocalStorage';
import LoginButton from '@layouts/Header/LoginButton';
import UserInfo from '@layouts/Header/UserInfo';
import UserInfoErrorBoundary from '@layouts/Header/UserInfo/UserInfoErrorBoundary';
import colors from '@theme/colors';

const Header: React.FC = () => {
  const [isLogin] = useLocalStorage('isLogin', false);

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-shadow: 0px 4px 10px ${colors.greyOpacity100},
          0px 0px 4px ${colors.greyOpacity500};
        height: 5.875rem;
        position: fixed;
        top: 0;
        left: 0;
        padding: 1.5rem 2rem;
      `}
    >
      <h1>Logo</h1>
      <div>
        {isLogin ? (
          <UserInfoErrorBoundary>
            <UserInfo />
          </UserInfoErrorBoundary>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
};

export default Header;
