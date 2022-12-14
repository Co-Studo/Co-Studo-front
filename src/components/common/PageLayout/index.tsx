import { FlexBox } from '@cos-ui/react';
import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
  type?: 'default' | 'narrow' | 'wide';
};

const LAYOUT_DEFAULT_MAX_WIDTH = {
  NARROW: '127rem',
  WIDE: '144rem',
};

export const LAYOUT_DEFAULT_PADDING = {
  VERTICAL: '6rem',
  HORIZONTAL: '4.5rem',
};

const layoutStyles = {
  default: {
    maxWidth: LAYOUT_DEFAULT_MAX_WIDTH.NARROW,
    px: LAYOUT_DEFAULT_PADDING.HORIZONTAL,
    py: LAYOUT_DEFAULT_PADDING.VERTICAL,
  },
  narrow: {
    maxWidth: LAYOUT_DEFAULT_MAX_WIDTH.NARROW,
    py: LAYOUT_DEFAULT_PADDING.VERTICAL,
  },
  wide: {
    maxWidth: LAYOUT_DEFAULT_MAX_WIDTH.WIDE,
    py: LAYOUT_DEFAULT_PADDING.VERTICAL,
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
