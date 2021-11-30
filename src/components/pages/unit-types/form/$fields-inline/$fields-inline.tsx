import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { formula } from './code-examples';

interface IProps {}

const FieldsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$fieldsInline</h1>
      <div>
        Стор, содержащий объект с метаданными о полях{' '}
        <Link to="/api/unit-types/form/" className="Link">
          формы
        </Link>
        .
      </div>
      <CodeHighlighter code={formula} className="CodeHighlighter" />
      <h2>Свойства</h2>
      <ol className="List">
        <li>
          <span className="ListItemName">active</span>: true, когда на элемент формы, соответствующий полю, установлен
          фокус.
        </li>
        <li>
          <span className="ListItemName">touched</span>: говорит, было ли взаимодействие(клик) с элементом формы после
          рендера. По умолчанию false.
        </li>
        <li>
          <span className="ListItemName">changed</span>: говорит, изменялись ли данные поля после инициализации.
        </li>
        <li>
          <span className="ListItemName">blurred</span>: меняет значение на true при потере фокуса на элементе. Остаётся
          в этом состоянии до следующей реинициализации формы. В зависимости от значения этого свойства формируются
          флаги isShowError и isShowInnerError, о которых говорится{' '}
          <Link to="/api/hooks/use-form" className="Link">
            здесь
          </Link>
          .
        </li>
        <li>
          <span className="ListItemName">touchedAfterOuterError</span>: меняет значение на true при клике на элемент
          формы, если в{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          есть поле с ошибкой этого элемента. Повторная отправка формы сбрасывает значение на false.
        </li>
        <li>
          <span className="ListItemName">changedAfterOuterError</span>: меняет значение на true при изменении значений
          элемента формы, если в{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          есть поле с ошибкой этого элемента. Повторная отправка формы сбрасывает значение на false.
        </li>
        <li>
          <span className="ListItemName">blurredAfterOuterError</span>: меняет значение на true при потере фокуса на
          элементе формы, если в{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>{' '}
          есть поле с ошибкой этого элемента. Повторная отправка формы сбрасывает значение на false. В зависимости от
          значения этого свойства формируются флаги isShowError и isShowOuterError.
        </li>
        <li>
          <span className="ListItemName">validate</span>: содержит функцию валидации элемента формы.
        </li>
      </ol>
    </div>
  );
};

export default memo(FieldsInline);
