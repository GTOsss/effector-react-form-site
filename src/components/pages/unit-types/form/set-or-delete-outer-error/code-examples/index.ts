export const setOrDeleteOuterErrorType = `type SetOrDeleteOuterErrorParams = {
  field: string | string[];
  error: string;
};
`;

const setOrDeleteOuterErrorJsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: '',
  lastName: '',
};

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
  const { setOrDeleteOuterError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteOuterError({
      field: 'name',
      error: 'FIeld is required',
    });
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

const setOrDeleteOuterErrorTsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

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
  const { setOrDeleteOuterError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteOuterError({
      field: 'name',
      error: 'FIeld is required',
    });
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

export const setOrDeleteOuterError = {
  jsx: setOrDeleteOuterErrorJsx,
  tsx: setOrDeleteOuterErrorTsx,
};
