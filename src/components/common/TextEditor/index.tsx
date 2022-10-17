import 'react-quill/dist/quill.snow.css';

import ImageResize from 'quill-image-resize-module-react';
import { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import * as React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { css } from 'styled-components';

import { uploadImage } from '@apis/image';

Quill.register("modules/imageResize", ImageResize);

const editorStyle = css`
  max-width: 1180px;
  
  * {
    font-weight: revert;
    font-style: revert;
  }
`;

const toolbarOptions = [
  [{ font: [] }], // font 설정
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // header 설정
  [
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'formula',
  ], // 굵기, 기울기, 밑줄 등 부가 tool 설정
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], // 리스트, 인덴트 설정
  ['link', 'image', 'video'], // 링크, 이미지, 비디오 업로드 설정
  [{ align: [] }, { color: [] }, { background: [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
  ['clean'], // toolbar 설정 초기화 설정
];

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'background',
  'color',
  'link',
  'image',
  'video',
  'width',
];

export type TextEditorOptions = {
  width?: string;
  editingAreaHeight?: string;
  defaultValue?: string;
  readOnly?: boolean;
  placeholder?: string;
};

const defaultEditorOptions: TextEditorOptions = {
  width: '100%',
  editingAreaHeight: '30rem',
  defaultValue: '',
  readOnly: false,
  placeholder: '',
};

export type TextEditorProps = {
  options?: TextEditorOptions;
};

export type TextEditorHandle = {
  getContents: () => string;
};

const TextEditor = forwardRef<TextEditorHandle, TextEditorProps>(
  (
    {
      options: { width, editingAreaHeight, ...restOptions } = defaultEditorOptions,
    },
    ref,
  ) => {
    const editorRef = useRef<ReactQuill>(null);
    const contentRef = useRef('');

    useImperativeHandle(ref, () => ({
      getContents: () => contentRef.current || '',
    }));

    const handleEditorChange = (content, delta, source, editor) => {
      contentRef.current = editor.getHTML();
    };

    const handleImage = () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.click();

      input.addEventListener('change', async () => {
        const file = input.files;

        if (editorRef.current) {
          const editor = editorRef.current.getEditor();

          const { index = 0 } = editor.getSelection() || {}; // 현재 커서 위치 가져오기

          editor.removeFormat(index, 0); // 에디터에 적용되어있는 스타일 제거
          const loadingText = `${index !== 0 ? '\n' : ''}Uploading image...`;
          editor.insertText(index, loadingText); // 로딩 텍스트 삽입

          if (file) {
            const {
              results: { imageUrl },
            } = await uploadImage(file[0]);
            editor.deleteText(index, loadingText.length); // 로딩 텍스트 제거
            editor.insertEmbed(index, 'image', imageUrl); // 이미지 삽입
            editor.setSelection(index + 1, 0); // 사용자가 바로 텍스트를 입력할 수 있도록 커서 이동
          }
        }
      });
    };

    const modules = useMemo(
      () => ({
        toolbar: {
          container: toolbarOptions,
          handlers: {
            image: handleImage,
          },
        },
        imageResize: {
          parchment: Quill.import('parchment'),
          modules: ['Resize', 'DisplaySize', 'Toolbar'],
        },
      }),
      [],
    );

    return (
      <div css={editorStyle} style={{ width }}>
        <ReactQuill
          ref={editorRef}
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={handleEditorChange}
          {...restOptions}
        >
          <div css={{ height: editingAreaHeight }} />
        </ReactQuill>
      </div>
    );
  },
);

export default memo(TextEditor);
