const getNameStrTsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const initialValues = {
  user: {
    name: 'unknown',
    lastName: 'unknown',
  },
  serverId: 1,
};

type Values = {
  user: {
    name: string;
    lastName: string;
  };
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
  const fields = useStore(form.$fieldsInline);

  useEffect(() => {
    console.log(fields[form.getNameStr('user', 'name')]);
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: form.getName('user', 'name') })} />
      <Input label="Last name" controller={controller({ name: form.getName('user', 'lastName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('serverId') })} />
    </form>
  );
};
`;

const getNameStrJsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const initialValues = {
  user: {
    name: 'unknown',
    lastName: 'unknown',
  },
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
  const fields = useStore(form.$fieldsInline);

  useEffect(() => {
    console.log(fields[form.getNameStr('user', 'name')]);
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: form.getName('user', 'name') })} />
      <Input label="Last name" controller={controller({ name: form.getName('user', 'lastName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('serverId') })} />
    </form>
  );
};
`;

export const getNameStrCode = {
  jsx: getNameStrJsx,
  tsx: getNameStrTsx,
};
