import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { flatObject, nestedObject } from './code-examples';

interface IProps {}

const MakeNested = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>makeNested</h1>
      <div>Принимает объект с полями формата:</div>
      <CodeHighlighter code={flatObject} className="CodeHighlighter" />
      <div>и возвращает объект со вложенными свойствами:</div>
      <CodeHighlighter code={nestedObject} className="CodeHighlighter" />
      Метод не мутирует исходный объект, а возвращает новый.
    </div>
  );
};

export default memo(MakeNested);
