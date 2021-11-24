import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { setOrDeleteError, setOrDeleteErrorType } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const SetOrDeleteError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setOrDeleteError</h1>
      <div>
        Позволяет напрямую установить ошибку в поля формы, заменив ошибку валидатора, либо удалит ошибку, если не
        передать поле error.
      </div>
      <CodeHighlighter code={setOrDeleteErrorType} className="CodeHighlighter" />
      <CodeHighlighter code={setOrDeleteError} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOrDeleteError);
