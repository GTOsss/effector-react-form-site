import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { removeExample } from './code-examples';

interface IProps {}

const Remove = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>remove</h1>
      <div>
        <FormattedMessage id="components.pages.fieldArray.remove.description" />
      </div>
      <CodeHighlighter code={removeExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(Remove);
