import React, { memo } from 'react';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div>GetName</div>
  );
};

export default memo(GetName);
