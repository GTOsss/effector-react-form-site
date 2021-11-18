import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div>OuterErrorsInline</div>
  );
};

export default memo(OuterErrorsInline);
