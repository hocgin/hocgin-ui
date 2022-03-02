import * as React from 'react';
import { Editor } from '@tiptap/react';
import TbButton from '@/Editor/components/TbButton';
import { BoldOutlined, ItalicOutlined } from '@ant-design/icons';

export const Italic: React.FC<{ editor?: Editor | null }> = ({ editor }) => (
  <TbButton
    title='倾斜'
    onClick={() => editor?.chain().focus().toggleItalic().run()}
  >
    <ItalicOutlined />
  </TbButton>
);

