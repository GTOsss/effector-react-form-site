import CreateForm from '@components/pages/unit-creators/create-form';
import React, { memo } from 'react';

interface IProps {}

const CreateFormPage = ({}: IProps) => {
  return <CreateForm />;
};

export default memo(CreateFormPage);
