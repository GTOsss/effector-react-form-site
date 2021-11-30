import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { setInType } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const SetIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setIn</h1>
      <div>Позволяет установить значение во вложенный объект. Принимает три аргумента: </div>
      <CodeHighlighter code={setInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: объект, в который будет установлено значение.
        </li>
        <li>
          <span className="ListItemName">path</span>: путь, по которому будет установлено значение. Может быть как
          обычной строкой: 'name', массивом строк: ['user', 'name'] или же строкой, описывающий путь к свойству через
          точку: 'user.name'.
        </li>
        <li>
          <span className="ListItemName">value</span>: устанавливаемое значение.
        </li>
      </ol>
      Возвращает новый объект, не мутируя исходный.
    </div>
  );
};

export default memo(SetIn);
