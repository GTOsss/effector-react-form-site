import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React from 'react';

const path = 'components.pages.fieldArray.';

const index = () => {
  return (
    <div className="ComponentRoot">
      <h1>fieldArray</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/hooks/use-field-array" className="Link">
          useFieldArray
        </Link>
        <FormattedMessage id={`${path}description2nd`} />
      </div>
    </div>
  );
};

export default index;
