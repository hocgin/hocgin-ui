import * as React from 'react';
import { Editor } from '@tiptap/react';
import TbButton from '@/Editor/components/TbButton';
import { BoldOutlined, UndoOutlined } from '@ant-design/icons';

export const Undo: React.FC<{ editor?: Editor | null }> = ({ editor }) => (
  <TbButton
    title='撤回'
    onClick={() =>
      editor?.chain().focus().undo().run()
    }>
    <UndoOutlined />
  </TbButton>
);

