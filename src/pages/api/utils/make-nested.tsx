import MakeNested from '@components/pages/utils/make-nested';
import React, { memo } from 'react';

interface IProps {}

const MakeNestedPage = ({}: IProps) => {
  return <MakeNested />;
};

export default memo(MakeNestedPage);
