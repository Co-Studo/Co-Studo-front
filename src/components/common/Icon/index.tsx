import styled from 'styled-components';

import { icon, IconName } from '@assets/icons';
import { Palette } from '@styles/theme';

type IconProps = {
  iconName: IconName;
  size?: 'small' | 'medium' | 'large';
  color?: keyof Palette;
};

const iconSizes = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
};

const Icon = ({ iconName, size = 'small', color }: IconProps) => {
  const IconComponent = icon[iconName];

  const StyledIcon = styled(IconComponent)`
    width: ${iconSizes[size]};
    height: auto;
    fill: ${({ theme }) => theme.palette[color || 'primary']};
    stroke: ${({ theme }) => theme.palette[color || 'primary']};
  `;

  return <StyledIcon />;
};

export default Icon;
