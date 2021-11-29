const useFormExampleJsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';

const initialValues = {
  name: 'unknown',
  'user.lastName': 'unknown',
};

const validateRequired = (value) => (value ? undefined : 'required');

const form = createForm({ initialValues });

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

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

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name', flat: false, validate: validateRequired })} />
      <Input label="Last name" controller={controller({ name: 'lastName', flat: true, validate: validateRequired })} />
    </form>
  );
};
`;

export const useFormExampleTsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: 'unknown',
  'user.lastName': 'unknown',
};

const validateRequired = (value) => (value ? undefined : 'required');

const form = createForm<Values>({ initialValues });

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

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

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name', flat: false, validate: validateRequired })} />
      <Input label="Last name" controller={controller({ name: 'lastName', flat: true, validate: validateRequired })} />
    </form>
  );
};
`;

export const useFormExample = {
  jsx: useFormExampleJsx,
  tsx: useFormExampleTsx,
};

export const controllerResult = `{
        input: {
          name,
          value,
          onChange,
        },
        form,
        meta,
        fieldState,
        error,
        innerError,
        outerError,
        isShowError,
        isShowOuterError,
        isShowInnerError,
        validate,
        setFieldState,
        setOrDeleteError,
        setOrDeleteOuterError,
        setOuterErrorsInlineState,
      };`;
