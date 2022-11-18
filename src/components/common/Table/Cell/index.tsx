import { ReactNode, Dispatch, SetStateAction } from 'react';

import Button from '@components/common/Button';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export type SortState = {
  name: string;
  direction: typeof DIRECTION[keyof typeof DIRECTION];
  indicesToSort: number[];
} | null;

export type SortConfig = {
  valuesToSort?: { [key in string]: (string | number)[] };
  sortState: SortState;
  setSortState: Dispatch<SetStateAction<SortState>>;
};

type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  sortConfig?: SortConfig;
  children: ReactNode;
};

interface HeadCellProps extends CellProps {
  scope?: 'col' | 'row';
  sortConfig: SortConfig;
}

const HeadCell = ({
  name,
  scope,
  sortConfig,
  children,
  ...restProps
}: HeadCellProps) => {
  const { valuesToSort, sortState, setSortState } = sortConfig;
  const direction =
    sortState &&
    sortState.name === name &&
    sortState.direction === DIRECTION.DESCENDING
      ? DIRECTION.ASCENDING
      : DIRECTION.DESCENDING;

  const getIndicesToSort = (cellName: string) => {
    if (!valuesToSort || !valuesToSort[cellName])
      throw new Error('Please set valuesToSort[name] in Table props.');

    const valuesToSortByName: (number | string | null)[] = [
      ...valuesToSort[cellName],
    ];
    const sortedValuesByName = [...valuesToSort[cellName]].sort((a, b) => {
      if (a > b) return direction === DIRECTION.ASCENDING ? 1 : -1;
      if (a < b) return direction === DIRECTION.ASCENDING ? -1 : 1;
      return 0;
    });
    const indicesToSort = sortedValuesByName.map((sortedValueByName) => {
      const prevIndex = valuesToSortByName.findIndex(
        (sortValueByName) => sortValueByName === sortedValueByName,
      );
      valuesToSortByName[prevIndex] = null;

      return prevIndex;
    });

    return indicesToSort;
  };

  const sortTable = (cellName: string) => {
    const newSortState = {
      name: cellName,
      direction,
      indicesToSort: getIndicesToSort(cellName),
    };
    setSortState(newSortState);
  };

  return (
    <th
      scope={scope}
      data-sort={sortState?.name === name ? sortState?.direction : undefined}
      {...restProps}
    >
      {name ? (
        <Button type="button" onClick={() => sortTable(name)}>
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

const Cell = ({ name, sortConfig, children, ...restProps }: CellProps) =>
  sortConfig ? (
    <HeadCell sortConfig={sortConfig} name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

export default Cell;
