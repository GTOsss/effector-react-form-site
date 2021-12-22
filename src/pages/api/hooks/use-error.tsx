import UseError from '@components/pages/hooks/use-error';
import React, { memo } from 'react';

interface IProps {}

const UseErrorPage = ({}: IProps) => {
  return <UseError />;
};

export default memo(UseErrorPage);
