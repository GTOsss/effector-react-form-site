import React, { useEffect, useState } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const initialValues = {
  name: '',
  lastName: '',
};

type ErrorsInline = {
  [x: string]: string;
};

type Values = {
  name: string;
  lastName: string;
};

const validateIsEmpty = ({ values }) => {
  const errors: ErrorsInline = {};
  if (!values.name) {
    errors.name = 'Past your name';
  }
  if (!values.lastName) {
    errors.lastName = 'Past your last name';
  }

  return errors;
};

const form = createForm<Values>({
  initialValues,
  validate: validateIsEmpty,
  onSubmit: () => console.log('asdasd'),
});

// form.$allFormState.watch((value) => console.log(value));

const Input = ({ controller, label }) => {
  const { input, isShowError, error, ...rest } = controller();

  console.log(rest);

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const UseFormExample = () => {
  const { controller, handleSubmit, submit } = useForm<Values>({ form });

  React.useEffect(() => {}, []);

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name', flat: true })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
    </div>
  );
};

export default UseFormExample;
