import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paper from '@components/common/Paper';

import FlexBox from '.';

export default {
  title: 'common/FlexBox',
  component: FlexBox,
  args: {
    children: (
      <>
        <div>플랙스</div>
        <div>박스</div>
      </>
    ),
  },
} as ComponentMeta<typeof FlexBox>;

export const Default: ComponentStory<typeof FlexBox> = (args) => (
  <Paper>
    <FlexBox {...args} />
  </Paper>
);
