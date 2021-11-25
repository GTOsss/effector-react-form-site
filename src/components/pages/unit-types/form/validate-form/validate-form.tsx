import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { validateFormExampleCode } from './code-examples';
import ValidateFormExample from './example/validate-form-example';
interface IProps {}

const ValidateForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>validateForm</h1>
      <div>
        Позволяет вручную запустить функцию валидации, переданную при инициализации формы. Попробуем напомнить
        пользователю через 3 секунды, какие поля следует заполнить, вызвав validateForm. Стоит помнить, что флаг
        isShowError не будет выставлен в значение true, пока blurred поля формы не будет true. Выставим и его вручную с
        помощью метода{' '}
        <Link to="/api/unit-types/form/set-field-state" className="Link">
          setFieldState
        </Link>
        .
      </div>
      <CodeHighlighter code={validateFormExampleCode} className="CodeHighlighter" />
      <ValidateFormExample />
    </div>
  );
};

export default memo(ValidateForm);
