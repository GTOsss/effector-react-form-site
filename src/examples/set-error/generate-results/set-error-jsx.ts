export default `import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const form = createForm({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
});

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();
  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {
          'input-error': isShowError,
        })}
        autoComplete="off"
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const Form = () => {
  const { handleSubmit, controller } = useForm({
    form,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="First name"
        controller={controller({ name: form.getName('profile', 'firstName'), validate: validateRequired })}
      />
      <Input
        label="Last name"
        controller={controller({ name: form.getName('profile', 'lastName'), validate: validateRequired })}
      />
      <button type="submit">submit</button>
      <button
        type="button"
        onClick={() =>
          form.setOrDeleteOuterError({
            field: form.getName('profile', 'firstName'),
            error: 'firstName error',
          })
        }
      >
        set firstName error
      </button>
      <button
        type="button"
        onClick={() =>
          form.setOrDeleteOuterError({
            field: form.getName('profile', 'lastName'),
            error: 'lastName error',
          })
        }
      >
        set lastName error
      </button>
    </form>
  );
};

`;
