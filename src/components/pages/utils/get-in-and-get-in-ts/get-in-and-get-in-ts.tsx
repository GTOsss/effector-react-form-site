import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { getInTsType, getInType } from './code-examples';

interface IProps {}

const path = 'components.pages.getIn.';

const GetInAndGetInTs = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>getIn</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />
      </div>
      <CodeHighlighter code={getInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: <FormattedMessage id={`${path}state`} />
        </li>
        <li>
          <span className="ListItemName">path</span>: <FormattedMessage id={`${path}path`} />
        </li>
        <li>
          <span className="ListItemName">defaultValue</span>: <FormattedMessage id={`${path}defaultValue`} />
        </li>
      </ol>
      <h1>getInTs</h1>
      <div>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={getInTsType} className="CodeHighlighter" />
    </div>
  );
};

export default memo(GetInAndGetInTs);
