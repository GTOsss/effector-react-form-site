import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { ErrorsInlineType, setOuterErrorsInlineState } from './code-examples';

interface IProps {}

const path = 'components.pages.setOuterErrorsInlineState.';

const SetOuterErrorsInlineState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setOuterErrorsInlineState</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/set-errors-inline-state" className="Link">
          setErrorsInlineState
        </Link>
        , <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        .
      </div>
      <CodeHighlighter code={ErrorsInlineType} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={setOuterErrorsInlineState} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOuterErrorsInlineState);
