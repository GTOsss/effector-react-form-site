export default `import React from 'react';
import {createStore, createEvent, sample, createEffect} from 'effector';
import {useStore} from 'effector-react';
import {useForm} from 'effector-react-form-v1';
import cn from 'classnames';

const validateRequired = (value) => !value ? 'Field is required' : undefined;

const createServerErrors = (values) => {
  const errors = {};
  if (values.username === 'test') errors.username = 'Already taken';
  if (values.profile.firstName.length < 4) errors['profile.firstName'] = 'Minimum of 4 characters';
  return errors;
}

const sleep = () => new Promise(resolve => setTimeout(resolve, 700));

const clearOuterErrors = createEvent();

const $outerErrorsInline = createStore({}).reset(clearOuterErrors);

const postUserFx = createEffect({
  handler: async values => {
    await sleep();

    const serverSideError = createServerErrors(values);
    console.log(serverSideError);
    if (Object.keys(serverSideError).length) {
      throw serverSideError;
    }
  },
});

sample({
  source: postUserFx.failData,
  target: $outerErrorsInline,
});

const Input = ({controller, label}) => {
  const {input, error, isShowError, } = controller();

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
    $outerErrorsInline,
    onSubmit: ({values, form}) => {
      clearOuterErrors();
  
      if (!form.hasError) {
        postUserFx(values);
      }
    },
  });

  const pending = useStore(postUserFx.pending);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        controller={controller({name: 'username', validate: validateRequired})}
      />
      <Input
        label="First name"
        controller={controller({name: 'profile.firstName', validate: validateRequired})}
      />
      <Input
        label="Last name"
        controller={controller({name: 'profile.lastName', validate: validateRequired})}
      />
      <button type="submit" disabled={pending}>create user</button>
    </form>
  );
};`;
