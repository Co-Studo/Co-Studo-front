import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageLayout from '.';

export default {
  title: 'Layouts/PageLayout',
  component: PageLayout,
  args: {},
} as ComponentMeta<typeof PageLayout>;

export const Default: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
);
