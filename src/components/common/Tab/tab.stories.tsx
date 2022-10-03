import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tab from '@components/common/Tab';
import StyledTabA from '@components/common/Tab/tab.a.styled';
import StyledTabB from '@components/common/Tab/tab.b.styled';

export default {
  title: 'common/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const TabA: ComponentStory<typeof Tab> = () => (
  <StyledTabA.Group>
    <StyledTabA.List>
      <StyledTabA>Tab A</StyledTabA>
      <StyledTabA>Tab B</StyledTabA>
    </StyledTabA.List>
    <StyledTabA.Panels>
      <StyledTabA.Panel>TabPanel A</StyledTabA.Panel>
      <StyledTabA.Panel>TabPanel B</StyledTabA.Panel>
    </StyledTabA.Panels>
  </StyledTabA.Group>
);

export const TabB: ComponentStory<typeof Tab> = () => (
  <StyledTabB.Group>
    <StyledTabB.List>
      <StyledTabB>
        Tab A
        <StyledTabB.ActiveBar />
      </StyledTabB>
      <StyledTabB>
        Tab B
        <StyledTabB.ActiveBar />
      </StyledTabB>
    </StyledTabB.List>
    <StyledTabB.Panels>
      <StyledTabB.Panel>TabPanel A</StyledTabB.Panel>
      <StyledTabB.Panel>TabPanel B</StyledTabB.Panel>
    </StyledTabB.Panels>
  </StyledTabB.Group>
)
