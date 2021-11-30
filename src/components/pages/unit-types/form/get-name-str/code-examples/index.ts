const getNameStrTsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  'user.name': 'unknown',
  'user.lastName': 'unknown',
  serverId: 1,
};

type Values = {
  'user.name': string;
  'user.lastName': string;
  serverId: number;
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
  const { controller } = useForm<Values>({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: form.getNameStr('user.name'), flat: true })} />
      <Input label="Last name" controller={controller({ name: form.getNameStr('user.lastName'), flat: true })} />
      <Input label="Last name" controller={controller({ name: form.getNameStr('serverId') })} />
    </form>
  );
};
`;

const getNameStrJsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  'user.name': 'unknown',
  'user.lastName': 'unknown',
  serverId: 1,
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
  const { controller } = useForm({ form });

  return (
    <form>
      <Input label="Name" controller={controller({ name: form.getNameStr('user.name'), flat: true })} />
      <Input label="Last name" controller={controller({ name: form.getNameStr('user.lastName'), flat: true })} />
      <Input label="Last name" controller={controller({ name: form.getNameStr('serverId') })} />
    </form>
  );
};
`;

export const getNameStrCode = {
  jsx: getNameStrJsx,
  tsx: getNameStrTsx,
};
