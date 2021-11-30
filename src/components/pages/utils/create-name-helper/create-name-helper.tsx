import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { getPathExample, getStrExample, nameHelperExample } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const CreateNameHelper = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createNameHelper</h1>
      <div>Возвращает два метода для удобного получения пути к вложенным полям:</div>
      <CodeHighlighter code={nameHelperExample} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">getPath</span>: собирает переданные аргументы в массив:
          <CodeHighlighter code={getPathExample} className="CodeHighlighter" />
        </li>
        <li>
          <span className="ListItemName">getStr</span>: конкатенирует переданные строки через точку:
          <CodeHighlighter code={getStrExample} className="CodeHighlighter" />
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateNameHelper);
