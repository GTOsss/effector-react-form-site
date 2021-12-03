import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { onSubmitCode } from './code-examples';

interface IProps {}

const OnSubmit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onSubmit</h1>
      <div>
        <FormattedMessage id="components.pages.onSubmit.description" />{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          createForm
        </Link>
        .
      </div>
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={onSubmitCode} className="CodeHighlighter" />
    </div>
  );
};

export default memo(OnSubmit);
