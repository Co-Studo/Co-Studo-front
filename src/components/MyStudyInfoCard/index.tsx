import { Avatar, AvatarGroup, Button, Paper } from '@cos-ui/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'styled-components';

import { StudyEntity } from '@apis/study';
import Icon from '@components/common/Icon';
import Row from '@components/common/Row';
import colors from '@styles/colors';

type MyStudyInfoCardProps = {
  study: StudyEntity;
};

const MyStudyInfoCard = ({ study }: MyStudyInfoCardProps) => {
  const bookmarkCss = css`
    color: ${({ theme }) =>
      study.isBookmarked ? theme.palette.primary : colors.grey300};
  `;

  return (
    <Paper sx={{ width: '15.625rem' }}>
      <Row
        title={
          <div css={{ display: 'flex', gap: '0.5rem' }}>
            <h4>{study.title}</h4>
            <Icon iconName='lock' />
          </div>
        }
        description={
          <span
            css={css`
              font-size: 0.7rem;
              color: ${colors.grey600};
            `}
          >
            {study.description}
          </span>
        }
        right={<FontAwesomeIcon css={bookmarkCss} icon={solid('star')} />}
      />
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <AvatarGroup flexAlign="flex-end">
          {study.participants.map((user) => (
            <Avatar
              key={user.id}
              sx={{ width: '2rem', height: '2rem' }}
              src={user.avatarUrl}
              alt={user.nickname}
            />
          ))}
        </AvatarGroup>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon
            css={css`
              color: ${({ theme }) => theme.palette.primary};
            `}
            icon={solid('crown')}
          />
          <Avatar
            sx={{ width: '2.5rem', height: '2.5rem' }}
            src={study.owner.avatarUrl}
            alt={study.owner.nickname}
          />
        </div>
      </div>
      {study.isRequireCheckIn && (
        <Row
          title={<span>체크인</span>}
          description={
            <span>
              {study.checkInRangeStart ? `${study.checkInRangeStart} ~ ` : ''}
              {study.checkInRangeEnd}
            </span>
          }
        />
      )}
      {study.isRequireCheckOut && (
        <Row
          title={<span>체크아웃</span>}
          description={
            <span>
              {study.checkOutRangeStart}
              {study.checkOutRangeEnd ? ` ~ ${study.checkOutRangeEnd}` : ''}
              {study.isCheckOutRequireArticle && ' (글작성 필요)'}
            </span>
          }
        />
      )}
      <div css={{ display: 'flex' }}>
        <Button size="medium">체크인</Button>
        <Button color='secondary' size="medium">체크아웃</Button>
      </div>
    </Paper>
  );
};

export default MyStudyInfoCard;
