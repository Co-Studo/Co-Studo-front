import {
  Avatar,
  AvatarGroup,
  Button,
  FlexBox,
  LoadingSpinner,
  Text,
} from '@cos-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { css } from 'styled-components';

import { fetchStudyDetail } from '@apis/study';
import { useMe } from '@fbase/auth';
import TabBar from '@pages/StudyDetailPage/TabBar';

const StudyDetailPage = () => {
  const user = useMe();
  const { studyId } = useParams();

  const { data, isLoading } = useQuery(
    ['study', 'detail', studyId],
    () => fetchStudyDetail(studyId || ''),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading || !data) return <LoadingSpinner />;

  const { title, shortDescription, tags, owner, participants } = data.results;

  const isAdmin = user?.uid === owner.id;
  const isMember = participants.some((member) => member.id === user?.uid);

  const handleButtonClick = () => {
    // TODO
    // if (isAdmin) navigate('/');
    // else if (isMember) navigate('/');
    // else navigate('/');
  };

  return (
    <div
      css={css`
        max-width: 1270px;
        height: 100vh;
        padding-top: 6rem;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.palette.white};
      `}
    >
      <FlexBox
        sx={{
          justifyContent: 'space-between',
          p: '4.5rem',
          bgColor: 'white',
        }}
      >
        <FlexBox sx={{ flexShrink: 0, gap: '6rem' }}>
          <img
            src="https://user-images.githubusercontent.com/62706988/204448063-766330af-a195-4985-b875-ec2950d2fa23.svg"
            alt={title}
            css={{
              width: '14.2rem',
            }}
          />
          <div>
            <Text as="h2" variant="articleTitle" sx={{ mt: '0.6rem', mb: 1 }}>
              {title}
            </Text>
            <Text
              as="p"
              variant="articleDescription"
              sx={{ mb: 2 }}
              ellipsis={2}
            >
              {shortDescription}
            </Text>
            <Text
              as="div"
              variant="articleDescription"
              sx={{ color: 'primary' }}
              ellipsis={2}
            >
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  css={{
                    display: 'inline-block',
                    marginRight: '0.5rem',
                    wordBreak: 'keep-all',
                  }}
                >
                  #{tag.name}
                </span>
              ))}
            </Text>
          </div>
        </FlexBox>
        <FlexBox sx={{ alignItems: 'center', gap: '5rem' }}>
          <FlexBox sx={{ flexShrink: 0, gap: '3rem' }} as="dl">
            <div css={{ textAlign: 'center' }}>
              <dt>
                <Text
                  as="span"
                  sx={{ mb: 1, fontSize: 'small', fontWeight: 'bold' }}
                >
                  스터디 리더
                </Text>
              </dt>
              <dd>
                <Avatar
                  src={owner.photoURL}
                  alt={owner.displayName}
                  sx={{ width: '4rem', height: '4rem' }}
                />
              </dd>
            </div>
            {participants.length !== 0 && (
              <div css={{ textAlign: 'center' }}>
                <dt>
                  <Text
                    as="span"
                    sx={{ mb: 1, fontSize: 'small', fontWeight: 'bold' }}
                  >
                    스터디 멤버
                  </Text>
                </dt>
                <dd>
                  <AvatarGroup flexAlign="flex-end" max={3} spacing="small">
                    {participants.map((member) => (
                      <Avatar
                        key={member.id}
                        src={member.photoURL}
                        alt={member.displayName}
                        sx={{ width: '4.2rem', height: '4.2rem' }}
                      />
                    ))}
                  </AvatarGroup>
                </dd>
              </div>
            )}
          </FlexBox>
          <Button
            size="large"
            onClick={handleButtonClick}
            disabled={isMember}
            color={isMember ? 'neutral' : 'primary'}
          >
            {isAdmin && '관리자 페이지'}
            {isMember && '스터디 가입 중'}
            {!isAdmin && !isMember && '스터디 가입 신청'}
          </Button>
        </FlexBox>
      </FlexBox>
      <TabBar />
    </div>
  );
};

export default StudyDetailPage;
