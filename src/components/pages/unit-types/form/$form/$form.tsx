import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { type } from './code-examples';

interface IProps {}

const path = 'components.pages.$form.';

const Form = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$form</h1>
      <div>
        <FormattedMessage id={`${path}description`} />{' '}
        <Link to="/api/unit-types/form/" className="Link">
          <FormattedMessage id="components.all.ofForm" />
        </Link>
        .
      </div>
      <CodeHighlighter code={type} className="CodeHighlighter" />
      <h2>
        <FormattedMessage id={`${path}Properties`} />
      </h2>
      <ol className="List">
        <li>
          a<span className="ListItemName">submitted</span>: <FormattedMessage id={`${path}submittedDescription`} />
        </li>
        <li>
          <span className="ListItemName">hasError</span>: <FormattedMessage id={`${path}hasErrorDescription`} />
        </li>
        <li>
          <span className="ListItemName">hasOuterError</span>:{' '}
          <FormattedMessage id={`${path}hasOuterErrorDescription`} />{' '}
          <Link to="/api/unit-types/form/$outer-errors-inline" className="Link">
            $outerErrorsInline
          </Link>
          .
        </li>
      </ol>
      <ol></ol>
    </div>
  );
};

export default memo(Form);
