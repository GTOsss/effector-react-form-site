import React, { memo } from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

interface IProps {}

const path = 'components.pages.fieldArray.form.';

const Form = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>form</h1>
      <div>
        <FormattedMessage id={`${path}description`} />{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          <FormattedMessage id="components.all.initialization" />
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(Form);
