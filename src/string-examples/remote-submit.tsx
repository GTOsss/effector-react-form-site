export default `import React from 'react';
import {useForm} from 'effector-react-form-v1';
import {createEvent} from 'effector';
import cn from 'classnames';

const submit = createEvent(); // create global submit event

window.remoteSubmit = submit; // you can call a submit in the browser console

const validateRequired = (value) => !value ? 'Field is required' : undefined;

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;
  if (value.length < 4) return 'Minimum of 4 characters';
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
  const {handleSubmit, controller, $values, $errorsInline, $form} = useForm({
    onSubmit: ({values, form}) => {
      console.log('submit');
      if (!form.hasError) {
        alert(JSON.stringify(values, null, '  '));
      }
    },
    submit, // pass remote submit event
  });
  
  // You can also get a local submit event without creating your own.
  // const {submit, ...} = useForm({...})
  
  return (
    <div>
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

      <div style={{width: '460px', margin: 'auto' }}>
        <button onClick={submit as any} type="button">
          Button outside the form for submit form
        </button>
      </div>
    </div>
  );
};`;
