import React from 'react';

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

interface Props {
}

const SimpleForm: React.FC<Props> = ({}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        controller={controller({name: 'username'})}
      />
      <Input
        label="First name"
        controller={controller({name: 'profile.firstName'})}
      />
      <Input
        label="Last name"
        controller={controller({name: 'profile.lastName'})}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default SimpleForm;
