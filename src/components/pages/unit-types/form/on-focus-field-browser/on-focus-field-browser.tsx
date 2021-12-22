import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { onFocusFieldBrowserExample } from './code-examples';

interface IProps {}

const OnFocusFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onFocusFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onFocusFieldBrowser.description" />
      </div>
      <CodeHighlighter code={onFocusFieldBrowserExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(OnFocusFieldBrowser);
