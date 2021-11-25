import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { metaType } from './code-examples';

interface IProps {}

const SetMeta = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setMeta</h1>
      <div>
        Принимает один аргумент, который будет записан в{' '}
        <Link to="/api/unit-types/form/$meta" className="Link">
          $meta
        </Link>
        .
        <CodeHighlighter code={metaType} className="CodeHighlighter" />
      </div>
    </div>
  );
};

export default memo(SetMeta);
