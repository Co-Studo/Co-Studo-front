import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'styled-components';

import { StudyEntity } from '@apis/study';
import Avatar from '@components/common/Avatar';
import AvatarGroup from '@components/common/AvatarGroup';
import StyledButton from '@components/common/Button/button.styled';
import Paper from '@components/common/Paper';
import Row from '@components/common/Row';
import colors from '@theme/colors';

type MyStudyInfoCardProps = {
  study: StudyEntity;
};

const MyStudyInfoCard = ({ study }: MyStudyInfoCardProps) => {
  const bookmarkCss = css`
    color: ${({ theme }) =>
      study.isBookmarked ? theme.palette.primary : colors.grey300};
    align-self: flex-start;
  `;

  return (
    <Paper sx={{ width: '15.625rem' }}>
      <Row
        content={
          <Row.Column2Row
            top={
              <div css={{ display: 'flex', gap: '0.5rem' }}>
                <h4>{study.title}</h4>
                <FontAwesomeIcon icon={solid('lock')} />
              </div>
            }
            bottom={
              <span
                css={css`
                  font-size: 0.7rem;
                  color: ${colors.grey600};
                `}
              >
                {study.description}
              </span>
            }
          />
        }
        right={<FontAwesomeIcon css={bookmarkCss} icon={solid('star')} />}
      />
      <Row
        left={
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
        }
        right={
          <Row.Column2Row
            noGap
            top={
              <FontAwesomeIcon
                css={css`
                  color: ${({ theme }) => theme.palette.primary};
                `}
                icon={solid('crown')}
              />
            }
            bottom={
              <Avatar
                sx={{ width: '2.5rem', height: '2.5rem' }}
                src={study.owner.avatarUrl}
                alt={study.owner.nickname}
              />
            }
          />
        }
      />
      {study.isRequireCheckIn && (
        <Row.Column2Row
          top={<span>체크인</span>}
          bottom={
            <span>
              {study.checkInRangeStart ? `${study.checkInRangeStart} ~ ` : ''}
              {study.checkInRangeEnd}
            </span>
          }
        />
      )}
      {study.isRequireCheckOut && (
        <Row.Column2Row
          top={<span>체크아웃</span>}
          bottom={
            <span>
              {study.checkOutRangeStart}
              {study.checkOutRangeEnd ? ` ~ ${study.checkOutRangeEnd}` : ''}
              {study.isCheckOutRequireArticle && ' (글작성 필요)'}
            </span>
          }
        />
      )}
      <Row
        left={<StyledButton width="medium">체크인</StyledButton>}
        right={<StyledButton width="medium">체크아웃</StyledButton>}
      />
    </Paper>
  );
};

export default MyStudyInfoCard;
