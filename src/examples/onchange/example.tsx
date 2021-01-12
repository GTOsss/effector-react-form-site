import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import debounce from 'lodash.debounce';

const onSubmit = ({ values }) => alert(JSON.stringify(values, null, '  '));

const debouncedOnChange = debounce(onSubmit, 500);

const form = createForm({
  onChange: debouncedOnChange,
});

const Input = ({ controller, label }) => {
  const { input } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const { handleSubmit, controller } = useForm({ form });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Search" controller={controller({ name: 'search' })} />
      <Input label="Search by email" controller={controller({ name: 'searchByEmail' })} />
      <button type="submit">search</button>
    </form>
  );
};

export default Form;
export { form };
