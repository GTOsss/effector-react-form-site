import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div>GetNameStr</div>
  );
};

export default memo(GetNameStr);
