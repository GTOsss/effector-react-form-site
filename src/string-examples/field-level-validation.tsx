export default `import React from 'react';
import {useForm} from 'react-effector-form';
import cn from 'classnames';

const validateRequired = (value) => !value ? 'Field is required' : undefined;

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) {
    return requiredError;
  }

  if (value.length < 4) {
    return 'Minimum of 4 characters';
  }
}

const Input = ({
  controller,
  label,
}) => {
  const {input, error, form, fieldState} = controller();

  // You can also pass your own store where errors will be stored:
  // const {input, error, form, fieldState} = controller({$errorsInline});

  const showError = (form.submitted || fieldState.blurred) && error;

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {'input-error': Boolean(showError)})}
        autoComplete="off"
      />
      {showError && (
        <div className="input-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller} = useForm();

  const onSubmit = ({values, form}) => {
    if (!form.hasError) {
      alert(JSON.stringify(values, null, '  '));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        controller={controller({name: 'username', validate: validateUsername})}
      />
      <Input
        label="First name"
        controller={controller({name: 'profile.firstName', validate: validateRequired})}
      />
      <Input
        label="Last name"
        controller={controller({name: 'profile.lastName', validate: validateRequired})}
      />
      <button type="submit">submit</button>
    </form>
  );
}`;
