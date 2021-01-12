export default `import { createEvent } from 'effector';
import { useForm, createForm } from 'effector-react-form';
import React from 'react';

type Values = {
  username: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

const form = createForm<Partial<Values>>({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
  initialValues: {
    username: 'gtosss',
    profile: {
      firstName: 'Timofey',
      lastName: 'Goncharov',
    },
  },
});

const resetValuesToInitial = createEvent(); // for reset to initial values
const clearValues = createEvent(); // for clear all fields

form.$values.reset(resetValuesToInitial).on(clearValues, () => ({}));

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
      <Input label="Username" controller={controller({ name: form.getName('username') })} />
      <Input label="First name" controller={controller({ name: form.getName('profile', 'firstName') })} />
      <Input label="Last name" controller={controller({ name: form.getName('profile', 'lastName') })} />
      <button type="submit">submit</button>
      <button type="button" onClick={() => resetValuesToInitial()}>
        reset
      </button>
      <button type="button" onClick={() => clearValues()}>
        clear
      </button>
    </form>
  );
};

`;
