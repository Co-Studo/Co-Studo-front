import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import TextEditor from '@components/common/TextEditor';

export default {
  title: 'common/TextEditor',
  component: TextEditor,
} as ComponentMeta<typeof TextEditor>;

export const Default: ComponentStory<typeof TextEditor> = () => {
  const [htmlStr, setHtmlStr] = useState(' ');
  return <TextEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />;
};
