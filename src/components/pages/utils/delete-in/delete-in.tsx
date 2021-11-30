import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { deleteInType, removeEmpty2ndExample, removeEmpty3rdExample, removeEmptyExample } from './code-examples';

interface IProps {}

const DeleteIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>deleteIn</h1>
      <div>
        Утилита для удаления свойства в объекте со вложенными полями или элемента в массиве. Принимает 4 аргумента, из
        которых первые два обязательные, а остальные опциональные. Данный метод является иммутабельным, он не изменяет переданный объект, а возвращает новый объект или массив.
      </div>
      <CodeHighlighter code={deleteInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: объект или массив, в котором будет удалён элемент. Может быть массивом или объектом.
        </li>
        <li>
          <span className="ListItemName">path</span>: путь к удаляемому элементу. Может быть как обычной строкой:
          'name', массивом строк: ['user', 'name'] или же строкой, описывающий путь к свойству через точку: 'user.name'.
        </li>
        <li>
          <span className="ListItemName">removeEmpty</span>: указывает, нужно ли удалять пустой объект, если в объекте других свойств не было. Примеры выполнения:
          <CodeHighlighter code={removeEmptyExample} className="CodeHighlighter" />
          <CodeHighlighter code={removeEmpty2ndExample} className="CodeHighlighter" />
          <CodeHighlighter code={removeEmpty3rdExample} className="CodeHighlighter" />
        </li>
        <li>
          <span className="ListItemName">inDeep</span>: булевое значение. Говорит о том, находится ли удаляемое свойство
          во вложенном объекте или нет. По умолчанию true. При удалении из плоского объекта, следует указать false.
        </li>
      </ol>
    </div>
  );
};

export default memo(DeleteIn);
