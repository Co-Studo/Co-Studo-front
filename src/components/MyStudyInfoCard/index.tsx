import { Avatar, AvatarGroup, Button, Paper } from '@cos-ui/react';
import { css } from 'styled-components';

import { StudyEntity } from '@apis/study';
import Icon from '@components/common/Icon';
import Row from '@components/common/Row';

type MyStudyInfoCardProps = {
  study: StudyEntity;
};

const MyStudyInfoCard = ({ study }: MyStudyInfoCardProps) => (
  <Paper sx={{ width: '15.625rem' }}>
    <Row
      title={
        <div css={{ display: 'flex', gap: '0.5rem' }}>
          <h4>{study.title}</h4>
          <Icon iconName="lock" />
        </div>
      }
      description={
        <span
          css={css`
            font-size: 0.7rem;
          `}
        >
          {study.description}
        </span>
      }
      right={<Icon iconName="star" />}
    />
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <AvatarGroup flexAlign="flex-end">
        {study.participants.map((user) => (
          <Avatar
            key={user.id}
            sx={{ width: '2rem', height: '2rem' }}
            src={user.photoURL}
            alt={user.displayName}
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
        <Icon iconName="crown" />
        <Avatar
          sx={{ width: '2.5rem', height: '2.5rem' }}
          src={study.owner.photoURL}
          alt={study.owner.displayName}
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
            {study.isCheckOutIsArticle && ' (글작성 필요)'}
          </span>
        }
      />
    )}
    <div css={{ display: 'flex' }}>
      <Button size="medium">체크인</Button>
      <Button color="neutral" size="medium">
        체크아웃
      </Button>
    </div>
  </Paper>
);

export default MyStudyInfoCard;
