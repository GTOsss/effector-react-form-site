import React, { memo } from 'react';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div>GetNameStr</div>
  );
};

export default memo(GetNameStr);
