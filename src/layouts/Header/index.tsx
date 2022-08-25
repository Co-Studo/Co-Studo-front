import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import StyledButton from '@components/common/Button/button.styled';
import colors from '@theme/colors';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    navigate('/login');
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
      <h1>Logo</h1>
      <div>
        <StyledButton bgcolor={colors.grey600} onClick={handleClickLoginButton}>
          Login
        </StyledButton>
      </div>
    </header>
  );
};

export default Header;
