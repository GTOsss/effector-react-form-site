import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OnBlurFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onBlurFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onBlurFieldBrowser.description" />
      </div>
    </div>
  );
};

export default memo(OnBlurFieldBrowser);
