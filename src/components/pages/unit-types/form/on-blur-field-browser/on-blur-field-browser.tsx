import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { onBlurFieldBrowserExample } from './code-examples';

interface IProps {}

const OnBlurFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onBlurFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onBlurFieldBrowser.description" />
      </div>
      <CodeHighlighter code={onBlurFieldBrowserExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(OnBlurFieldBrowser);
