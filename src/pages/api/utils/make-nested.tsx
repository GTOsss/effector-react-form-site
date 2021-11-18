import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

interface IProps {}

const MakeNested = ({}: IProps) => {
  return (
    <div>MakeNested</div>
  );
};

export default memo(MakeNested);
