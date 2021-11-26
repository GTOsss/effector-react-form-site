import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { type } from './code-examples';

interface IProps {}

const Form = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$form</h1>
      <div>
        Стор, хранящий основное состояние{' '}
        <Link to="/api/unit-types/form/" className="Link">
          формы
        </Link>
        .
      </div>
      <CodeHighlighter code={type} className="CodeHighlighter" />
      <h2>Свойства</h2>
      <ol className="List">
        <li>
          <span className="ListItemName">submitted</span>: сообщает о том, была ли форма отправлена.
        </li>
        <li>
          <span className="ListItemName">hasError</span>: сообщает о том, есть ли в форме ошибки, созданые функцией
          валидации.
        </li>
        <li>
          <span className="ListItemName">hasOuterError</span>: сообщает о том, есть ли в форме ошибки, добавленные
          внешними функциями в{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>
          .
        </li>
      </ol>
      <ol></ol>
    </div>
  );
};

export default memo(Form);
