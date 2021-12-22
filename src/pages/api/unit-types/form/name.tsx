import Name from '@components/pages/unit-types/form/name';
import React, { memo } from 'react';

interface IProps {}

const NamePage = ({}: IProps) => {
  return <Name />;
};

export default memo(NamePage);
