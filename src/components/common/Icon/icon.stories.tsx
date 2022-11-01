import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';

export default {
  title: 'common/Icon',
  component: Icon,
  args: {
    iconName: 'crown',
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
