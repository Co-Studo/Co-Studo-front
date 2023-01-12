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
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        bgColor: 'primary_light',
        justifyContent: 'center',
        alignItems: 'center',
        py: '5rem',
      }}
    >
      <Text variant="sectionTitle">Page Contents</Text>
    </FlexBox>
  </PageLayout>
);
