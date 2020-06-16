export default `import React from 'react';
import {createStore, createEvent} from 'effector';

const resetValuesToInitial = createEvent(); // for reset to initial values
const clearValues = createEvent(); // for clear all fields

const initialValues = {
  username: 'gtosss',
  profile: {
    firstName: 'Timofey',
    lastName: 'Goncharov',
  },
};

const $values = createStore(initialValues) // set initial values
  .reset(resetValuesToInitial); // add handler for reset to initial values

$values.on(clearValues, () => ({})); // add handler for clear fields

const Input = ({
  controller,
  label,
}) => {
  const {input} = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller} = useForm({$values});

  const onSubmit = ({values}) => {
    alert(JSON.stringify(values, null, '  '));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Username" controller={controller({name: 'username'})} />
      <Input label="First name" controller={controller({name: 'profile.firstName'})} />
      <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
      <button type="submit">submit</button>
      <button type="button" onClick={() => resetValuesToInitial()}>reset</button>
      <button type="button" onClick={() => clearValues()}>clear</button>
    </form>
  );
};`;
