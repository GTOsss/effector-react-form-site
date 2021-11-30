import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { getNameStrCode } from './code-examples';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getNameStr</h1>
      <div>
        Утилита, которая конкатенирует переданные строки через точку. Применимо для указания полей формы во вложенных
        объектах.
      </div>
      <CodeHighlighter code={getNameStrCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetNameStr);
