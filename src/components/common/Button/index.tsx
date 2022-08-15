import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  right?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, right, ...props }) => (
  <button type="button" {...props}>
    {children}
    {right}
  </button>
);

export default Button;
