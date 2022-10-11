import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginPage from '@pages/LoginPage';

export default {
  title: 'Page/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

export const Default: ComponentStory<typeof LoginPage> = () => <LoginPage />;
