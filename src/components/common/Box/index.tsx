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
};

type BoxProps = {
  children: React.ReactNode;
  sx?: BoxSX;
};

const Box = (props: BoxProps) => {
  const { sx, children } = props;

  const boxCss = {
    display: 'flex',
    ...sx,
  };

  return <div css={boxCss}>{children}</div>;
};

export default Box;
