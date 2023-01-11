import {
  Avatar,
  AvatarGroup,
  Button,
  FlexBox,
  Paper,
  Text,
} from '@cos-ui/react';

import { StudyEntity } from '@apis/study';
import Icon from '@components/common/Icon';
import Row from '@components/common/Row';

type MyStudyInfoCardProps = {
  study: StudyEntity;
};

const MyStudyInfoCard = ({ study }: MyStudyInfoCardProps) => (
  <Paper sx={{ width: '28rem', height: '39rem', padding: '2.2rem' }}>
    <FlexBox
      sx={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Row
        title={
          <FlexBox sx={{ gap: '0.3rem' }}>
            <Text variant="articleTitle">{study.title}</Text>
            <Icon iconName="lock" size="small" />
          </FlexBox>
        }
        description={
          <Text variant="articleDescription" ellipsis={2}>
            {study.description}
          </Text>
        }
        right={
          <Icon
            iconName="star"
            color={study.isBookmarked ? 'primary' : 'neutral_1'}
          />
        }
        rightProps={{ sx: { alignSelf: 'flex-start' } }}
      />
      <FlexBox sx={{ justifyContent: 'space-between' }}>
        <AvatarGroup>
          {study.participants.map((user) => (
            <Avatar key={user.id} src={user.photoURL} alt={user.displayName} />
          ))}
        </AvatarGroup>
        <FlexBox sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Icon iconName="crown" />
          <Avatar
            size="large"
            src={study.owner.photoURL}
            alt={study.owner.displayName}
          />
        </FlexBox>
      </FlexBox>
      {study.isRequireCheckIn && (
        <Row
          title="체크인"
          description={`${
            study.checkInRangeStart ? `${study.checkInRangeStart} ~ ` : ''
          }${study.checkInRangeEnd}`}
        />
      )}
      {study.isRequireCheckOut && (
        <Row
          title="체크아웃"
          description={`${study.checkOutRangeStart}
              ${study.checkOutRangeEnd ? ` ~ ${study.checkOutRangeEnd}` : ''}
              ${study.isCheckOutIsArticle ? ' (글작성 필요)' : ''}`}
        />
      )}
      <FlexBox sx={{ justifyContent: 'space-between', gap: 1 }}>
        <Button size="medium">체크인</Button>
        <Button variant="outlined" size="medium">
          체크아웃
        </Button>
      </FlexBox>
    </FlexBox>
  </Paper>
);

export default MyStudyInfoCard;
