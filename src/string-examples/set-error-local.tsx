export default `import React from 'react';
import {useForm} from 'effector-react-form';
import cn from 'classnames';

const validateRequired = (value) => !value ? 'Field is required' : undefined;

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
  const {handleSubmit, controller, setOrDeleteOuterError} = useForm();

  const onSubmit = ({values, form}) => {
    if (!form.hasError) {
      alert(JSON.stringify(values, null, '  '));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First name"
        controller={controller({name: 'profile.firstName', validate: validateRequired})}
      />
      <button type="submit">submit</button>
      <button
        type="button"
        onClick={() => setOrDeleteOuterError({field: 'profile.firstName', error: 'firstName error'})}
      >
        set firstName error
      </button>
      <button
        type="button"
        onClick={() => setOrDeleteOuterError({field: 'profile.lastName', error: 'lastName error'})}
      >
        set lastName error
      </button>
    </form>
  );
};`;
