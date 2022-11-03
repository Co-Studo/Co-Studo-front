import styled from 'styled-components';

import { icon, IconName } from '@assets/icons';
import { Palette } from '@styles/theme';

type IconProps = {
  iconName: IconName;
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  color?: keyof Palette;
};

const iconSizes = {
  anonymous: {
    small: '3.2rem',
    medium: '4.2rem',
    large: '5rem',
    xLarge: '14.2rem',
  },
  bell: {
    medium: '3.2rem',
  },
  crown: {
    medium: '2.1rem',
  },
  lock: {
    medium: '1.3rem',
  },
  star: {
    medium: '2.5rem',
  },
};

const Icon = ({ iconName, size = 'medium', color }: IconProps) => {
  const IconComponent = icon[iconName];

  const StyledIcon = styled(IconComponent)`
    width: ${iconSizes[iconName][size] || iconSizes[iconName].medium};
    height: auto;
    fill: ${({ theme }) => theme.palette[color || 'primary']};
    stroke: ${({ theme }) => theme.palette[color || 'primary']};
  `;

  return <StyledIcon />;
};

export default Icon;
