import { ReactElement } from 'react';

import * as S from '@components/common/Row/row.styled';

type RowProps = {
  title: ReactElement | string;
  description?: ReactElement | string;
  left?: ReactElement;
  right?: ReactElement;
};

const Row = ({ title, description, left, right }: RowProps) => (
  <S.Container>
    <S.Box>{left}</S.Box>
    <S.Main>
      <S.Box>{title}</S.Box>
      <S.Box>{description}</S.Box>
    </S.Main>
    <S.Box>{right}</S.Box>
  </S.Container>
);

export default Row;
