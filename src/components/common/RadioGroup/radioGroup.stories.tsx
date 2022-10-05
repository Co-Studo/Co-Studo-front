import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import RadioGroup from '.';

import StyledRadio from './radioGroup.styled';

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
