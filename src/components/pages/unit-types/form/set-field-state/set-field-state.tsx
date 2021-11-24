import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setFieldsInlineExample, setFieldStateType, setOrDeleteErrorExample } from './code-examples';
import WithSetFieldState from './examples/with-set-field-state';
import WithoutSetFieldState from './examples/without-set-field-state';

interface IProps {}

const SetFieldState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setFieldState</h1>
      <div>
        Позволяет установить значения в{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        .
      </div>
      <CodeHighlighter code={setFieldStateType} className="CodeHighlighter" />
      Допустим, мы хотим при инициализации приложения установить ошибку с текстом "Required field" в поле формы в
      качестве напоминания, что это поле обязательное.
      <CodeHighlighter code={setOrDeleteErrorExample} className="CodeHighlighter" />
      <h2>Результат:</h2>
      <WithoutSetFieldState />
      <div>
        {' '}
        Как видно, при инициализации никакой ошибки не появилось, хоть мы и добавили её в форму. Так произошло, потому
        что флаг isShowError зависит от флага "blurred" в{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        .
        <br />
        Попробуем установить "blurred" поля "name" в значение true:
      </div>
      <CodeHighlighter code={setFieldsInlineExample} className="CodeHighlighter" />
      <h2>Результат</h2>
      <WithSetFieldState />
      <div>
        Более подробно о всех полях стора $fieldsInline мы уже рассказывали
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          здесь
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(SetFieldState);
