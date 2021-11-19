import ErrorsInline from '@components/pages/unit-types/form/$errors-inline';
import React, { memo } from 'react';

interface IProps {}

const ErrorsInlinePage = ({}: IProps) => {
  return <ErrorsInline />;
};

export default memo(ErrorsInlinePage);
