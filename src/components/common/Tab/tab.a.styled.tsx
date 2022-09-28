import styled from 'styled-components';

import Tab from '@components/common/Tab';

const StyledTabList = styled(Tab.List)`
  display: flex;
  gap: 20px;
`;

const StyledTabRoot = styled(Tab)`
  cursor: pointer;
  
  * {
    font-size: 22px;
    color: #dfdfdf;
  }
  
  &[data-selected=true] {
    * {
      color: #939393;
    }
  }
`;

const StyledTabPanel = styled(Tab.Panel)`
  color: #939393;
`;

const StyledTab = Object.assign(StyledTabRoot, {
  Group: Tab.Group,
  List: StyledTabList,
  Panels: Tab.Panels,
  Panel: StyledTabPanel,
})

export default StyledTab;
