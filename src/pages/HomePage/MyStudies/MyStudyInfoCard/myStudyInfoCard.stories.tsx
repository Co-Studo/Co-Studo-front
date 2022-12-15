import { ComponentStory, ComponentMeta } from '@storybook/react';

import { studies } from '@mocks/constants/study';

import MyStudyInfoCard from '.';

export default {
  title: 'Main Page/MyStudyInfoCard',
  component: MyStudyInfoCard,
  args: {
    study: studies[0],
  },
} as ComponentMeta<typeof MyStudyInfoCard>;

export const Default: ComponentStory<typeof MyStudyInfoCard> = (args) => (
  <MyStudyInfoCard {...args} />
);
