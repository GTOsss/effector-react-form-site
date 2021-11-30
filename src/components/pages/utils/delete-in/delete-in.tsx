import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { deleteInType } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const DeleteIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>deleteIn</h1>
      <div>
        Утилита для удаления свойства в объекте со вложенными полями или элемента в массиве. Принимает 5 аргументов, из
        которых первые два обязательные, а остальные опциональные. Возвращает новый объект или массив.
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
          <span className="ListItemName">removeEmpty</span>:
        </li>
        <li>
          <span className="ListItemName">inDeep</span>: булевое значение. Говорит о том, находится ли удаляемое свойство
          во вложенном объекте или нет. По умолчанию true. 
        </li>
        <li>
          <span className="ListItemName">index</span>: индекс
        </li>
      </ol>
    </div>
  );
};

export default memo(DeleteIn);
