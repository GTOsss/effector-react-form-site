import CreateNameHelper from '@components/pages/utils/create-name-helper';
import React, { memo } from 'react';

interface IProps {}

const CreateNameHelperPage = ({}: IProps) => {
  return <CreateNameHelper />;
};

export default memo(CreateNameHelperPage);
