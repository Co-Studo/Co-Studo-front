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

export type RowTableProps = {
  caption: string;
  columnsWidth?: string[];
  sortValues?: { [key in string]: (string | number)[] };
  children: ReactElement | ReactElement[];
};

const RowTable = ({
  caption,
  columnsWidth,
  sortValues,
  children,
  ...restProps
}: RowTableProps) => (
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
    <tbody>
      {React.Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement, { sortValues }),
      )}
    </tbody>
  </table>
);

type RowProps = {
  sortValues?: { [key in string]: (string | number)[] };
  children: (ReactElement | ReactElement[])[];
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

const Row = ({ sortValues, children, ...restProps }: RowProps) => {
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { sortValues, sortState, setSortState };
  let Children = React.Children.toArray(children);
  if (sortState)
    Children = sortState.cellIndices.map((index) => Children[index]);
  const isHeadCell = (cellIndex: number) => cellIndex === 0;

  return (
    <tr {...restProps}>
      {Children.map((child, index) =>
        cloneElement(child as ReactElement, {
          sortConfig: isHeadCell(index) ? sortConfig : undefined,
        }),
      )}
    </tr>
  );
};

type CellProps = {
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
    <th scope="row" {...restProps}>
      {name ? (
        <Button type="button" onClick={() => sortCells(name)}>
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

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
