import { PaletteOption } from '@theme/theme';
import * as S from './button.style';

type ButtonProps = {
  variant: PaletteOption;
  width: 'small' | 'medium' | 'large';
  height: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  width = 'small',
  height = 'small',
  children = 'button',
}) => {
  return (
    <S.ButtonWrapper variant={variant} width={width} height={height}>
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
