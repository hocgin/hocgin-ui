import * as React from 'react';
import { Editor } from '@tiptap/react';
import TbButton from '@/Editor/components/TbButton';
import { BoldOutlined, DisconnectOutlined } from '@ant-design/icons';

export const HardBreak: React.FC<{ editor?: Editor | null }> = ({ editor }) => (
  <TbButton
    title='换行'
    onClick={() =>
      editor?.chain().focus().setHardBreak().run()
    }>
    <DisconnectOutlined />
  </TbButton>
);
