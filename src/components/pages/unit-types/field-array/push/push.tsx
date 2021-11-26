import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { pushExample } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const Push = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>push</h1>
      <div>
        Метод для добавления нового элемента в FieldArray и родительскую форму. Принимает объект с названием поля и со
        значением, которое нужно добавить. Добавление элемента полю формы, которое не является массивом, преобразует это
        поле в массив с переданным value.
      </div>
      <CodeHighlighter code={pushExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Push);
