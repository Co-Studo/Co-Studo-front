import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';

import Button from '@components/common/Button/button.styled';
import TextEditor, { TextEditorHandle } from '@components/common/TextEditor';

export default {
  title: 'common/TextEditor',
  component: TextEditor,
} as ComponentMeta<typeof TextEditor>;

export const Default: ComponentStory<typeof TextEditor> = () => {
  const editorRef = React.useRef<TextEditorHandle>(null);

  const handleButtonClick = () => {
    if (editorRef.current) {
      const text = editorRef.current.getHTML();
      console.log(text);
      // 이후 동작 ...
    }
  };

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        width: 'fit-content',
      }}
    >
      <TextEditor ref={editorRef} />
      <Button onClick={handleButtonClick}>등록하기</Button>
    </div>
  );
};
