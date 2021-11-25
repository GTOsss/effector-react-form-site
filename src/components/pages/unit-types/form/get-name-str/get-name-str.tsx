import React, { memo } from 'react';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>GetNameStr</h1>
    </div>
  );
};

export default memo(GetNameStr);
