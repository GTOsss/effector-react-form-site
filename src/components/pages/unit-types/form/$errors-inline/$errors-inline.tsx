import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const path = 'components.pages.$errorsInline.'

const ErrorsInline = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>$errorsInline</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/examples/field-level-validation" className="Link">
          <FormattedMessage id={`${path}validationFunction`} />
        </Link>{' '}
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/api/unit-types/form/set-or-delete-error" className="Link">
          setOrDeleteError
        </Link>{' '}
        <FormattedMessage id="components.all.and" />{' '}
        <Link to="/api/unit-types/form/set-errors-inline-state" className="Link">
          setErrorsInlineState
        </Link>
        <FormattedMessage id={`${path}end`} />{' '}
      </div>
    </div>
  );
};

export default memo(ErrorsInline);
