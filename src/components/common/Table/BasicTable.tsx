import { ReactElement, ReactNode } from 'react';

type TableProps = {
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

const BasicTable = ({ children }: TableProps) => <tbody>{children}</tbody>;

export type RowProps = {
  children: ReactElement<CellProps> | ReactElement<CellProps>[];
};

const Row = ({ children }: RowProps) => <tr>{children}</tr>;

export type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  children: ReactNode;
};

const Cell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

BasicTable.Row = Row;
BasicTable.Cell = Cell;

export default BasicTable;
