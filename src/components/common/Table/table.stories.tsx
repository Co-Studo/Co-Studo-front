import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from 'styled-components';

import { ColumnTable, RowTable } from '@components/common/Table';
import Text from '@components/common/Text';

export default {
  title: 'common/Table',
  component: ColumnTable,
} as ComponentMeta<typeof ColumnTable>;

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

const rowCSS = css`
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
`;
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

export const Column: ComponentStory<typeof ColumnTable> = () => (
  <ColumnTable
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '85px']}
    sortValues={sortValues}
    css={css`
      width: 100%;
      overflow: hidden;
      border-top: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
      table-layout: fixed;
    `}
  >
    <ColumnTable.Row css={rowCSS}>
      <ColumnTable.Cell css={headCellCSS}>번호</ColumnTable.Cell>
      <ColumnTable.Cell css={headCellCSS}>제목</ColumnTable.Cell>
      <ColumnTable.Cell name="writer" css={headCellCSS}>
        작성자
      </ColumnTable.Cell>
      <ColumnTable.Cell name="date" css={headCellCSS}>
        날짜
      </ColumnTable.Cell>
      <ColumnTable.Cell name="view" css={headCellCSS}>
        조회수
      </ColumnTable.Cell>
    </ColumnTable.Row>
    {noticeList.map(({ id, title, writer, date, view }) => (
      <ColumnTable.Row key={id} css={rowCSS}>
        <ColumnTable.Cell css={cellCSS}>
          <Text ellipsis>{id}</Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell css={cellCSS}>
          <Text ellipsis>{title}</Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell css={cellCSS}>
          <Text ellipsis>{writer}</Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell css={cellCSS}>
          <Text ellipsis>{date}</Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell css={cellCSS}>
          <Text ellipsis>{view}</Text>
        </ColumnTable.Cell>
      </ColumnTable.Row>
    ))}
  </ColumnTable>
);