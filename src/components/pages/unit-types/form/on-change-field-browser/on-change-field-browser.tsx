import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { memo } from 'react';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>onChangeFieldBrowser</h1>
      <div>
        <FormattedMessage id="components.pages.onChangeFieldBrowser.description" />
      </div>
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
