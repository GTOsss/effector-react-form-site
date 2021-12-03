import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { submitCode } from './code-examples';
import SubmitExample from './example/submit-example';

interface IProps {}

const Submit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>submit</h1>
      <div>
        <FormattedMessage id="components.pages.submit.description" />.
      </div>
      <CodeHighlighter code={submitCode} className="CodeHighlighter" />
      <SubmitExample />
    </div>
  );
};

export default memo(Submit);
