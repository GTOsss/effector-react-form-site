import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getNameStrCode } from './code-examples';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getNameStr</h1>
      <div>
        Утилита, которая конкатенирует переданные строки через точку. Поддерживает подсветку полей состояния, что
        позволяет легче ориентироваться в больших объектах. Применимо для навигации по плоским объектам, таким как
        состояние $fieldsInline В примере ниже, после открытия кавычек в form.getNameStr(), предложит варианты полей. В
        ts/tsx файлах, при указании несуществующих полей, покажет ошибку типизации.
      </div>
      <CodeHighlighter code={getNameStrCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetNameStr);
