import { ReactElement } from 'react';
import { useTheme } from 'styled-components';

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
  render: (style) => ReactElement;
};

const Text = ({ variant, sx, render }: TextProps) => {
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

  return render(textStyle);
};

export default Text;
