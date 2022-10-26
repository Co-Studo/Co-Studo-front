import { ReactNode } from 'react';

import colors from '@styles/colors';

const Paper: React.FC<{ children: ReactNode; sx?: object }> = ({
  children,
  sx,
}) => (
  <div
    css={{
      width: 'max-content',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: `0px 4px 10px ${colors.greyOpacity100},
        0px 0px 4px ${colors.greyOpacity500}`,
      ...sx,
    }}
  >
    {children}
  </div>
);

export default Paper;
