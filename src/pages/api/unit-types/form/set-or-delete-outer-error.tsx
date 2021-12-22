import SetOrDeleteOuterError from '@components/pages/unit-types/form/set-or-delete-outer-error';
import React, { memo } from 'react';

interface IProps {}

const SetOrDeleteOuterErrorPage = ({}: IProps) => {
  return <SetOrDeleteOuterError />;
};

export default memo(SetOrDeleteOuterErrorPage);
