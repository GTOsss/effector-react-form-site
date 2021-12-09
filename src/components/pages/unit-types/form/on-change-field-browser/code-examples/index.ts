const onChangeFieldBrowserExampleTs = `
import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: 'unknown',
  lastName: 'unknown',
};

const form = createForm<Values>({ initialValues });

form.onChangeFieldBrowser.watch(({ name }) => console.log(name));

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
  const { controller } = useForm<Values>({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

const onChangeFieldBrowserExampleJs = `
import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: 'unknown',
  lastName: 'unknown',
};

const form = createForm({ initialValues });

form.onChangeFieldBrowser.watch(({ name }) => console.log(name));

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
  const { controller } = useForm({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

export const onChangeFieldBrowserExample = {
  jsx: onChangeFieldBrowserExampleJs,
  tsx: onChangeFieldBrowserExampleTs,
};
