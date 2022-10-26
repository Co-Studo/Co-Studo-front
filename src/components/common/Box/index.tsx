import styled from 'styled-components';

type BoxSX = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
  gap?: string;
};

type BoxProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  sx?: BoxSX;
};

const Wrapper = styled.div`
  display: flex;
`;

const Box = (props: BoxProps) => {
  const { sx, as = 'div', children } = props;

  return (
    <Wrapper as={as} css={sx}>
      {children}
    </Wrapper>
  );
};

export default Box;
