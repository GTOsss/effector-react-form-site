import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setErrorsInlineStateExample, setErrorsInlineStateType } from './code-examples';

interface IProps {}

const SetErrorsInlineState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setErrorsInlineState</h1>
      <div>
        Позволяет установить объект с ошибками для полей формы. Принципиальное отличие от метода{' '}
        <Link to="/api/unit-types/form/set-or-delete-error" className="Link">
          setOrDeleteError
        </Link>{' '}
        в том, что setOrDeleteError устанавливает значение ошибки для одного поля, не затрагивая при этом другие поля.
        setErrorsInlineState же полностью перезаписывает объект в сторе{' '}
        <Link to="/api/unit-types/form/$errors-inline" className="Link">
          $errorsInline
        </Link>{' '}
        формы, на переданный в качестве аргумента объект.
      </div>
      <CodeHighlighter code={setErrorsInlineStateType} className="CodeHighlighter" />
      <div>Принимает объект с, где ключами являются имена полей формы, а значениями - тексты ошибок.</div>
      <h2>Пример использования</h2>
      <CodeHighlighter code={setErrorsInlineStateExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetErrorsInlineState);
