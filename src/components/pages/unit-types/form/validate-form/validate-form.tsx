import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { validateFormExampleCode } from './code-examples';
import ValidateFormExample from './example/validate-form-example';

interface IProps {}

const path = 'components.pages.validateForm.';

const ValidateForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>validateForm</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/set-field-state" className="Link">
          setFieldState
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
      <CodeHighlighter code={validateFormExampleCode} className="CodeHighlighter" />
      <ValidateFormExample />
    </div>
  );
};

export default memo(ValidateForm);
