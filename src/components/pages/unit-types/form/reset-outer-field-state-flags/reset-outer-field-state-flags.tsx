import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const path = 'components.pages.resetOuterFieldStateFlags.';

const ResetOuterFieldStateFlags = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>resetOuterFieldStateFlags</h1>
      <div>
        <FormattedMessage id={`${path}description1st`} />{' '}
        <Link to="/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>{' '}
        <FormattedMessage id={`${path}description2nd`} />
      </div>
    </div>
  );
};

export default memo(ResetOuterFieldStateFlags);
