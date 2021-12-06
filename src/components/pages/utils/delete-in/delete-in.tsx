import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { deleteInType, removeEmpty2ndExample, removeEmpty3rdExample, removeEmptyExample } from './code-examples';

interface IProps {}

const path = 'components.pages.deleteIn.';

const DeleteIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>deleteIn</h1>
      <div>
        <FormattedMessage id={`${path}description`} />
      </div>
      <CodeHighlighter code={deleteInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: <FormattedMessage id={`${path}state`} />
        </li>
        <li>
          <span className="ListItemName">path</span>: <FormattedMessage id={`${path}path`} />
        </li>
        <li>
          <span className="ListItemName">removeEmpty</span>: <FormattedMessage id={`${path}removeEmpty`} />
          <CodeHighlighter code={removeEmptyExample} className="CodeHighlighter" />
          <CodeHighlighter code={removeEmpty2ndExample} className="CodeHighlighter" />
          <CodeHighlighter code={removeEmpty3rdExample} className="CodeHighlighter" />
        </li>
        <li>
          <span className="ListItemName">inDeep</span>: <FormattedMessage id={`${path}inDeep`} />
        </li>
      </ol>
    </div>
  );
};

export default memo(DeleteIn);
