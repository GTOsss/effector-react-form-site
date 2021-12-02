import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setErrorsInlineStateExample, setErrorsInlineStateType } from './code-examples';

interface IProps {}

const path = 'components.pages.setErrorsInlineState.';

const SetErrorsInlineState = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setErrorsInlineState</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/set-or-delete-error" className="Link">
          setOrDeleteError
        </Link>{' '}
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/api/unit-types/form/$errors-inline" className="Link">
          $errorsInline
        </Link>{' '}
        <FormattedMessage id={`${path}description3rd`} />
      </div>
      <CodeHighlighter code={setErrorsInlineStateType} className="CodeHighlighter" />
      <div>
        <FormattedMessage id={`${path}description4th`} />
      </div>
      <h2>
        <FormattedMessage id="components.all.usageExample" />
      </h2>
      <CodeHighlighter code={setErrorsInlineStateExample} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetErrorsInlineState);
