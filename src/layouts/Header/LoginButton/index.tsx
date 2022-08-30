import { useNavigate } from 'react-router-dom';

import StyledButton from '@components/common/Button/button.styled';
import colors from '@theme/colors';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClickLoginButton = () => {
    navigate('/login');
  };

  return (
    <StyledButton bgcolor={colors.grey600} onClick={handleClickLoginButton}>
      Login
    </StyledButton>
  );
};

export default LoginButton;
