import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OnFocusFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onFocusFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onFocusFieldBrowser.description" />
      </div>
    </div>
  );
};

export default memo(OnFocusFieldBrowser);
