import { ComponentStory, ComponentMeta } from '@storybook/react';

import GithubLoginButton from '.';

export default {
  title: 'Button/GithubLoginButton',
  component: GithubLoginButton,
  args: {},
} as ComponentMeta<typeof GithubLoginButton>;

export const Default: ComponentStory<typeof GithubLoginButton> = () => (
  <GithubLoginButton />
);
