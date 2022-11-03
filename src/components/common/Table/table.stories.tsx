import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@components/common/Icon';
import Table from '@components/common/Table';
import Text from '@components/common/Text';

export default {
  title: 'common/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const noticeList = [
  {
    id: 1,
    title: '스터디 가입전 해당 공지사항을 숙지해주세요.',
    writer: '파크',
    date: '2022.10.22',
    view: 101,
    isFixed: true,
    isNew: false,
    commentCount: 14,
  },
  {
    id: 2,
    title: '스터디 전체 공지 드립니다.',
    writer: '파크크크크크크크크',
    date: '1시간 전',
    view: 11,
    isFixed: true,
    isNew: true,
    commentCount: 0,
  },
];

export const NoticeList: ComponentStory<typeof Table> = () => (
  <Table
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '85px']}
  >
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>번호</Table.HeadCell>
        <Table.HeadCell>제목</Table.HeadCell>
        <Table.HeadCell>작성자</Table.HeadCell>
        <Table.HeadCell>날짜</Table.HeadCell>
        <Table.HeadCell>조회수</Table.HeadCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {noticeList
        .reverse()
        .map(({ id, title, writer, date, view, commentCount }) => (
          <Table.Row key={id}>
            <Table.BodyCell>
              <Text ellipsis>{id}</Text>
            </Table.BodyCell>
            <Table.BodyCell
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Text ellipsis>{title}</Text>
              {commentCount > 0 && (
                <Text.Highlight
                  as="b"
                  sx={{ fontWeight: 'bold', color: 'primary' }}
                >
                  {commentCount}
                </Text.Highlight>
              )}
            </Table.BodyCell>
            <Table.BodyCell>
              <Text ellipsis>{writer}</Text>
            </Table.BodyCell>
            <Table.BodyCell>
              <Text ellipsis>{date}</Text>
            </Table.BodyCell>
            <Table.BodyCell>
              <Text ellipsis>{view}</Text>
            </Table.BodyCell>
          </Table.Row>
        ))}
    </Table.Body>
  </Table>
);

const memberManagementList = [
  {
    id: 1,
    nickName: 'Hemdi',
    status: 'waiting',
    dateOfSubscription: '2022.10.22',
    periodOfActivity: 0,
    uncheckin: 0,
    uncheckout: 0,
    penaltyPoint: 0,
  },
  {
    id: 2,
    nickName: 'Jamie',
    status: 'warning',
    dateOfSubscription: '2022.10.22',
    periodOfActivity: 0,
    uncheckin: 0,
    uncheckout: 10,
    penaltyPoint: 990,
  },
  {
    id: 3,
    nickName: 'Park',
    status: 'member',
    dateOfSubscription: '2022.10.22',
    periodOfActivity: 0,
    uncheckin: 0,
    uncheckout: 0,
    penaltyPoint: 0,
  },
];

const STATUS = {
  member: {
    text: '활동 중',
    color: 'primary',
  },
  waiting: {
    text: '가입 승인 대기 중',
    color: 'fontColor',
  },
  warning: {
    text: '벌점 초과',
    color: 'warning',
  },
  danger: {
    text: '경고 대상',
    color: 'danger',
  },
};

export const MemberManagementList: ComponentStory<typeof Table> = () => (
  <Table
    caption="스터디 멤버 관리"
    columnsWidth={['*', '15%', '15%', '13%', '13%', '13%', '13%']}
  >
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>닉네임</Table.HeadCell>
        <Table.HeadCell>상태</Table.HeadCell>
        <Table.HeadCell>가입일</Table.HeadCell>
        <Table.HeadCell>활동일</Table.HeadCell>
        <Table.HeadCell>
          미 체크인
          <Icon iconName="star" size="large" />
        </Table.HeadCell>
        <Table.HeadCell>
          미 체크아웃
          <Icon iconName="star" size="large" />
        </Table.HeadCell>
        <Table.HeadCell>벌점</Table.HeadCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {memberManagementList.map((props) => (
        <Table.Row key={props.id}>
          <Table.BodyCell sx={{ justifyContent: 'flex-start' }}>
            <Icon iconName="anonymous" size="large" color="borderLine" />
            <Text ellipsis>{props.nickName}</Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>
              <Text.Highlight
                as="strong"
                sx={{ fontWeight: 'bold', color: STATUS[props.status].color }}
              >
                {STATUS[props.status].text}
              </Text.Highlight>
            </Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>{props.dateOfSubscription}</Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>{props.periodOfActivity}일</Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>{props.uncheckin}회</Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>{props.uncheckout}회</Text>
          </Table.BodyCell>
          <Table.BodyCell>
            <Text ellipsis>{props.penaltyPoint}점</Text>
          </Table.BodyCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
