import React, {
  ReactNode,
  cloneElement,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import Button from '@components/common/Button';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

type ColumnTableProps = {
  sortValues?: { [key in string]: (string | number)[] };
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

type SortState = {
  name: string;
  direction: typeof DIRECTION[keyof typeof DIRECTION];
  rowIndices: number[];
} | null;

type SortConfig = {
  sortValues?: { [key in string]: (string | number)[] };
  sortState: SortState;
  setSortState: Dispatch<SetStateAction<SortState>>;
};

const ColumnTable = ({ sortValues, children }: ColumnTableProps) => {
  const Children = React.Children.toArray(children);
  const [headRow, bodyRows] = [Children[0], Children.splice(1)];
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { sortValues, sortState, setSortState };

  return (
    <>
      <thead>
        {cloneElement(headRow as ReactElement, {
          isHeadCell: true,
          sortConfig,
        })}
      </thead>
      <tbody>
        {sortState
          ? sortState.rowIndices.map((index) => bodyRows[index])
          : bodyRows}
      </tbody>
    </>
  );
};

export type RowProps = {
  isHeadCell?: boolean;
  sortConfig?: SortConfig;
  children: ReactElement<CellProps> | ReactElement<CellProps>[];
};

const Row = ({ isHeadCell, sortConfig, children, ...restProps }: RowProps) => (
  <tr {...restProps}>
    {isHeadCell
      ? React.Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { isHeadCell, sortConfig }),
        )
      : children}
  </tr>
);

export type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  isHeadCell?: boolean;
  sortConfig: SortConfig;
  children: ReactNode;
};

const HeadCell = ({ name, children, sortConfig, ...restProps }: CellProps) => {
  const { sortValues, sortState, setSortState } = sortConfig;
  const direction =
    sortState &&
    sortState.name === name &&
    sortState.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getRowIndices = (cellName: string) => {
    if (!sortValues || !sortValues[cellName])
      throw new Error('Please set sortValues[name] in Table props.');

    const sortValuesByName: (number | string | null)[] = [
      ...sortValues[cellName],
    ];
    const sortedValuesByName = [...sortValues[cellName]].sort((a, b) => {
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

  const sortRows = (cellName: string) => {
    const newSortState = {
      name: cellName,
      direction,
      rowIndices: getRowIndices(cellName),
    };
    setSortState(newSortState);
  };

  return (
    <th
      scope="col"
      data-sort={sortState?.name === name ? sortState?.direction : undefined}
      {...restProps}
    >
      {name ? (
        <Button type="button" onClick={() => sortRows(name)}>
          {children}
        </Button>
      ) : (
        children
      )}
    </th>
  );
};

const BodyCell = ({ children, ...restProps }: CellProps) => (
  <td {...restProps}>{children}</td>
);

const Cell = ({ name, isHeadCell, children, ...restProps }: CellProps) =>
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
