import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: '',
  lastName: '',
};

type Values = {
  name: string;
  lastName: string;
};

const form = createForm<Values>({
  initialValues,
  onSubmit: () => alert('Submitted!'),
});

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

const SubmitExample = () => {
  const { submit, controller } = useForm<Values>({ form });

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name' })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default SubmitExample;
