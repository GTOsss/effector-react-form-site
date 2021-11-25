import React, { memo } from 'react';

interface IProps {}

const SetMeta = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>SetMeta</h1>
    </div>
  );
};

export default memo(SetMeta);
