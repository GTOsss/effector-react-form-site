import React, { memo } from 'react';
import MainLayout from '@components/main-layout';

type Props = {};

const MainPage: React.FC<Props> = ({}) => {
  return (
    <MainLayout>
      <h1>Main page</h1>
    </MainLayout>
  );
};

export default memo(MainPage);
