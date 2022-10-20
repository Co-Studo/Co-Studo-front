import { ReactNode, ElementType } from 'react';
import styled, { useTheme } from 'styled-components';

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

type TextProps = {
  variant?: keyof typeof typography;
  sx?: TextSX;
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
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

type StyledTextProp = {
  textStyle: TextSX;
};

const StyledText = styled.span<StyledTextProp>`
  ${({ textStyle }) => textStyle};
`;

const Text = ({ variant, sx, as = 'span', children }: TextProps) => {
  const Component = as as ElementType;
  const theme = useTheme();
  const getVariantStyle = () => variant && typography[variant];
  const getCustomStyle = () => {
    const customStyle = { ...sx };

    Object.entries(customStyle).forEach(([key, value]) => {
      customStyle[key] =
        key === 'color' ? theme.palette[value] : fonts[key][value];
    });

    return customStyle;
  };
  const textStyle = {
    ...getVariantStyle(),
    ...getCustomStyle(),
  };

  return (
    <StyledText as={Component} textStyle={textStyle}>
      {children}
    </StyledText>
  );
};

export default Text;
