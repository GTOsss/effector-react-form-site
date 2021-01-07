export default `import React from 'react';
import {useForm} from 'effector-react-form-v1';
import cn from 'classnames';

const validateRequired = (value) => !value ? 'Field is required' : undefined;

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;
  if (value.length < 4) return 'Minimum of 4 characters';
}

const Input = ({controller, label}) => {
  const {input, error, isShowError} = controller();
  
  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {'input-error': isShowError})}
        autoComplete="off"
      />
      {isShowError && (<div className="input-error-message">{error}</div>)}
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller} = useForm({
    onSubmit: ({values, form}) => {
      if (!form.hasError) {
        alert(JSON.stringify(values, null, '  '));
      }
    },
  });

  // You can also pass your own store where errors will be stored.
  // const {handleSubmit, controller} = useForm({$errorsInline});

  return (
    <form onSubmit={handleSubmit}>
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
