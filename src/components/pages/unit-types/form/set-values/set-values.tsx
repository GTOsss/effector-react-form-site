import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setValuesExample } from './code-examples';

interface IProps {}

const SetValues = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>SetValues</h1>
      <div>
        Записывает новый объект со значениям в{' '}
        <Link to="/api/unit-types/form/$values" className="Link">
          $values
        </Link>{' '}
        формы.
        <h2>Пример использования</h2>
        <CodeHighlighter code={setValuesExample} className="CodeHighlighter" />
      </div>
    </div>
  );
};

export default memo(SetValues);
