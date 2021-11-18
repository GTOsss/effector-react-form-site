import React, { memo } from 'react';

interface IProps {}

const OnSubmit = ({}: IProps) => {
  return (
    <div>OnSubmit</div>
  );
};

export default memo(OnSubmit);
