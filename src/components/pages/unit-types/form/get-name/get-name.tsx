import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getNameCode } from './code-examples';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getName</h1>
      <div>
        <FormattedMessage id="components.pages.getName.description" />
      </div>
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={getNameCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetName);
