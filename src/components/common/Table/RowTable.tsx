import { ReactNode, ReactElement, Children, cloneElement } from 'react';

type TableProps = {
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

const RowTable = ({ children }: TableProps) => <tbody>{children}</tbody>;

type RowProps = {
  children: ReactElement<CellProps> | ReactElement<CellProps>[];
};

const Row = ({ children }: RowProps) => (
  <tr>
    {Children.toArray(children).map((child, index) =>
      cloneElement(child as ReactElement, { isHeadCell: index === 0 }),
    )}
  </tr>
);

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  isHeadCell?: boolean;
  children: ReactNode;
};

const Cell = ({ isHeadCell, children, ...restProps }: CellProps) => {
  const Element = isHeadCell ? 'th' : 'td';
  const scope = isHeadCell ? 'row' : undefined;

  return (
    <Element scope={scope} {...restProps}>
      {children}
    </Element>
  );
};

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
