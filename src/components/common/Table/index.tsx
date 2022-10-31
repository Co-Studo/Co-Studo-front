/* eslint-disable react/no-array-index-key */
import { ReactNode, ReactElement, Children } from 'react';
import { css, useTheme } from 'styled-components';

import Text, { TextSX } from '@components/common/Text';
import { IPalette } from '@styles/theme';

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

type TrSX = {
  background?: keyof IPalette;
};

export interface TrProps extends TableDefaultProps {
  sx?: TrSX;
}

const Tr = ({ sx, children }: TrProps) => {
  const theme = useTheme();

  return (
    <tr
      css={{
        borderBottom: `0.1rem solid ${theme.palette.borderLine}`,
        ...sx,
      }}
    >
      {children}
    </tr>
  );
};

type CellSX = {
  width?: string;
  justifyContent?: 'center' | 'flex-start';
  textOverflow?: 'ellipsis' | 'clip';
  whiteSpace?: 'nowrap' | 'normal';
};

const defaultCellSX: TextSX = {
  textAlign: 'center',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const cellCss = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '1.7rem 2rem',
  overflow: 'hidden',
};

type ThProps = {
  colSpan?: number;
  sx?: CellSX;
  children: ReactNode;
};

const Th = ({ sx, children, ...restProps }: ThProps) => (
  <th {...restProps}>
    <div css={{ ...cellCss, justifyContent: 'center', ...sx }}>
      {Children.map(children, (child) =>
        typeof child === 'string' ? (
          <Text.Highlight as="b" sx={{ ...defaultCellSX, fontWeight: 'bold' }}>
            {child}
          </Text.Highlight>
        ) : (
          child
        ),
      )}
    </div>
  </th>
);

export interface TdProps extends ThProps {
  rowSpan?: number;
}

const Td = ({ sx, children, ...restProps }: TdProps) => (
  <td {...restProps}>
    <div css={{ ...cellCss, ...sx }}>
      {Children.map(children, (child) =>
        typeof child === 'string' ? (
          <Text as="span" sx={defaultCellSX}>
            {child}
          </Text>
        ) : (
          child
        ),
      )}
    </div>
  </td>
);

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
