import CodeHighlighter from '@components/code-highlighter';
import { makeNested } from 'effector-react-form';
import React, { memo } from 'react';
import { flatObject, nestedObject } from './code-examples';
import styles from './styles.module.scss';

interface IProps { }

const MakeNested = ({ }: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>makeNested</h1>
      <div>Преобразует объект с полями формата:</div>
      <CodeHighlighter code={flatObject} className="CodeHighlighter" />
      <div>в объект со вложенными свойствами:</div>
      <CodeHighlighter code={nestedObject} className="CodeHighlighter" />
      Принимает только один аргумент - изменяемый объект.
    </div>
  );
};

export default memo(MakeNested);
