import { ReactNode, ReactElement, ComponentProps } from 'react';
import { css } from 'styled-components';

import FlexBox from '@components/common/FlexBox';
import Text from '@components/common/Text';

type TableDefaultProps = {
  children: ReactElement | ReactElement[];
};

export interface TableProps extends TableDefaultProps {
  caption: string;
  cellWidth?: string[];
  children: ReactElement | ReactElement[];
}

const Table = ({ caption, cellWidth, children }: TableProps) => (
  <table
    css={css`
      width: 100%;
      overflow: hidden;
      border-top: ${({ theme }) => `0.1rem solid ${theme.palette.borderLine}`};
      table-layout: fixed;
    `}
  >
    <caption
      css={css`
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0 0);
      `}
    >
      {caption}
    </caption>
    {cellWidth && (
      <colgroup>
        {cellWidth?.map((width, index) => (
          <col key={index} width={width} />
        ))}
      </colgroup>
    )}
    {children}
  </table>
);

const Thead = ({ children }: TableDefaultProps) => <thead>{children}</thead>;

const Tbody = ({ children }: TableDefaultProps) => (
  <tbody
    css={css`
      tr:hover {
        background: ${({ theme }) => theme.palette.hoverColor};
      }
    `}
  >
    {children}
  </tbody>
);

const Tr = ({ children }: TableDefaultProps) => (
  <tr
    css={css`
      border-bottom: ${({ theme }) =>
        `0.1rem solid ${theme.palette.borderLine}`};
    `}
  >
    {children}
  </tr>
);

type CellSX = {
  width?: string;
  justifyContent?: 'center' | 'flex-start';
};

const flexCss = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
} as Pick<ComponentProps<typeof FlexBox>, 'sx'>;

type ThProps = {
  colSpan?: number;
  sx?: CellSX;
  children: ReactNode;
};

const Th = ({ sx = {}, children, ...restProps }: ThProps) => (
  <th scope="col" css={{ padding: '1.7rem 2rem' }} {...restProps}>
    <Text as="div" sx={{ fontWeight: 'bold' }}>
      <FlexBox sx={{ ...flexCss, ...sx }}>{children}</FlexBox>
    </Text>
  </th>
);

export interface TdProps extends ThProps {
  rowSpan?: number;
}

const Td = ({ sx = {}, children, ...restProps }: TdProps) => (
  <td css={{ padding: '1.7rem 2rem' }} {...restProps}>
    <FlexBox sx={{ ...flexCss, ...sx }}>{children}</FlexBox>
  </td>
);

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
