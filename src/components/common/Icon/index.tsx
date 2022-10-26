import { CSSObject } from 'styled-components';

import { icon, IconName } from '@assets/icons';

type IconProps = {
  iconName: IconName;
  size?: 'small' | 'medium' | 'large';
};

const iconSizes = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
};

const Icon = ({ iconName, size = 'small' }: IconProps) => (
  <img css={{ width: iconSizes[size] }} src={icon(iconName)} alt={iconName} />
);

export default Icon;
