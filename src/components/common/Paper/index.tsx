import { ReactNode } from 'react';
import { css } from 'styled-components';

import colors from '@theme/colors';

const Paper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    css={css`
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 10px ${colors.greyOpacity100},
        0px 0px 4px ${colors.greyOpacity500};
    `}
  >
    {children}
  </div>
);

export default Paper;
