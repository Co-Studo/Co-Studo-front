import { DefaultTheme } from 'styled-components';

import colors from './colors';

export type PaletteOption = 'primary' | 'warning' | 'github';

export interface IPaletteOptions {
  primary: string;
  warning: string;
  github: string;
}

export interface IPalette extends IPaletteOptions {
  bgColor: string;
  fontColor: string;
  borderLine: string;
  hoverColor: string;
}

export interface ITheme extends DefaultTheme {
  palette: IPalette;
}

const darkPalette: IPalette = {
  primary: colors.blue900,
  warning: colors.red900,
  github: colors.black,
  bgColor: colors.grey900,
  fontColor: colors.white,
  borderLine: colors.white,
  hoverColor: colors.grey600,
};

const lightPalette: IPalette = {
  primary: colors.blue900,
  warning: colors.red900,
  github: colors.black,
  bgColor: colors.grey50,
  fontColor: colors.black,
  borderLine: colors.grey500,
  hoverColor: colors.grey200,
};

const darkTheme: ITheme = {
  palette: darkPalette,
};

const lightTheme: ITheme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
