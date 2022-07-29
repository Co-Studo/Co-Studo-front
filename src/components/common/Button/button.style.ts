import styled from 'styled-components';
import colors from '@theme/colors';

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

export const ButtonWrapper = styled.button`
  background-color: ${({ theme, variant }) => theme.palette[variant]};
  width: ${({ width }) => buttonWidth[width]};
  height: ${({ height }) => buttonHeight[height]};
  border-radius: ${({ height }) => buttonBorderRadius[height]};
  color: ${colors.white};
  font-size: ${({ height }) => buttonFontSize[height]};
  cursor: pointer;
`;
