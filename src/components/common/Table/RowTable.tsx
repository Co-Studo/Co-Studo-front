import React, { cloneElement, ReactElement, useState } from 'react';

import Cell, { SortState, SortConfig } from '@components/common/Table/Cell';
import { offscreen } from '@styles/commonStyles';

export type RowTableProps = {
  caption: string;
  columnsWidth?: string[];
  valuesToSort?: { [key in string]: (string | number)[] };
  children: ReactElement | ReactElement[];
};

const RowTable = ({
  caption,
  columnsWidth,
  valuesToSort,
  children,
  ...restProps
}: RowTableProps) => {
  const [sortState, setSortState] = useState<SortState>(null);
  const sortConfig = { valuesToSort, sortState, setSortState };

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
      <tbody>
        {React.Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, { scope: 'row', sortConfig }),
        )}
      </tbody>
    </table>
  );
};

type RowProps = {
  scope?: 'row';
  sortConfig?: SortConfig;
  children: (ReactElement | ReactElement[])[];
};

const Row = ({ scope, sortConfig, children, ...restProps }: RowProps) => {
  const Children = React.Children.toArray(children);
  const [headCell, bodyCells] = [Children[0], Children.splice(1)];

  return (
    <tr {...restProps}>
      {cloneElement(headCell as ReactElement, { scope, sortConfig })}
      {sortConfig?.sortState
        ? sortConfig.sortState.indicesToSort.map((index) => bodyCells[index])
        : bodyCells}
    </tr>
  );
};

RowTable.Row = Row;
RowTable.Cell = Cell;

export default RowTable;
