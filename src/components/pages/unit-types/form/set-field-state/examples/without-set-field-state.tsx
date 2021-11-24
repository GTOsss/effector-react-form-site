import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm<Values>({ initialValues });

form.$fieldsInline.watch((value) => console.log('###', value));

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const WithoutSetFieldState = () => {
  const { setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });
  });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};

export default WithoutSetFieldState;
