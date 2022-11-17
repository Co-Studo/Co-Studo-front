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

type RowTableProps = {
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

const RowTable = ({ children }: RowTableProps) => <tbody>{children}</tbody>;

type RowProps = {
  sortValues?: { [key in string]: (string | number)[] };
  children: ReactElement<CellProps> | ReactElement<CellProps>[];
};

type SortState = {
  name: string;
  direction: typeof DIRECTION[keyof typeof DIRECTION];
  cellIndices: number[];
} | null;

type SortConfig = {
  sortValues?: { [key in string]: (string | number)[] };
  sortState: SortState;
  setSortState: Dispatch<SetStateAction<SortState>>;
};

const Row = ({ sortValues, children }: RowProps) => {
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { sortValues, sortState, setSortState };
  let Children = React.Children.toArray(children);
  if (sortState)
    Children = sortState.cellIndices.map((index) => Children[index]);

  return (
    <tr>
      {Children.map((child, index) =>
        cloneElement(child as ReactElement, {
          isHeadCell: index === 0,
          sortConfig,
        }),
      )}
    </tr>
  );
};

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  isHeadCell?: boolean;
  sortConfig: SortConfig;
  children: ReactNode;
};

const Cell = ({
  name,
  isHeadCell,
  sortConfig,
  children,
  ...restProps
}: CellProps) => {
  const Element = isHeadCell ? 'th' : 'td';
  const { sortValues, sortState, setSortState } = sortConfig;
  const direction =
    sortState &&
    sortState.name === name &&
    sortState.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getCellIndices = (cellName: string) => {
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
    const cellIndices = sortedValuesByName.map((sortedValueByName) => {
      const prevIndex = sortValuesByName.findIndex(
        (sortValueByName) => sortValueByName === sortedValueByName,
      );
      sortValuesByName[prevIndex] = null;

      return prevIndex;
    });

    return cellIndices;
  };

  const sortCells = (cellName: string) => {
    const newSortState = {
      name: cellName,
      direction,
      cellIndices: getCellIndices(cellName),
    };
    setSortState(newSortState);
  };

  return (
    <Element scope={isHeadCell ? 'row' : undefined} {...restProps}>
      {name ? (
        <Button type="button" onClick={() => sortCells(name)}>
          {children}
        </Button>
      ) : (
        children
      )}
    </Element>
  );
};

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
