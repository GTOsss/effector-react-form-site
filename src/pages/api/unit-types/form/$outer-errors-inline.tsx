import React, { memo } from 'react';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div>OuterErrorsInline</div>
  );
};

export default memo(OuterErrorsInline);
