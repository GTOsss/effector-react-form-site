export default `import React from 'react';
import { createForm, useForm, createNameHelper, FormValidateParams } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  username: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

const nameHelper = createNameHelper<Values>();

const formValidate = ({ values }: FormValidateParams<Values>) => {
  const errors = {};

  if (!values.username) {
    errors['username'] = 'Field is required';
    // for typesafe you can use nameHelper.getStr
    // errors[getNameStrTyped('username')] = 'Field is required';
  } else if (values.username.length < 4) {
    errors[nameHelper.getStr('username')] = 'Minimum of 4 characters';
  }

  if (!values.profile || !values.profile.firstName) {
    errors[nameHelper.getStr('profile', 'firstName')] = 'Field is required';
  }

  return errors;
};

const form = createForm<Values>({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
  validate: formValidate,
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
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({ name: form.getName('username') })} />
      <Input label="First name" controller={controller({ name: form.getName('profile', 'firstName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('profile', 'lastName') })} />
      <button type="submit">submit</button>
    </form>
  );
};

`;
