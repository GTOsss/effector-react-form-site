import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { removeExample } from './code-examples';

interface IProps {}

const Remove = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>remove</h1>
      <div>
        Метод для удаления элемента из FieldArray и родительской формы. Принимает объект с названием поля и с индексом,
        по которому нужно удалить элемент. Удаление элемента поля формы, которое не является массивом, преобразует это
        поле в пустой массив.
      </div>
      <CodeHighlighter code={removeExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Remove);
