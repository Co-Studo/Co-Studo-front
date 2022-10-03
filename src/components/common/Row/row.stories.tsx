import { ComponentStory, ComponentMeta } from '@storybook/react';

import Row from '@components/common/Row';

export default {
  title: 'common/Row',
  component: Row,
  args: {
    title: '제목',
    description: '설명',
    left: 'o',
    right: 'x',
  },
} as ComponentMeta<typeof Row>;

export const Default: ComponentStory<typeof Row> = (args) => (
  <Row {...args} />
);
