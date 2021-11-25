const resetCodeTsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: '',
  lastName: '',
};

type Values = {
  name: string;
  lastName: string;
};

const form = createForm<Values>({
  initialValues,
});

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
  const { reset, controller } = useForm<Values>({ form });

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name' })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
      <button onClick={reset}>reset</button>
    </div>
  );
};
`;

const resetCodeJsx = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: 'unknown',
  lastName: 'unknown',
};

const form = createForm({
  initialValues,
});

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
  const { reset, controller } = useForm({ form });

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name' })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
      <button onClick={reset}>reset</button>
    </div>
  );
};
`;

export const resetCode = {
  jsx: resetCodeJsx,
  tsx: resetCodeTsx,
};
