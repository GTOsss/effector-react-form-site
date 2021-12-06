import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setInType } from './code-examples';

interface IProps {}

const path = 'components.pages.setIn.';

const SetIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setIn</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
      </div>
      <CodeHighlighter code={setInType} className="CodeHighlighter" />
      <ol className="List">
        <li>
          <span className="ListItemName">state</span>: <FormattedMessage id={`${path}state`} />
        </li>
        <li>
          <span className="ListItemName">path</span>: <FormattedMessage id={`${path}path`} />
        </li>
        <li>
          <span className="ListItemName">value</span>: <FormattedMessage id={`${path}value`} />
        </li>
      </ol>
      <FormattedMessage id={`${path}description2nd`} />
    </div>
  );
};

export default memo(SetIn);
