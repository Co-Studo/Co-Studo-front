import styled from 'styled-components';

import {
  SpacingSX,
  isSpacingProp,
  getSpacingCssProps,
} from '@components/common/FlexBox/spacing';

type SizeSX = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

type StyleSX = {
  background?: string;
};

export interface FlexBoxSX extends SizeSX, SpacingSX, StyleSX {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
}

type FlexBoxProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  sx?: FlexBoxSX;
};

const Wrapper = styled.div`
  display: flex;
`;

const getFlexCssProperties = (sx: FlexBoxSX) =>
  Object.keys(sx).reduce(
    (css, key) =>
      isSpacingProp(key)
        ? { ...css, ...getSpacingCssProps(key, sx[key]) }
        : { ...css, [key]: sx[key] },
    {},
  );

const FlexBox = (props: FlexBoxProps) => {
  const { sx, as = 'div', children } = props;
  const css = sx && getFlexCssProperties(sx);
  return (
    <Wrapper as={as} css={css}>
      {children}
    </Wrapper>
  );
};

export default FlexBox;
