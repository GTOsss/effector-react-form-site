export default `import React from 'react';
import {useForm} from 'react-effector-form';
import cn from 'classnames';

const validatePassword = (value) => {
  if (!value) return 'Field is required';
  if (value.length < 4) return 'Minimum of 4 characters';
};

const formValidate = ({values, errorsInline}) => {
  const errors = {};

  // errorsInline contain fields-level errors
  const passwordsValid = !errorsInline.password && !errorsInline.passwordRepeat;
  const passwordsDontMatch = values.password !== values.passwordRepeat;
  if (passwordsValid && passwordsDontMatch) {
    errors.password = 'Passwords don\\'t match';
    errors.passwordRepeat = 'Passwords don\\'t match';
  }

  // If you assign undefined instead of the error, the error from field-level will be removed.
  // For example:
  // errors.password = undefined; // Password will always be valid.

  return errors;
};

const Input = ({controller, label}) => {
  const {input, error, form, fieldState} = controller();
  const showError = form.submitted || fieldState.blurred;

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {'input-error': Boolean(showError && error)})}
        autoComplete="off"
      />
      {(form.submitted || fieldState.blurred) && error && (
        <div className="input-error-message">{error}</div>
      )}
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller} = useForm({validate: formValidate});

  const onSubmit = ({values, form}) => {
    if (!form.hasError) {
      alert(JSON.stringify(values, null, '  '));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Password"
        controller={controller({name: 'password', validate: validatePassword})}
      />
      <Input
        label="Repeat password"
        controller={controller({name: 'passwordRepeat', validate: validatePassword})}
      />
      <button type="submit">submit</button>
    </form>
  );
};`;
