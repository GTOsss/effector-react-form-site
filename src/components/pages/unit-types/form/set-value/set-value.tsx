import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setValueType, setValueExample } from './code-examples';

interface IProps {}

const path = 'components.pages.setValue.';

const SetValue = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setValue</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />
      </div>
      <CodeHighlighter code={setValueType} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={setValueExample} className="CodeHighlighter" />
      <div>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
    </div>
  );
};

export default memo(SetValue);
