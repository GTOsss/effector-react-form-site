export const useFormExample = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: 'unknown',
  lastName: 'unknown',
};

const form = createForm<Values>({ initialValues });

export const Component = () => {
  const {
    controller,
    handleSubmit,
    setMeta,
    setValue,
    setValues,
    setOrDeleteError,
    setFieldState,
    setOrDeleteOuterError,
    setOuterErrorsInlineState,
    validateForm,
    submit,
    reset,
    fieldInit
  } = useForm({ form, meta: {}, resetUnmount: true });

  return <div>Some content</div>;
};
`;
