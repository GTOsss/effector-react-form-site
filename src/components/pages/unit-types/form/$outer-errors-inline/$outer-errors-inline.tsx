import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { $outerErrorsInlineType } from './code-examples';

interface IProps {}

const path = 'components.pages.$outerErrorsInline.';

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$outerErrorsInline</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/examples/server-side-validation" className="Link">
          <FormattedMessage id={`${path}serverValidation`} />
        </Link>
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/unit-types/form/$errors-inline" className="Link">
          $errorsInline
        </Link>
        , <FormattedMessage id={`${path}description3rd`} />
      </div>
      <br />
      <div>
        <FormattedMessage id={`${path}description4th`} />{' '}
        <Link to="/api/unit-types/form/set-or-delete-outer-error" className="Link">
          setOrDeleteOuterError
        </Link>{' '}
        <FormattedMessage id="components.all.and" />{' '}
        <Link to="/api/unit-types/form/set-outer-errors-inline-state" className="Link">
          setOuterErrorsInlineState
        </Link>
        <FormattedMessage id={`${path}end`} />
        <CodeHighlighter code={$outerErrorsInlineType} className="CodeHighlighter" />
      </div>
    </div>
  );
};

export default memo(OuterErrorsInline);
