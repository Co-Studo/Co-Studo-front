import React, {
  ReactNode,
  cloneElement,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import Button from '@components/common/Button';
import { offscreen } from '@styles/commonStyles';

const DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export type ColumnTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortValues?: { [key in string]: (string | number)[] };
  children: (ReactElement | ReactElement[])[];
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

const ColumnTable = ({
  caption,
  columnsWidth,
  sortValues,
  children,
  ...restProps
}: ColumnTableProps) => {
  const Children = React.Children.toArray(children);
  const [headRow, bodyRows] = [Children[0], Children.splice(1)];
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { sortValues, sortState, setSortState };

  return (
    <table {...restProps}>
      <caption css={offscreen}>{caption}</caption>
      {columnsWidth && (
        <colgroup>
          {columnsWidth.map((width, index) => (
            // 유동적으로 변하지 않는 리스트
            // eslint-disable-next-line react/no-array-index-key
            <col key={index} width={width} />
          ))}
        </colgroup>
      )}
      <thead>
        {cloneElement(headRow as ReactElement, {
          sortConfig,
        })}
      </thead>
      <tbody>
        {sortState
          ? sortState.rowIndices.map((index) => bodyRows[index])
          : bodyRows}
      </tbody>
    </table>
  );
};

export type RowProps = {
  sortConfig?: SortConfig;
  children: ReactElement | ReactElement[];
};

const Row = ({ sortConfig, children, ...restProps }: RowProps) => (
  <tr {...restProps}>
    {sortConfig
      ? React.Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { sortConfig }),
        )
      : children}
  </tr>
);

export type CellProps = {
  colSpan?: number;
  rowSpan?: number;
  name?: string;
  sortConfig?: SortConfig;
  children: ReactNode;
};

interface HeadCellProps extends CellProps {
  sortConfig: SortConfig;
}

const HeadCell = ({
  name,
  sortConfig,
  children,
  ...restProps
}: HeadCellProps) => {
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

const Cell = ({ name, sortConfig, children, ...restProps }: CellProps) =>
  sortConfig ? (
    <HeadCell sortConfig={sortConfig} name={name} {...restProps}>
      {children}
    </HeadCell>
  ) : (
    <BodyCell {...restProps}>{children}</BodyCell>
  );

ColumnTable.Row = Row;
ColumnTable.Cell = Cell;

export default ColumnTable;
