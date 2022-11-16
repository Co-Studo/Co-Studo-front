import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css, useTheme } from 'styled-components';

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
    isFixed: false,
    isNew: true,
    commentCount: 14,
  },
  {
    id: 2,
    title: '스터디 전체 공지 드립니다.',
    writer: '도니',
    date: '2022.09.20',
    view: 110,
    isFixed: true,
    isNew: true,
    commentCount: 0,
  },
  {
    id: 3,
    title: '스터디 전체 공지 드립니다.',
    writer: '햄디',
    date: '2022.09.20',
    view: 9,
    isFixed: true,
    isNew: true,
    commentCount: 0,
  },
  {
    id: 4,
    title: '스터디 전체 공지 드립니다.',
    writer: '제이미',
    date: '2022.09.22',
    view: 9,
    isFixed: true,
    isNew: true,
    commentCount: 0,
  },
];

const sortValues = {
  writer: noticeList.map(({ writer }) => writer),
  date: noticeList.map(({ date }) => {
    const numberDate = Number(date.split('.').join(''));
    return numberDate.toString().length < 8 ? numberDate * 10 : numberDate;
  }),
  view: noticeList.map(({ view }) => Number(view)),
};

export const ColumnTable: ComponentStory<typeof Table> = () => {
  const theme = useTheme();
  const rowCSS = { borderBottom: `0.1rem solid ${theme.palette.borderLine}` };
  const cellCSS = { padding: '1.7rem 2rem' };
  const headCellCSS = css`
    &[data-sort='ascending'],
    &[data-sort='descending'] {
      font-weight: bold;
    }
    &[data-sort='ascending']:after {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      border-radius: 50%;
      background: #0091ff;
    }
    &[data-sort='descending']:after {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      border-radius: 50%;
      background: #ff0000;
    }
    ${cellCSS}
  `;

  return (
    <Table
      caption="공지사항"
      headScope="col"
      columnsWidth={['85px', '*', '120px', '120px', '85px']}
      sortValues={sortValues}
      css={{
        width: '100%',
        overflow: 'hidden',
        borderTop: `0.1rem solid ${theme.palette.borderLine}`,
        tableLayout: 'fixed',
      }}
    >
      <Table.Row css={rowCSS}>
        <Table.Cell css={headCellCSS}>번호</Table.Cell>
        <Table.Cell css={headCellCSS}>제목</Table.Cell>
        <Table.Cell name="writer" css={headCellCSS}>
          작성자
        </Table.Cell>
        <Table.Cell name="date" css={headCellCSS}>
          날짜
        </Table.Cell>
        <Table.Cell name="view" css={headCellCSS}>
          조회수
        </Table.Cell>
      </Table.Row>
      {noticeList.map(({ id, title, writer, date, view }) => (
        <Table.Row key={id} css={rowCSS}>
          <Table.Cell css={cellCSS}>
            <Text ellipsis>{id}</Text>
          </Table.Cell>
          <Table.Cell css={cellCSS}>
            <Text ellipsis>{title}</Text>
          </Table.Cell>
          <Table.Cell css={cellCSS}>
            <Text ellipsis>{writer}</Text>
          </Table.Cell>
          <Table.Cell css={cellCSS}>
            <Text ellipsis>{date}</Text>
          </Table.Cell>
          <Table.Cell css={cellCSS}>
            <Text ellipsis>{view}</Text>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table>
  );
};
