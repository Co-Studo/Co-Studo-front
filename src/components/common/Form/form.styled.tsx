import styled, { css } from 'styled-components';

import Form from '@components/common/Form';

const StyledFormRoot = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 580px;
  gap: 12px;
`;

const InputStyle = css`
  width: 580px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.palette.borderLine};
  border-radius: 10px;
  padding: 0 10px;
  font-size: 1.3rem;
  :focus {
    border-color: ${({ theme }) => theme.palette.primary};
  }

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.palette.danger};
  }
`;

const LabelStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

const ErrorMsgStyle = css`
  font-size: 0.8em;
  color: ${({ theme }) => theme.palette.danger};
`;

const TextField = styled(Form.TextField)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  input {
    ${InputStyle}
  }
  label {
    ${LabelStyle}
  }
  span {
    ${ErrorMsgStyle}
  }
`;

const StyledFrom = Object.assign(StyledFormRoot, {
  TextField,
});

export default StyledFrom;
