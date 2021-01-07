export default `import React from 'react';
import {useForm} from 'effector-react-form-v1';
import cn from 'classnames';

const formValidate = ({values}) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Field is required';
  } else if (values.username.length < 4) {
    errors.username = 'Minimum of 4 characters';
  }

  if (!values.profile || !values.profile.firstName) {
    errors['profile.firstName'] = 'Field is required'; // Field without nesting!
  }

  return errors;
};

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
    validate: formValidate,
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
      <Input label="Username" controller={controller({name: 'username'})} />
      <Input label="First name" controller={controller({name: 'profile.firstName'})} />
      <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
      <button type="submit">submit</button>
    </form>
  );
};`;
