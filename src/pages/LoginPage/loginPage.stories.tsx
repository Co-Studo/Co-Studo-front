import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginPage from '@pages/LoginPage';

export default {
  title: 'category/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

export const Default: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);
