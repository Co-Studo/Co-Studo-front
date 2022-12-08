import { FlexBox, Text } from '@cos-ui/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageLayout from '.';

export default {
  title: 'Layouts/PageLayout',
  component: PageLayout,
  args: {},
} as ComponentMeta<typeof PageLayout>;

export const Default: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <FlexBox
      sx={{
        width: '100%',
        height: '10rem',
        bgColor: 'primary_light',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="sectionTitle">Page Contents</Text>
    </FlexBox>
  </PageLayout>
);
