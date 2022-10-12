import { CSSObject } from 'styled-components';

import { icon, IconName } from '@assets/icons';

type IconProps = {
  iconName: IconName;
  size?: 'small' | 'medium' | 'large';
  sx?: CSSObject;
};

const iconSizes = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
};

const Icon = ({ iconName, size = 'small', sx }: IconProps) => (
  <img
    css={{ width: iconSizes[size], ...sx }}
    src={icon(iconName)}
    alt={iconName}
  />
);

export default Icon;
