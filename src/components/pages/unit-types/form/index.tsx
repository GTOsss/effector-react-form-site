import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React from 'react';

const path = 'components.pages.Form.';

const Form = () => {
  return (
    <div className="ComponentRoot">
      <h1>Unit type - Form</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          <FormattedMessage id={`${path}initialization`} />
        </Link>
        <FormattedMessage id={`${path}description2nd`} />{' '}
        <Link to="/api/hooks/use-form" className="Link">
          <FormattedMessage id={`${path}here`} />
        </Link>
        .
      </div>
    </div>
  );
};

export default Form;
