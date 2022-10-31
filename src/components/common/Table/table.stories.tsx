import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '@components/common/Table';

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
  },
  {
    id: 2,
    title: '스터디 전체 공지 드립니다.',
    writer: '파크크크크',
    date: '1시간 전',
    view: 11,
    isFixed: true,
    isNew: true,
  },
];

export const Default: ComponentStory<typeof Table> = () => (
  <Table caption="공지사항" cellWidth={['85px', '*', '120px', '120px', '85px']}>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>번호</Table.Th>
        <Table.Th>제목</Table.Th>
        <Table.Th>작성자</Table.Th>
        <Table.Th>날짜</Table.Th>
        <Table.Th>조회수</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      {noticeList.reverse().map(({ id, title, writer, date, view }) => (
        <Table.Tr key={id}>
          <Table.Td>{id}</Table.Td>
          <Table.Td>{title}</Table.Td>
          <Table.Td>
            {writer}
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="arrow"
              css={{ height: '20px' }}
            />
          </Table.Td>
          <Table.Td>{date}</Table.Td>
          <Table.Td>{view}</Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  </Table>
);
