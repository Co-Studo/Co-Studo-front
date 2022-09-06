import { css } from 'styled-components';

import BigText from '@components/BigText';
import useLocalStorage from '@hooks/useLocalStorage';
import AnonymousCircle from '@layouts/Header/AnonymousCircle';
import UserInfoCircle from '@layouts/Header/UserInfoCircle';
import UserInfoErrorBoundary from '@layouts/Header/UserInfoCircle/UserInfoErrorBoundary';
import colors from '@theme/colors';

// 개발 환경 중일 때는 로그인으로 시작
const initIsLogin = process.env.NODE_ENV === 'development';

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useLocalStorage('isLogin', initIsLogin);

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
      <BigText>Co Studo</BigText>
      <div>
        {isLogin ? (
          <UserInfoErrorBoundary>
            <UserInfoCircle setIsLogin={setIsLogin} />
          </UserInfoErrorBoundary>
        ) : (
          <AnonymousCircle />
        )}
      </div>
    </header>
  );
};

export default Header;
