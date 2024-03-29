import React from 'react';
import { createForm, useForm } from 'effector-react-form';

type Values = {
  username: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

const form = createForm<Values>({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
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
    <form onSubmit={handleSubmit} className="form">
      <Input label="Username" controller={controller({ name: form.getName('username') })} />
      <Input label="First name" controller={controller({ name: form.getName('profile', 'firstName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('profile', 'lastName') })} />
      <button
        type="button"
        onClick={() => form.setValue({ field: form.getName('profile', 'firstName'), value: 'some value' })}
      >
        set first name
      </button>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
export { form };
