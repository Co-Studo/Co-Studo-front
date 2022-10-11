import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import prism from 'prismjs';
import * as React from 'react';
import { forwardRef, useEffect, useImperativeHandle } from 'react';

import { getImageUrl } from '@apis/image';
import colors from '@theme/colors';

export type TextEditorOptions = {
  width?: string;
  height?: string;
  initialValue?: string;
  initialEditType?: 'markdown' | 'wysiwyg';
  previewStyle?: 'tab' | 'vertical';
  autofocus?: boolean;
  placeholder?: string;
};

const defaultTextEditorOptions: TextEditorOptions = {
  width: '800px',
  height: '300px',
  initialValue: ' ',
  initialEditType: 'wysiwyg',
  previewStyle: 'vertical',
  autofocus: true,
  placeholder: '',
};

export type TextEditorProps = {
  options?: TextEditorOptions;
};

export type TextEditorHandle = {
  getHTML: () => string;
  getMarkdown: () => string;
};

const TextEditor = forwardRef<TextEditorHandle, TextEditorProps>(
  ({ options: { width, ...restOptions } = defaultTextEditorOptions }, ref) => {
    const editorRef = React.useRef<ToastEditor>(null);

    useImperativeHandle(ref, () => ({
      getHTML: () =>
        (editorRef.current && editorRef.current.getInstance().getHTML()) || '',
      getMarkdown: () =>
        (editorRef.current && editorRef.current.getInstance().getMarkdown()) ||
        '',
    }));

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.getInstance().removeHook('addImageBlobHook');
        editorRef.current
          .getInstance()
          .addHook('addImageBlobHook', (blob, callback) => {
            (async () => {
              const {
                results: { imageUrl },
              } = await getImageUrl(blob);
              callback(imageUrl, blob.name);
            })();
            return false;
          });
      }
    }, []);

    return (
      <div css={{ backgroundColor: colors.white, width, borderRadius: '4px' }}>
        <ToastEditor
          ref={editorRef}
          useCommandShortcut
          minHeight="300px"
          plugins={[
            colorSyntax,
            tableMergedCell,
            [codeSyntaxHighlight, { prism }],
          ]}
          {...restOptions}
        />
      </div>
    );
  },
);

export default TextEditor;
