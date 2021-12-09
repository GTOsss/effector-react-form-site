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

const WithSetFieldState = () => {
  const { setFieldState, setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });

    setFieldState({
      field: 'name',
      state: {
        active: false,
        blurred: true,
        blurredAfterOuterError: false,
        changed: false,
        changedAfterOuterError: false,
        touched: false,
        touchedAfterOuterError: false,
        validate: undefined,
        _type: 'fieldMeta',
      },
    });
  });

  return (
    <form className="form">
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};

export default WithSetFieldState;
