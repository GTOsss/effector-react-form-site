import CodeHighlighter from '@components/code-highlighter';
import getName from '@pages/api/unit-types/form/get-name';
import React, { memo } from 'react';
import { getNameCode } from './code-examples';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getName</h1>
      {/* const getName = (...keys: any): any => keys; */}
      <div>
        Утилита, которая собирает переданные аргументы в массив. Применимо для указания полей формы во вложенных
        объектах.
      </div>
      <CodeHighlighter code={getNameCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetName);
