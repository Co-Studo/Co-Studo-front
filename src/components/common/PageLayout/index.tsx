import { FlexBox } from '@cos-ui/react';
import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
  size?: 'wide' | 'default';
};

const HEADER_HEIGHT = '6rem';

const layoutSize = {
  wide: {
    maxWidth: 'none',
  },
  default: {
    maxWidth: '1270px',
  },
};

const PageLayout = ({
  size = 'default',
  children,
  ...restProps
}: PageLayoutProps) => (
  <FlexBox
    as="main"
    sx={{
      width: '100%',
      height: `calc(100vh - ${HEADER_HEIGHT})`,
      m: `${HEADER_HEIGHT} auto 0`,
      bgColor: 'white',
      flexDirection: 'column',
      ...layoutSize[size],
    }}
    {...restProps}
  >
    {children}
  </FlexBox>
);

export default PageLayout;
