import React, { memo } from 'react';

interface IProps {}

const MakeNested = ({}: IProps) => {
  return (
    <div>MakeNested</div>
  );
};

export default memo(MakeNested);
