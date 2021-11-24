import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setOrDeleteOuterError, setOrDeleteOuterErrorType } from './code-examples';

interface IProps {}

const SetOrDeleteOuterError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setOrDeleteOuterError</h1>
      <div>
        Устанавливает объект с ошибками в{' '}
        <Link to="/api/unit-types/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        . Можно удалить ошибку, не передав error.
      </div>
      <CodeHighlighter code={setOrDeleteOuterErrorType} className="CodeHighlighter" />
      <CodeHighlighter code={setOrDeleteOuterError} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOrDeleteOuterError);
