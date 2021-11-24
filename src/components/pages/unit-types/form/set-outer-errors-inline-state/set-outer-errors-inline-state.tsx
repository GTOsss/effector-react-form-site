import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby';
import React, { memo } from 'react';
import { ErrorsInlineType, setOuterErrorsInlineState } from './code-examples';
import styles from './styles.module.scss';

interface IProps {}

const SetOuterErrorsInlineState = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>setOuterErrorsInlineState</h1>
      <div>
        Позволяет установить объект с внешними ошибками для полей формы. Является аналогом{' '}
        <Link to="/api/unit-types/form/set-errors-inline-state/" className="Link">
          setOuterErrorsInlineState
        </Link>
        , но для стора{' '}
        <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        .
      </div>
      <CodeHighlighter code={ErrorsInlineType} className="CodeHighlighter" />
      <h2>Пример использования</h2>
      <CodeHighlighter code={setOuterErrorsInlineState} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOuterErrorsInlineState);
