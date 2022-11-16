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

const HeadCell = ({ name, children, ...restProps }: CellProps) => {
  const { sortValues, sortConfig, setSortConfig } = useColumnTableContext();

  const direction =
    sortConfig?.name === name && sortConfig?.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getRowIndices = (_sortValuesByName: (number | string)[]) => {
    const sortValuesByName: (number | string | null)[] = [..._sortValuesByName];
    const sortedValuesByName = [..._sortValuesByName].sort((a, b) => {
      if (a > b) return direction === DIRECTION.ASCENDING ? 1 : -1;
      if (a < b) return direction === DIRECTION.ASCENDING ? -1 : 1;
      return 0;
    });
    const rowIndices = sortedValuesByName.map((sortedValueByName) => {
      const prevIndex = sortValuesByName.findIndex(
        (sortValueByName) => sortValueByName === sortedValueByName,
      );
      sortValuesByName[prevIndex] = null;

      return prevIndex;
    });

    return rowIndices;
  };

  const sortRows = () => {
    if (!sortValues || !name) return;

    const newSortConfig = {
      name,
      direction,
      rowIndices: getRowIndices(sortValues[name]),
    };
    setSortConfig(newSortConfig);
  };

  return (
    <th
      scope="col"
      className={sortConfig?.name === name ? sortConfig?.direction : undefined}
      onClick={sortRows}
      {...restProps}
    >
      {children}
    </th>
  );
};

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
