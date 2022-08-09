import { ComponentStory, ComponentMeta } from '@storybook/react';

import GithubLoginButton from '.';

export default {
  title: 'Login Page/GithubLoginButton',
  component: GithubLoginButton,
  args: {},
} as ComponentMeta<typeof GithubLoginButton>;

export const Default: ComponentStory<typeof GithubLoginButton> = (args) => (
  <GithubLoginButton {...args} />
);
