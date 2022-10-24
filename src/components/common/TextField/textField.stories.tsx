import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import TextField from '@components/common/TextField';
import StyledTextField from '@components/common/TextField/textField.styled';
import { Validity } from '@components/common/TextField/useTextValidation';

export default {
  title: 'common/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const handleOnBlur = (e) => {
    console.log('blur :', e.target.value);
  };

  const handleValidation = ({ isError, isPass }: Validity) => {
    if (isError) {
      setErrorMsg('5 ~ 8 자 이내로 입력해주세요!');
    }
    if (isPass) {
      setErrorMsg('');
    }
  };

  const checkMaxLength = (value: string) => value?.length <= 8;

  return (
    <StyledTextField name="study">
      <StyledTextField.Label>스터디 이름</StyledTextField.Label>
      <StyledTextField.Input
        type="text"
        onBlur={handleOnBlur}
        validate={checkMaxLength}
        onValidate={handleValidation}
        minLength={5}
      />
      <StyledTextField.HelperText>{errorMsg}</StyledTextField.HelperText>
    </StyledTextField>
  );
};
