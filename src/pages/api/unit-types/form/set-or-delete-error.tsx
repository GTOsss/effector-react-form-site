import React, { memo } from 'react';
import SetOrDeleteError from '@components/pages/unit-types/form/set-or-delete-error';

interface IProps {}

const SetOrDeleteErrorPage = ({}: IProps) => {
  return <SetOrDeleteError />;
};

export default memo(SetOrDeleteErrorPage);
