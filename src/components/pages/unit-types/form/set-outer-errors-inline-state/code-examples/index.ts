export const ErrorsInlineType = `type ErrorsInline = {
    [x: string]: string;
}`;

const setOuterErrorsInlineStateJsx = `import React, { useEffect } from 'react';
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
  const { setOuterErrorsInlineState, controller } = useForm({ form });

  useEffect(() => {
    setOuterErrorsInlineState({
      name: 'Field is required',
      lastName: 'Length must be at least 5 characters',
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

const setOuterErrorsInlineStateTsx = `import React, { useEffect } from 'react';
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
  const { setOuterErrorsInlineState, controller } = useForm({ form });

  useEffect(() => {
    setOuterErrorsInlineState({
      name: 'Field is required',
      lastName: 'Length must be at least 5 characters',
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

export const setOuterErrorsInlineState = {
  jsx: setOuterErrorsInlineStateJsx,
  tsx: setOuterErrorsInlineStateTsx,
};
