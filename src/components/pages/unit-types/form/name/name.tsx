import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const Name = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>Name</h1>
      <div>
        <FormattedMessage id="components.pages.name.description" />{' '}
        <Link to="/api/unit-creators/create-form" className="Link">
          <FormattedMessage id="components.all.formInitialization" />
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(Name);
