import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getPathExample, getStrExample, nameHelperExample } from './code-examples';

interface IProps {}

const path = 'components.pages.createNameHelper.';

const CreateNameHelper = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>createNameHelper</h1>
      <div>
        <FormattedMessage id={`${path}description`} />
      </div>
      <CodeHighlighter code={nameHelperExample} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">getPath</span>: <FormattedMessage id={`${path}getPath`} />
          <CodeHighlighter code={getPathExample} className="CodeHighlighter" />
        </li>
        <li>
          <span className="ListItemName">getStr</span>: <FormattedMessage id={`${path}getStr`} />
          <CodeHighlighter code={getStrExample} className="CodeHighlighter" />
        </li>
      </ol>
    </div>
  );
};

export default memo(CreateNameHelper);
