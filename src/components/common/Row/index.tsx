import { ReactElement } from 'react';

type RowProps = {
  content?: ReactElement;
  left?: ReactElement;
  right?: ReactElement;
};

type RowContentProps = {
  top?: ReactElement | string;
  bottom?: ReactElement | string;
  noGap?: boolean;
};

const Row = ({ content, left, right }: RowProps) => (
  <div
    css={{
      display: 'flex',
      gap: '0.5rem',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    {left}
    {content && <div css={{ display: 'flex', flexGrow: 1 }}>{content}</div>}
    {right}
  </div>
);

const Column2Row = ({ top, bottom, noGap }: RowContentProps) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      ...(noGap ? {} : { gap: '0.5rem' }),
    }}
  >
    {top}
    {bottom}
  </div>
);

Row.Column2Row = Column2Row;

export default Row;
