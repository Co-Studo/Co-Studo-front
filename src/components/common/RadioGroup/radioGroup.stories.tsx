import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import StyledButton from '@components/common/Button/button.styled';
import FlexBox from '@components/common/FlexBox';
import StyledForm from '@components/common/Form/form.styled';
import RadioGroup from '@components/common/RadioGroup';
import StyledRadio from '@components/common/RadioGroup/radioGroup.styled';
import Text from '@components/common/Text';

export default {
  title: 'common/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default: ComponentStory<typeof RadioGroup> = () => {
  const [selectedValue, setValue] = useState('velog');

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const dataList = [
    { value: 'velog', label: 'Velog' },
    { value: 'tistory', label: 'Tistory' },
    { value: 'notion', label: 'Notion' },
  ];

  return (
    <StyledRadio.Group
      name="FirstGroup"
      selectedValue={selectedValue}
      onChange={handleOnChange}
    >
      {dataList.map(({ value, label }) => (
        <StyledRadio.Option key={value} value={value}>
          {label}
        </StyledRadio.Option>
      ))}
    </StyledRadio.Group>
  );
};

export const FormRadioGroup: ComponentStory<typeof RadioGroup> = () => {
  const [formValues, setValues] = useState({});
  const handleSubmit = (e, value) => {
    setValues(value);
  };

  return (
    <FlexBox
      sx={{
        flexDirection: 'column',
        width: '100%',
        gap: '1rem',
      }}
    >
      <StyledForm onSubmit={handleSubmit} validationMode="onBlur">
        <FlexBox
          sx={{
            flexDirection: 'column',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Text
            variant="articleTitle"
            sx={{
              color: 'primary',
            }}
          >
            체크아웃
          </Text>
          <Text variant="sectionDescription">설정 여부</Text>
          <StyledRadio.Group name="check-out-setting" selectedValue="public">
            <StyledRadio.Option value="public">공개</StyledRadio.Option>
            <StyledRadio.Option value="private">비공개</StyledRadio.Option>
          </StyledRadio.Group>
          <Text variant="sectionDescription">인증 제출 여부</Text>
          <StyledRadio.Group name="check-out-submission" selectedValue="public">
            <StyledRadio.Option value="public">제출</StyledRadio.Option>
            <StyledRadio.Option value="private">미제출</StyledRadio.Option>
          </StyledRadio.Group>
        </FlexBox>
        <StyledButton type="submit" width="large" height="large">
          스터디 생성
        </StyledButton>
      </StyledForm>
      <FlexBox sx={{ flexDirection: 'column', gap: '1rem' }}>
        {Object.keys(formValues).map((key) => (
          <Text key={key}>{`${key} : ${formValues[key]}`}</Text>
        ))}
      </FlexBox>
    </FlexBox>
  );
};
