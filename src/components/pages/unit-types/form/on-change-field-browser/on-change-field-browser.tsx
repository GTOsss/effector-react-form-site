import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { onChangeFieldBrowserExample } from './code-examples';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onChangeFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onChangeFieldBrowser.description" />
      </div>
      <CodeHighlighter code={onChangeFieldBrowserExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
