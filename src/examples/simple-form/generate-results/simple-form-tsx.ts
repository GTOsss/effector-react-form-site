export default `import React from 'react';
import { Controller, createForm, useForm } from 'effector-react-form';

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

type InputProps = {
  controller: Controller;
  label: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ controller, label }) => {
  const { input } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const { controller, handleSubmit } = useForm({ form });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({ name: form.getName('username') })} />
      <Input label="First name" controller={controller({ name: form.getName('profile', 'firstName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('profile', 'lastName') })} />
      <button type="submit">submit</button>
    </form>
  );
};

`;
