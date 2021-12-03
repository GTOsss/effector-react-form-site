import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const FieldInit = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>fieldInit</h1>
      <div>
        <FormattedMessage id="components.pages.fieldInit.description" />
      </div>
    </div>
  );
};

export default memo(FieldInit);
