import React, { memo } from 'react';

interface IProps {}

const MakeNestedPage = ({}: IProps) => {
  return <div>MakeNested</div>;
};

export default memo(MakeNestedPage);
