import React, { memo } from 'react';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>OnChangeFieldBrowser</h1>
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
