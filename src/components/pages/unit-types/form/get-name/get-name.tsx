import CodeHighlighter from '@components/code-highlighter';
import getName from '@pages/api/unit-types/form/get-name';
import React, { memo } from 'react';
import { getNameCode } from './code-examples';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getName</h1>
      <div>
        Утилита, которая собирает переданные аргументы в массив. Поддерживает подсветку полей состояния в тайпскрипте,
        что позволяет легче ориентироваться в сложных многоуровневых формах. В примере ниже, после открытия кавычек в
        form.getName(), предложит варианты полей и подсветит ошибку, если будет указано несуществующее поле.
      </div>
      <CodeHighlighter code={getNameCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetName);
