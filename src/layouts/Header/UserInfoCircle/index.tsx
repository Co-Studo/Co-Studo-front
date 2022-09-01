import { css } from 'styled-components';

import Dropdown from '@components/common/Dropdown';
import useFetchMeInterval from '@queries/useFetchMeInterval';
import colors from '@theme/colors';

const UserInfoCircle: React.FC = () => {
  const { data } = useFetchMeInterval();
  // buttonOnClick => modalOpen
  return (
    <Dropdown>
      <Dropdown.Trigger
        trigger={
          <img
            css={css`
              width: 2.4rem;
              height: 2.4rem;
              border-radius: 1.2rem;
            `}
            src={data?.results?.avatarUrl}
            alt={data?.results?.nickname}
          />
        }
      />
      <Dropdown.List
        transformOrigin="right"
        css={css`
          padding: 1rem;
          box-shadow: 0px 4px 10px ${colors.greyOpacity100},
            0px 0px 4px ${colors.greyOpacity500};
        `}
      >
        <Dropdown.Item>안녕하세요</Dropdown.Item>
        <Dropdown.Item>무야호</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default UserInfoCircle;
