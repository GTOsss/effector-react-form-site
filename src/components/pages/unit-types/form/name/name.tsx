import React, { memo } from 'react';

interface IProps {}

const Name = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>Name</h1>
    </div>
  );
};

export default memo(Name);
