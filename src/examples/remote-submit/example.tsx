import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const form = createForm({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
});

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;
  if (value.length < 4) return 'Minimum of 4 characters';
};

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
    <div>
      <form onSubmit={handleSubmit}>
        <Input label="Username" controller={controller({ name: 'username', validate: validateUsername })} />
        <Input label="First name" controller={controller({ name: 'profile.firstName', validate: validateRequired })} />
        <Input label="Last name" controller={controller({ name: 'profile.lastName', validate: validateRequired })} />
        <button type="submit">submit</button>
      </form>

      <div style={{ width: '460px', margin: 'auto' }}>
        <button onClick={form.submit} type="button">
          Button outside the form for submit form
        </button>
      </div>
    </div>
  );
};

export default Form;
export { form };
