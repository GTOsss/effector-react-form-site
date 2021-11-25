import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { setValueType, setValueExample } from './code-examples';

interface IProps {}

const SetValue = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>setValue</h1>
      <div>Позволяет присвоить значение одному полю формы</div>
      <CodeHighlighter code={setValueType} className="CodeHighlighter" />
      <h2>Пример использования</h2>
      <CodeHighlighter code={setValueExample} className="CodeHighlighter" />
      <div>
        Как видно из примера, в случае, если в форме содержится объект со вложенными полями, есть два варианта записи
        field: строка, содеражщая путь к конечному свойству объекта через точку и массив строк.
      </div>
    </div>
  );
};

export default memo(SetValue);
