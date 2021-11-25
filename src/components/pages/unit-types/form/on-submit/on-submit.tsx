import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { onSubmitCode } from './code-examples';

interface IProps {}

const OnSubmit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onSubmit</h1>
      <div>Определяет функцию для события onSubmit формы. Передаётся в createForm.</div>
      <h2>Пример использования</h2>
      <CodeHighlighter code={onSubmitCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(OnSubmit);
