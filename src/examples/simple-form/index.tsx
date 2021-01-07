import React from 'react';
import { createForm, useForm } from 'effector-react-form-v1';

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

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  const { controller, handleSubmit } = useForm({ form });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({ name: 'username' })} />
      <Input
        label="First name"
        controller={controller({ name: 'profile.firstName' })}
      />
      <Input
        label="Last name"
        controller={controller({ name: 'profile.lastName' })}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default SimpleForm;
