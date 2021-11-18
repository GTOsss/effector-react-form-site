import React, { memo } from 'react';

interface IProps {}

const Name = ({}: IProps) => {
  return (
    <div>Name</div>
  );
};

export default memo(Name);
