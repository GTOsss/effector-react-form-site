import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

interface IProps {}

const OnSubmit = ({}: IProps) => {
  return (
    <div>OnSubmit</div>
  );
};

export default memo(OnSubmit);
