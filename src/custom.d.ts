import { IPalette } from '@theme/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
  }
}
