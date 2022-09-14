import { css } from 'styled-components';

import { StudyEntity } from '@apis/study';
import Avatar from '@components/common/Avatar';
import AvatarGroup from '@components/common/AvatarGroup';
import Paper from '@components/common/Paper';
import colors from '@theme/colors';

const StudyInfo: React.FC<{ study: StudyEntity }> = ({ study }) => (
  <Paper sx={{ width: '20rem' }}>
    <div>
      <h4>{study.title}</h4>
      <span
        css={css`
          font-size: 0.7rem;
          color: ${colors.grey600};
        `}
      >
        {study.description}
      </span>
    </div>
    <AvatarGroup>
      {study.users.map((user) => (
        <Avatar
          key={user.id}
          sx={{ width: '1.5rem', height: '1.5rem' }}
          src={user.avatarUrl}
          alt={user.nickname}
        />
      ))}
    </AvatarGroup>
  </Paper>
);

export default StudyInfo;
