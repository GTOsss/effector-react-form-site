import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { setOrDeleteOuterError, setOrDeleteOuterErrorType } from './code-examples';

interface IProps {}

const path = 'components.pages.setOrDeleteOuterError.';

const SetOrDeleteOuterError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>setOrDeleteOuterError</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={setOrDeleteOuterErrorType} className="CodeHighlighter" />
      <CodeHighlighter code={setOrDeleteOuterError} className="CodeHighlighter" />
    </div>
  );
};

export default memo(SetOrDeleteOuterError);
