import { ComponentStory, ComponentMeta } from '@storybook/react';

import StudyCreationPage from '.';

export default {
  title: 'Page/StudyCreationPage',
  component: StudyCreationPage,
  args: {},
} as ComponentMeta<typeof StudyCreationPage>;

export const Default: ComponentStory<typeof StudyCreationPage> = () => (
  <StudyCreationPage />
);
