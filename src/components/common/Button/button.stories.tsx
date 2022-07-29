import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@components/common/Button';

export default {
  title: 'category/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});

primaryButton.args = {
  variant: 'primary',
};
primaryButton.storyName = 'primary';

export const warningButton = Template.bind({});

warningButton.args = {
  variant: 'warning',
};
warningButton.storyName = 'warning';

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
