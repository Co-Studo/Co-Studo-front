import { Avatar, AvatarGroup, FlexBox, Paper, Text } from '@cos-ui/react';

import { StudyEntity } from '@apis/study';
import Row from '@components/common/Row';
import TagList from '@components/TagList';

type RecruitingStudyProps = {
  study: StudyEntity;
};

const RecruitingStudy = ({ study }: RecruitingStudyProps) => (
  <Paper sx={{ width: '28rem', height: '22.5rem', padding: '2.2rem' }}>
    <FlexBox
      sx={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Row
        title={study.title}
        description={
          <Text variant="articleDescription" ellipsis={2}>
            {study.description}
          </Text>
        }
      />
      <AvatarGroup flexAlign="flex-end">
        {study.participants.map((user) => (
          <Avatar
            key={user.id}
            sx={{ width: '4.2rem', height: '4.2rem' }}
            src={user.photoURL}
            alt={user.displayName}
          />
        ))}
      </AvatarGroup>
      <TagList tags={study.tags} />
    </FlexBox>
  </Paper>
);

export default RecruitingStudy;