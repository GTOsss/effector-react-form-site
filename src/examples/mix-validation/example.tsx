import React from 'react';
import { useForm, createForm, createNameHelper, FormValidateParams } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  password: string;
  passwordRepeat: string;
};

const validatePassword = (value) => {
  if (!value) return 'Field is required';
  if (value.length < 4) return 'Minimum of 4 characters';
};

const formValidate = ({ values, errorsInline }: FormValidateParams<Values, any>) => {
  const errors = {};

  const nameHelper = createNameHelper<Values>();
  const password = nameHelper.getStr('password');
  const passwordRepeat = nameHelper.getStr('passwordRepeat');

  // errorsInline contain fields-level errors
  const passwordsValid = !errorsInline[password] && !errorsInline[passwordRepeat];
  const passwordsDontMatch = values.password !== values.passwordRepeat;
  if (passwordsValid && passwordsDontMatch) {
    errors[password] = "Passwords don't match";
    errors[passwordRepeat] = "Passwords don't match";
  }

  // If you assign undefined instead of the error, the error from field-level will be removed.
  // For example:
  // errors.password = undefined; // Password will always be valid.

  return errors;
};

const form = createForm({
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

  // You can also pass your own store where errors will be stored.
  // const {handleSubmit, controller} = useForm({$errorsInline});

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input label="Password" controller={controller({ name: 'password', validate: validatePassword })} />
      <Input label="Repeat password" controller={controller({ name: 'passwordRepeat', validate: validatePassword })} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
export { form };
