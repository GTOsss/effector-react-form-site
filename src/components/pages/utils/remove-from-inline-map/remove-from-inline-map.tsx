import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { inlineMapExplanation } from './code-examples';

interface IProps {}

const RemoveFromInlineMap = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>removeFromInlineMap</h1>
      <div>
        Метод для удаления из плоских (inline) объектов состояния формы. Главное особенность в том, что в
        псевдовложенных объектах, таких как состояни{' '}
        <Link to="/en/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        , где вложенные поля указываются таким образом
        <CodeHighlighter code={inlineMapExplanation} className="CodeHighlighter" />В основном этот метод используется
        при низкоуровневых манипуляций с формой, когда нужно напрямую удалять поля из состояния в дочерних компонентах,
        таких как{' '}
        <Link to="/api/hooks/use-field-array" className="Link">
          FieldArray
        </Link>
        . В большинстве случаев, достаточно описанного выше API.
      </div>
    </div>
  );
};

export default memo(RemoveFromInlineMap);
