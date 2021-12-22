import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { resetCode } from './code-examples';

interface IProps {}

const Reset = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>reset</h1>
      <div>
        <FormattedMessage id="components.pages.reset.description" />
      </div>
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={resetCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Reset);
