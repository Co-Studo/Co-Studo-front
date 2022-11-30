import { FlexBox } from '@cos-ui/react';
import { ReactNode } from 'react';

type PageLayoutSX = {
  width?: string;
  height?: string;
  backgroundColor?: string;
};

type PageLayoutProps = {
  children: ReactNode;
  size?: 'wide' | 'default';
  sx?: PageLayoutSX;
};

const layoutSize = {
  wide: {
    width: '100%',
    height: '100%',
    padding: '6rem',
  },
  default: {
    width: '100%',
    height: '100%',
    maxWidth: '1270px',
    padding: '6rem',
  },
};

const PageLayout = ({
  sx,
  size = 'default',
  children,
  ...restProps
}: PageLayoutProps) => (
  <FlexBox
    as="main"
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      mt: '6rem',
    }}
    {...restProps}
  >
    <FlexBox
      sx={{
        flexDirection: 'column',
        bgColor: 'white',
        ...layoutSize[size],
      }}
    >
      {children}
    </FlexBox>
  </FlexBox>
);

export default PageLayout;
