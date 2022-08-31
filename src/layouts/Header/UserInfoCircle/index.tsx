import { css } from 'styled-components';

import DropDown from '@components/common/Dropdown';
import useFetchMeInterval from '@queries/useFetchMeInterval';
import colors from '@theme/colors';

const UserInfoCircle: React.FC = () => {
  const { data } = useFetchMeInterval();
  // buttonOnClick => modalOpen
  return (
    <DropDown>
      <DropDown.Trigger
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
      <DropDown.List
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 1rem;
          box-shadow: 0px 4px 10px ${colors.greyOpacity100},
            0px 0px 4px ${colors.greyOpacity500};
        `}
      >
        <DropDown.Item>안녕하세요</DropDown.Item>
        <DropDown.Item>무야호</DropDown.Item>
      </DropDown.List>
    </DropDown>
  );
};

export default UserInfoCircle;
