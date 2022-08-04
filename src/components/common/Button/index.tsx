import { ButtonHTMLAttributes } from 'react';

import { PaletteOption } from '@theme/theme';

import StyledButton from './button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: PaletteOption;
  width: 'small' | 'medium' | 'large';
  height: 'small' | 'medium' | 'large';
  right?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  width = 'small',
  height = 'small',
  color = 'primary',
  right,
  ...props
}) => (
  <StyledButton width={width} height={height} color={color} {...props}>
    {children}
    {right}
  </StyledButton>
);

export default Button;
