import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from 'styled-components';

import { ColumnTable, RowTable, BasicTable } from '@components/common/Table';
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

const tableCSS = css`
  width: 100%;
  overflow: hidden;
  border-top: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
  table-layout: fixed;
`;
const rowCSS = css`
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
`;
const cellCSS = css`
  margin: 1.7rem 2rem;
`;
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
  padding: 1.7rem 2rem;
`;

export const Column: ComponentStory<typeof ColumnTable> = () => (
  <ColumnTable
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '85px']}
    sortValues={sortValues}
    css={tableCSS}
  >
    <ColumnTable.Row css={rowCSS}>
      <ColumnTable.Cell css={headCellCSS}>
        <span>번호</span>
      </ColumnTable.Cell>
      <ColumnTable.Cell css={headCellCSS}>
        <span>제목</span>
      </ColumnTable.Cell>
      <ColumnTable.Cell name="writer" css={headCellCSS}>
        <span>작성자</span>
      </ColumnTable.Cell>
      <ColumnTable.Cell name="date" css={headCellCSS}>
        <span>날짜</span>
      </ColumnTable.Cell>
      <ColumnTable.Cell name="view" css={headCellCSS}>
        <span>조회수</span>
      </ColumnTable.Cell>
    </ColumnTable.Row>
    {noticeList.map(({ id, title, writer, date, view }) => (
      <ColumnTable.Row key={id} css={rowCSS}>
        <ColumnTable.Cell>
          <Text css={cellCSS} ellipsis>
            {id}
          </Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell>
          <Text css={cellCSS} ellipsis>
            {title}
          </Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell>
          <Text css={cellCSS} ellipsis>
            {writer}
          </Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell>
          <Text css={cellCSS} ellipsis>
            {date}
          </Text>
        </ColumnTable.Cell>
        <ColumnTable.Cell>
          <Text css={cellCSS} ellipsis>
            {view}
          </Text>
        </ColumnTable.Cell>
      </ColumnTable.Row>
    ))}
  </ColumnTable>
);

export const Row: ComponentStory<typeof RowTable> = () => (
  <RowTable
    caption="공지사항"
    columnsWidth={['8%', '24%', '24%', '24%', '24%']}
    sortValues={sortValues}
    css={tableCSS}
  >
    <RowTable.Row css={rowCSS}>
      <RowTable.Cell css={headCellCSS}>
        <span>번호</span>
      </RowTable.Cell>
      {noticeList.map(({ id }) => (
        <RowTable.Cell key={id} css={headCellCSS}>
          <Text css={cellCSS} ellipsis>
            {id}
          </Text>
        </RowTable.Cell>
      ))}
    </RowTable.Row>
    <RowTable.Row css={rowCSS}>
      <RowTable.Cell css={headCellCSS}>
        <span>제목</span>
      </RowTable.Cell>
      {noticeList.map(({ id, title }) => (
        <RowTable.Cell key={id} css={headCellCSS}>
          <Text css={cellCSS} ellipsis>
            {title}
          </Text>
        </RowTable.Cell>
      ))}
    </RowTable.Row>
    <RowTable.Row css={rowCSS}>
      <RowTable.Cell name="writer" css={headCellCSS}>
        <span>작성자</span>
      </RowTable.Cell>
      {noticeList.map(({ id, writer }) => (
        <RowTable.Cell key={id} css={headCellCSS}>
          <Text css={cellCSS} ellipsis>
            {writer}
          </Text>
        </RowTable.Cell>
      ))}
    </RowTable.Row>
    <RowTable.Row css={rowCSS}>
      <RowTable.Cell name="date" css={headCellCSS}>
        <span>날짜</span>
      </RowTable.Cell>
      {noticeList.map(({ id, date }) => (
        <RowTable.Cell key={id} css={headCellCSS}>
          <Text css={cellCSS} ellipsis>
            {date}
          </Text>
        </RowTable.Cell>
      ))}
    </RowTable.Row>
    <RowTable.Row css={rowCSS}>
      <RowTable.Cell name="view" css={headCellCSS}>
        <span>조회수</span>
      </RowTable.Cell>
      {noticeList.map(({ id, view }) => (
        <RowTable.Cell key={id} css={headCellCSS}>
          <Text css={cellCSS} ellipsis>
            {view}
          </Text>
        </RowTable.Cell>
      ))}
    </RowTable.Row>
  </RowTable>
);

export const Basic: ComponentStory<typeof BasicTable> = () => (
  <BasicTable
    caption="공지사항"
    columnsWidth={['85px', '*', '120px', '120px', '85px']}
    css={tableCSS}
  >
    {noticeList.map(({ id, title, writer, date, view }) => (
      <BasicTable.Row key={id} css={rowCSS}>
        <BasicTable.Cell>
          <Text css={cellCSS} ellipsis>
            {id}
          </Text>
        </BasicTable.Cell>
        <BasicTable.Cell>
          <Text css={cellCSS} ellipsis>
            {title}
          </Text>
        </BasicTable.Cell>
        <BasicTable.Cell>
          <Text css={cellCSS} ellipsis>
            {writer}
          </Text>
        </BasicTable.Cell>
        <BasicTable.Cell>
          <Text css={cellCSS} ellipsis>
            {date}
          </Text>
        </BasicTable.Cell>
        <BasicTable.Cell>
          <Text css={cellCSS} ellipsis>
            {view}
          </Text>
        </BasicTable.Cell>
      </BasicTable.Row>
    ))}
  </BasicTable>
);
