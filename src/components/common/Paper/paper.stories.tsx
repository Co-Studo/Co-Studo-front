import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paper from '.';

export default {
  title: 'common/Paper',
  component: Paper,
  args: {
    children: <span>hi</span>,
  },
} as ComponentMeta<typeof Paper>;

export const Default: ComponentStory<typeof Paper> = (args) => (
  <Paper {...args} />
);
