const useErrorExampleTsx = `import React from 'react';
import { createForm, useError } from 'effector-react-form';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const userForm = createForm<Values>({ initialValues });

const Component = () => {
  const {
    inputValue,
    form,
    meta,
    fieldState,
    error,
    innerError,
    outerError,
    isShowError,
    isShowOuterError,
    isShowInnerError,
  } = useError({ name: 'lastName', form: userForm });

  return // some jsx
};

export default Component;
`;

const useErrorExampleJsx = `import React from 'react';
import { createForm, useError } from 'effector-react-form';

const initialValues = {
  name: '',
  lastName: '',
};

const userForm = createForm({ initialValues });

const Component = () => {
  const {
    inputValue,
    form,
    meta,
    fieldState,
    error,
    innerError,
    outerError,
    isShowError,
    isShowOuterError,
    isShowInnerError,
  } = useError({ name: 'lastName', form: userForm });

  return // some jsx
};

export default Component;
`;

export const useErrorExample = {
  jsx: useErrorExampleJsx,
  tsx: useErrorExampleTsx,
};
