import { Button } from '@cos-ui/react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import { useMe } from '@fbase/auth';
import UserInfoCircle from '@layouts/Header/UserInfoCircle';
import colors from '@styles/colors';

const Header = () => {
  const user = useMe();
  const navigate = useNavigate();

  const handleStudyCreateButtonClick = () => {
    navigate('/study/create');
  };

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
      <h1
        css={css`
          font-weight: 500;
          font-size: 2rem;
          white-space: nowrap;
          line-height: 1.7;
        `}
      >
        CoStudo
      </h1>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Button
          size="medium"
          shape="round"
          onClick={handleStudyCreateButtonClick}
        >
          스터디 생성
        </Button>
        {user ? (
          <UserInfoCircle user={user} />
        ) : (
          <Button size="medium" shape="round">
            로그인
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
