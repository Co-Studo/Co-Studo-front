import styled from 'styled-components';

import { icon, IconName } from '@assets/icons';
import { Palette } from '@styles/theme';

type IconProps = {
  iconName: IconName;
  size?: keyof typeof iconSizes;
  color?: keyof Palette;
};

const iconSizes = {
  small: '2rem',
  medium: '2.5rem',
  large: '3rem',
  xLarge: '3.5rem',
};

const Icon = ({ iconName, size = 'medium', color }: IconProps) => {
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
