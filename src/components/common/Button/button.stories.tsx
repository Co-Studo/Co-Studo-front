import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/common/Button';

export default {
  title: 'category/Button',
  component: Button,
  args: {
    color: 'primary',
    width: 'small',
    height: 'small',
    children: 'button',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
