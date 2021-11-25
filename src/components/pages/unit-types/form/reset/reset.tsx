import CodeHighlighter from '@components/code-highlighter';
import React, { memo } from 'react';
import { resetCode } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const Reset = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Reset</h1>
      <div>Полностью сбрасывает форму до состояния иницализации.</div>
      <h2>Пример использования</h2>
      <CodeHighlighter code={resetCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Reset);
