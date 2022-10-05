import { ReactElement } from 'react';

import * as S from '@components/common/Row/row.styled';

type RowProps = {
  title: ReactElement | string;
  description?: ReactElement | string;
  left?: ReactElement;
  right?: ReactElement;
};

const Row = ({ title, description, left, right }: RowProps) => {
  const isString = (prop) => prop && typeof prop === 'string';
  const wrapString = (prop) => isString(prop) && <S.Box>{prop}</S.Box>; // TODO: Text 컴포넌트로 교체

  return (
    <S.Container>
      {left}
      <S.Main>
        {isString(title) ? wrapString(title) : title}
        {isString(description) ? wrapString(description) : description}
      </S.Main>
      {right}
    </S.Container>
  );
};

export default Row;
