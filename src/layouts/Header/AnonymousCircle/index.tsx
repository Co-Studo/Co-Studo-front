import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

const AnonymousCircle: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    navigate('/login');
  };

  return (
    <button
      css={css`
        border: 2px solid ${({ theme }) => theme.palette.borderLine};
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 1.2rem;
        transition: border-color 0.3s;
        &:hover {
          border-color: ${({ theme }) => theme.palette.fontColor};
        }
      `}
      type="button"
      onClick={handleClickLoginButton}
    >
      <FontAwesomeIcon icon={solid('user')} />
    </button>
  );
};

export default AnonymousCircle;
