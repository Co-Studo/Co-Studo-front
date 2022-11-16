import React, {
  ReactNode,
  createContext,
  useContext,
  cloneElement,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

type SortConfig = {
  name: string;
  direction: typeof DIRECTION[keyof typeof DIRECTION];
  rowIndices: number[];
} | null;

type ColumnTableContextValue = {
  sortValues?: { [key in string]: (string | number)[] };
  sortConfig: SortConfig;
  setSortConfig: Dispatch<SetStateAction<SortConfig>>;
};

const ColumnTableContext = createContext<ColumnTableContextValue | null>(null);
ColumnTableContext.displayName = 'ColumnTableContext';

const useColumnTableContext = () => {
  const context = useContext(ColumnTableContext);

  if (!context)
    throw new Error(
      'useColumnTableContext should be used within ColumnTableContext.Provider',
    );

  return context;
};

type ColumnTableProps = {
  sortValues?: { [key in string]: (string | number)[] };
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

const ColumnTable = ({ sortValues, children }: ColumnTableProps) => {
  const Children = React.Children.toArray(children);
  const [headRow, bodyRows] = [Children[0], Children.splice(1)];
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  return (
    <ColumnTableContext.Provider
      value={{ sortValues, sortConfig, setSortConfig }}
    >
      <thead>
        {cloneElement(headRow as ReactElement, { isHeadCell: true })}
      </thead>
      <tbody>
        {sortConfig
          ? sortConfig.rowIndices.map((index) => bodyRows[index])
          : bodyRows}
      </tbody>
    </ColumnTableContext.Provider>
  );
};

export type RowProps = {
  isHeadCell?: boolean;
  children: ReactElement<CellProps> | ReactElement<CellProps>[];
};

const Row = ({ isHeadCell, children }: RowProps) => (
  <tr>
    {isHeadCell
      ? React.Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { isHeadCell }),
        )
      : children}
  </tr>
);

export type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  isHeadCell?: boolean;
  children: ReactNode;
};

const HeadCell = ({ name, children, ...restProps }: CellProps) => (
  <th scope="col" {...restProps}>
    {children}
  </th>
);

const BodyCell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

const Cell = ({ isHeadCell, name, children, ...restProps }: CellProps) =>
  isHeadCell ? (
    <HeadCell name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

ColumnTable.Row = Row;
ColumnTable.Cell = Cell;

export default ColumnTable;
