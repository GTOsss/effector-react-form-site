export default `import React from 'react';
import { sample, createEffect } from 'effector';
import { useStore } from 'effector-react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const createServerErrors = (values) => {
  const errors = {};
  if (values.username === 'test') errors.username = 'Already taken';
  if (values.profile.firstName.length < 4) errors['profile.firstName'] = 'Minimum of 4 characters';
  return errors;
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 700));

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const postUserFx = createEffect({
  handler: async ({ values }) => {
    await sleep();
    const serverSideError = createServerErrors(values);

    if (Object.keys(serverSideError).length) {
      throw serverSideError;
    }
  },
});

const form = createForm({
  onSubmit: postUserFx,
});
sample({
  source: postUserFx.failData,
  target: form.$outerErrorsInline,
});

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
  const pending = useStore(postUserFx.pending);
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({ name: form.getName('username'), validate: validateRequired })} />
      <Input
        label="First name"
        controller={controller({ name: form.getName('profile', 'firstName'), validate: validateRequired })}
      />
      <Input
        label="Last name"
        controller={controller({ name: form.getName('profile', 'lastName'), validate: validateRequired })}
      />
      <button type="submit" disabled={pending}>
        create user
      </button>
    </form>
  );
};

`;
