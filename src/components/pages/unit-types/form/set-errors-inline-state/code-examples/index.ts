export const setErrorsInlineStateType = `type ErrorsInline = {
    [x: string]: string;
}`;

const setErrorsInlineStateTsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import { createEffect, createEvent, sample } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

type ErrorsInline = {
  [x: string]: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm<Values>({ initialValues });

const setError = createEvent<ErrorsInline>();

const handleValidateLength = createEffect(async (values: Values) => {
  const error: ErrorsInline = {};
  Object.entries(values).forEach((item) => {
    const key = item[0];
    const value = item[1];
    if (value.length < 3) {
      error[key] = 'Must be at least 3 chars length';
    }
  });
  setError(error);
});

sample({
  source: form.$values,
  target: handleValidateLength,
});

sample({
  source: setError,
  target: form.setErrorsInlineState,
});

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
      {isShowError && <div>{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { controller } = useForm({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

const setErrorsInlineStateJsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import { createEffect, createEvent, sample } from 'effector';

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm({ initialValues });

const setError = createEvent();

const handleValidateLength = createEffect(async (values) => {
  const error = {};
  Object.entries(values).forEach((item) => {
    const key = item[0];
    const value = item[1];
    if (value.length < 3) {
      error[key] = 'Must be at least 3 chars length';
    }
  });
  setError(error);
});

sample({
  source: form.$values,
  target: handleValidateLength,
});

sample({
  source: setError,
  target: form.setErrorsInlineState,
});

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
      {isShowError && <div>{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { controller } = useForm({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

export const setErrorsInlineStateExample = {
  jsx: setErrorsInlineStateJsx,
  tsx: setErrorsInlineStateTsx,
};
