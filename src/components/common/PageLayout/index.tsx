import { FlexBox } from '@cos-ui/react';
import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
  type?: 'default' | 'narrow' | 'wide';
};

export const LAYOUT_DEFAULT_PADDING = '6rem';
const LAYOUT_DEFAULT_MAX_WIDTH = '1270px';

const layoutStyles = {
  default: {
    maxWidth: LAYOUT_DEFAULT_MAX_WIDTH,
    p: LAYOUT_DEFAULT_PADDING,
  },
  narrow: {
    maxWidth: LAYOUT_DEFAULT_MAX_WIDTH,
    py: LAYOUT_DEFAULT_PADDING,
  },
  wide: {
    maxWidth: 'none',
    py: LAYOUT_DEFAULT_PADDING,
  },
};

const PageLayout = ({
  type = 'default',
  children,
  ...restProps
}: PageLayoutProps) => (
  <FlexBox
    sx={{
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      bgColor: 'white',
      m: `0 auto`,
      ...layoutStyles[type],
    }}
    {...restProps}
  >
    {children}
  </FlexBox>
);

export default PageLayout;
