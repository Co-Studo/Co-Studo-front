import { ReactNode, ElementType } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import fonts from '@styles/fonts';
import { IPalette } from '@styles/theme';
import { typography } from '@styles/typography';

type TextSX = {
  fontSize?: keyof typeof fonts.fontSize;
  fontWeight?: keyof typeof fonts.fontWeight;
  fontFamily?: keyof typeof fonts.fontFamily;
  fontStyle?: keyof typeof fonts.fontStyle;
  color?: keyof IPalette;
  lineHeight?: keyof typeof fonts.lineHeight;
  letterSpacing?: keyof typeof fonts.letterSpacing;
};

const getCustomStyle = (sx: TextSX, theme: DefaultTheme) =>
  Object.entries(sx).reduce((acc, [key, value]) => {
    acc[key] = key === 'color' ? theme.palette[value] : fonts[key][value];
    return acc;
  }, {});

type TextProps = {
  variant?: keyof typeof typography;
  sx?: TextSX;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
};

type StyledProp = {
  fontCss: TextSX;
};

const StyledText = styled.span<StyledProp>`
  ${({ fontCss }) => fontCss};
`;

const Text = ({ variant, sx = {}, as = 'span', children }: TextProps) => {
  const Component = as as ElementType;
  const theme = useTheme();
  const getVariantStyle = () => variant && typography[variant];
  const fontCss = {
    ...getVariantStyle(),
    ...getCustomStyle(sx, theme),
  };

  return (
    <StyledText as={Component} fontCss={fontCss}>
      {children}
    </StyledText>
  );
};

type HighlightProps = {
  sx?: TextSX;
  as?:
    | 'em'
    | 'i'
    | 'strong'
    | 'b'
    | 'del'
    | 's'
    | 'u'
    | 'q'
    | 'ins'
    | 'sub'
    | 'sup';
  children: ReactNode;
};

const Highlight = ({ sx = {}, as = 'strong', children }: HighlightProps) => {
  const Component = as as ElementType;
  const theme = useTheme();
  const fontCss = getCustomStyle(sx, theme);

  return (
    <StyledText as={Component} fontCss={fontCss}>
      {children}
    </StyledText>
  );
};

Text.Highlight = Highlight;

export default Text;
