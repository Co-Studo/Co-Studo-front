import styled from 'styled-components';

import Button, { ButtonProps } from '@components/common/Button';
import colors from '@theme/colors';
import { PaletteOption } from '@theme/theme';

export interface StyledButtonProps extends ButtonProps {
  color: PaletteOption;
  width: 'small' | 'medium' | 'large';
  height: 'small' | 'medium' | 'large';
  bgcolor?: string;
}

const buttonWidth = {
  small: '5rem',
  medium: '10rem',
  large: '15rem',
};

const buttonHeight = {
  small: '2rem',
  medium: '3rem',
  large: '4rem',
};

const buttonBorderRadius = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
};

const buttonFontSize = {
  small: '1rem',
  medium: '1.15rem',
  large: '1.3rem',
};

const StyledButtonWrapper = styled(Button)<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  background-color: ${({ theme, color, bgcolor }) =>
    bgcolor || theme.palette[color]};
  width: ${({ width }) => buttonWidth[width]};
  height: ${({ height }) => buttonHeight[height]};
  border-radius: ${({ height }) => buttonBorderRadius[height]};
  color: ${colors.white};
  font-size: ${({ height }) => buttonFontSize[height]};
  cursor: pointer;
`;

const StyledButton: React.FC<Partial<StyledButtonProps>> = ({
  width = 'small',
  height = 'small',
  color = 'primary',
  bgcolor,
  children,
  ...rest
}) => (
  <StyledButtonWrapper
    bgcolor={bgcolor}
    width={width}
    height={height}
    color={color}
    {...rest}
  >
    {children}
  </StyledButtonWrapper>
);

export default StyledButton;
