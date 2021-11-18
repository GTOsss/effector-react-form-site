import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

interface IProps {}

const GetName = ({}: IProps) => {
  return (
    <div>GetName</div>
  );
};

export default memo(GetName);
