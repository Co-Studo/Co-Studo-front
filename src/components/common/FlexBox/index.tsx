import styled from 'styled-components';

interface SizeSX {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
}

export interface FlexBoxSX extends SizeSX {
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

const FlexBox = (props: FlexBoxProps) => {
  const { sx, as = 'div', children } = props;

  return (
    <Wrapper as={as} css={sx}>
      {children}
    </Wrapper>
  );
};

export default FlexBox;
