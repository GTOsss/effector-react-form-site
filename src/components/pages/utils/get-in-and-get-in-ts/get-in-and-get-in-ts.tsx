import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { getInType } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const GetInAndGetInTs = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getIn</h1>
      <div>Утилита, для получения значения из вложенных объектов. Принимает три аргумента</div>
      <CodeHighlighter code={getInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: объект, в котором содержится значение.
        </li>
        <li>
          <span className="ListItemName">path</span> путь к значению. Может быть как обычной строкой: 'name', массивом
          строк: ['user', 'name'] или же строкой, описывающий путь к свойству через точку: 'user.name'.
        </li>
        <li>
          <span className="ListItemName">defaultValue</span>: опциональный параметр. В случае, если результат не
          получен, передан невалидный field или state, вернётся значение по умолчанию.
        </li>
      </ol>
    </div>
  );
};

export default memo(GetInAndGetInTs);
