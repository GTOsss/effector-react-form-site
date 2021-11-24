export const setOrDeleteErrorType = `type SetOrDeleteErrorParams = {
  field: string | string[];
  error?: string;
};
`;

const setOrDeleteErrorJs = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import { createEffect, createEvent, sample } from 'effector';

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm({ initialValues });

const setError = createEvent();

const handleValidateLength = createEffect(async (values: Values) => {
  const error = { field: '', error: '' };
  Object.entries(values).forEach((item) => {
    const field = item[0];
    const value = item[1];
    if (value && value.length < 3) {
      error.field = field;
      error.error = 'Must be at least 3 chars length';
      setError(error);
    };
  });
});

sample({
  source: form.$values,
  target: handleValidateLength,
});

sample({
  source: setError,
  target: form.setOrDeleteError,
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

const setOrDeleteErrorTs = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import { createEffect, createEvent, sample } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

type SetOrDeleteErrorParams = {
  field: string | string[];
  error?: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm<Values>({ initialValues });

const setError = createEvent<SetOrDeleteErrorParams>();

const handleValidateLength = createEffect(async (values: Values) => {
  const error: SetOrDeleteErrorParams = { field: '', error: '' };
  Object.entries(values).forEach((item) => {
    const field = item[0];
    const value = item[1];
    if (value && value.length < 3) {
      error.field = field;
      error.error = 'Must be at least 3 chars length';
      setError(error);
    };
  });
});

sample({
  source: form.$values,
  target: handleValidateLength,
});

sample({
  source: setError,
  target: form.setOrDeleteError,
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

export const setOrDeleteError = {
  jsx: setOrDeleteErrorJs,
  tsx: setOrDeleteErrorTs,
};
