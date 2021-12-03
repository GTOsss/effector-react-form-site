import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { pushExample } from './code-examples';

interface IProps {}

const Push = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>push</h1>
      <div>
        <FormattedMessage id="components.pages.fieldArray.push.description" />
      </div>
      <CodeHighlighter code={pushExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Push);
