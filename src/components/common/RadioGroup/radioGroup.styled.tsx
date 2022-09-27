import styled from 'styled-components';

import RadioGroup from '@components/common/RadioGroup';

const StyledRadioGroup = styled(RadioGroup)`
  min-width: 580px;
`;

const StyleRadioTitle = styled(RadioGroup.Title)`
  padding-bottom: 10px;
  font-size: 13px;
`;

const StyledOptionWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledRadioOption = styled(RadioGroup.Option)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

const StyledRadio = {
  Group: StyledRadioGroup,
  Title: StyleRadioTitle,
  Option: StyledRadioOption,
  OptionWrapper: StyledOptionWrapper,
};

export default StyledRadio;
