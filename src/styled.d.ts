import {} from 'styled-components/cssprop';
import { Theme } from '@cos-ui/react';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
