import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paper from '@components/common/Paper';
import Row from '@components/common/Row';

export default {
  title: 'common/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

export const Default: ComponentStory<typeof Row> = (args) => (
  <Paper sx={{ width: '15rem' }}>
    <Row {...args} />
  </Paper>
);

Default.args = {
  content: (
    <Row.Column2Row top={<span>top</span>} bottom={<span>bottom</span>} />
  ),
  left: <div>left</div>,
  right: <div>right</div>,
};

const LongBottomTemplate: ComponentStory<typeof Row> = (args) => (
  <Paper sx={{ width: '15rem' }}>
    <Row {...args} />
  </Paper>
);

export const LongBottom = LongBottomTemplate.bind({});

LongBottom.args = {
  content: (
    <Row.Column2Row
      top={<span>top</span>}
      bottom={<span>bottom bottom bottom bottom bottom</span>}
    />
  ),
  left: <div>left</div>,
  right: <div>right</div>,
};

const LeftRightTemplate: ComponentStory<typeof Row> = (args) => (
  <Paper sx={{ width: '15rem' }}>
    <Row {...args} />
  </Paper>
);

export const LeftRight = LeftRightTemplate.bind({});

LeftRight.args = {
  left: <div>left</div>,
  right: <div>right</div>,
};

const ContentTemplate: ComponentStory<typeof Row> = (args) => (
  <Paper sx={{ width: '15rem' }}>
    <Row {...args} />
  </Paper>
);

export const Content = ContentTemplate.bind({});

Content.args = {
  content: (
    <>
      <div>안녕</div>
      <div>하세요</div>
    </>
  ),
};
