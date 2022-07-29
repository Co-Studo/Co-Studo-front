import styled from 'styled-components';

import palette from '@constants/palette';

export const ButtonWrapper = styled.button`
  background-color: ${({ variant }) => palette[variant]};
`;
