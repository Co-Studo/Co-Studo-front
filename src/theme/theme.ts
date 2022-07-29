import { DefaultTheme } from 'styled-components';

import colors from './colors';

export type PaletteOption = 'primary' | 'warning';

export interface IPaletteOptions {
  primary: string;
  warning: string;
}

export interface IPalette extends IPaletteOptions {
  bgColor: string;
  fontColor: string;
}

export interface ITheme extends DefaultTheme {
  palette: IPalette;
}

const darkPalette: IPalette = {
  primary: colors.blue900,
  warning: colors.red900,
  bgColor: colors.greyOpacity50,
  fontColor: colors.white,
};

const lightPalette: IPalette = {
  primary: colors.blue900,
  warning: colors.red900,
  bgColor: colors.white,
  fontColor: colors.black,
};

const darkTheme: ITheme = {
  palette: darkPalette,
};

const lightTheme: ITheme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
