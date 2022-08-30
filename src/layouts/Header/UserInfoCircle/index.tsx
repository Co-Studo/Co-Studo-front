import { css } from 'styled-components';

import useFetchMeInterval from '@queries/useFetchMeInterval';

const UserInfoCircle: React.FC = () => {
  const { data } = useFetchMeInterval();

  return (
    <button
      css={css`
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 1.2rem;
      `}
      type="button"
    >
      <img
        css={css`
          width: 100%;
          border-radius: 50%;
        `}
        src={data?.results?.avatarUrl}
        alt={data?.results?.nickname}
      />
    </button>
  );
};

export default UserInfoCircle;
