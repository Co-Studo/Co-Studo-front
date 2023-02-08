import { Avatar, AvatarGroup, FlexBox, Paper, Text } from '@cos-ui/react';
import { useNavigate } from 'react-router-dom';

import { StudyEntity } from '@apis/study';
import Row from '@components/common/Row';
import TagList from '@components/TagList';

type RecruitingStudyProps = {
  study: StudyEntity;
};

const RecruitingStudy = ({ study }: RecruitingStudyProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/study/${study.id}/introduce`);
  };

  return (
    <Paper
      onClick={handleCardClick}
      sx={{ width: '28rem', height: '22.5rem', p: 11 }}
    >
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
        <AvatarGroup>
          {study.participants.map((user) => (
            <Avatar
              key={user.id}
              size="medium"
              src={user.photoURL}
              alt={user.displayName}
            />
          ))}
        </AvatarGroup>
        <TagList tags={study.tags} />
      </FlexBox>
    </Paper>
  );
};

export default RecruitingStudy;
