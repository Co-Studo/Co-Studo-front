import { PaletteOptions } from 'src/constants/palette';
import * as S from './button.style';

const Button: React.FC<{ variant: PaletteOptions }> = ({ variant }) => {
  return <S.ButtonWrapper variant={variant}>hi</S.ButtonWrapper>;
};

export default Button;
