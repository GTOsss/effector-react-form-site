import React, { memo } from 'react';

interface IProps {}

const FieldInit = ({}: IProps) => {
  return (
    <div className="componentRoot">
      <h1>FieldInit</h1>
    </div>
  );
};

export default memo(FieldInit);
