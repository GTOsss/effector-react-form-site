import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;
  if (value.length < 4) return 'Minimum of 4 characters';
};

type Values = {
  username: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

const form = createForm<Values>({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
});

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', { 'input-error': isShowError })}
        autoComplete="off"
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const Form = () => {
  const { handleSubmit, controller } = useForm({ form });

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input label="Username" controller={controller({ name: form.getName('username'), validate: validateUsername })} />
      <Input
        label="First name"
        controller={controller({ name: form.getName('profile', 'firstName'), validate: validateRequired })}
      />
      <Input
        label="Last name"
        controller={controller({ name: form.getName('profile', 'lastName'), validate: validateRequired })}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
export { form };
