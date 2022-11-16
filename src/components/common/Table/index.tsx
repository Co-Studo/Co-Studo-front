import React, { createContext, ReactElement, useContext } from 'react';

import BasicTable from '@components/common/Table/BasicTable';
import ColumnTable, {
  RowProps,
  CellProps,
} from '@components/common/Table/ColumnTable';
import RowTable from '@components/common/Table/RowTable';
import { offscreen } from '@styles/commonStyles';

type TableContextValue = {
  headScope?: 'col' | 'row';
};

const TableContext = createContext<TableContextValue | null>(null);
TableContext.displayName = 'TableContext';

const useTableContext = () => {
  const context = useContext(TableContext);

  if (!context)
    throw new Error(
      'useTableContext should be used within TableContext.Provider',
    );

  return context;
};

type TableProps = {
  caption: string;
  headScope?: 'col' | 'row';
  columnsWidth?: string[];
  sortValues?: { [key in string]: (string | number)[] };
  children:
    | ReactElement<RowProps>
    | (ReactElement<RowProps> | ReactElement<RowProps>[])[];
};

const getTableBody = (headScope) => {
  switch (headScope) {
    case 'col':
      return ColumnTable;
    case 'row':
      return RowTable;
    default:
      return BasicTable;
  }
};

const Table = ({
  caption,
  headScope,
  columnsWidth,
  sortValues,
  children,
}: TableProps) => {
  const Component = getTableBody(headScope);

  return (
    <TableContext.Provider value={{ headScope }}>
      <table>
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
        <Component sortValues={sortValues}>
          {React.Children.toArray(children) as ReactElement[]}
        </Component>
      </table>
    </TableContext.Provider>
  );
};

const Row = (props: RowProps) => {
  const { headScope } = useTableContext();
  const { Row: Component } = getTableBody(headScope);

  return <Component {...props} />;
};

const Cell = (props: CellProps) => {
  const { headScope } = useTableContext();
  const { Cell: Component } = getTableBody(headScope);

  return <Component {...props} />;
};

Table.Row = Row;
Table.Cell = Cell;

export default Table;
