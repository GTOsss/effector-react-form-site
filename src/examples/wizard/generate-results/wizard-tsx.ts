export default `import React from 'react';
import { combine, createEvent, createStore } from 'effector';
import { useForm, createForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const nextStep = createEvent<any>();
const prevStep = createEvent<any>();

const \$step = createStore(0)
  .on(nextStep, (step) => step + 1)
  .on(prevStep, (step) => step - 1);

const formUserInfo = createForm({ onSubmit: nextStep });
const formContactInfo = createForm({ onSubmit: nextStep });
const formAdditionalInfo = createForm({ onSubmit: nextStep });

const \$allFormValues = combine({
  userInfo: formUserInfo.\$values,
  contactInfo: formContactInfo.\$values,
  additionalInfo: formAdditionalInfo.\$values,
});

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', { 'input-error': isShowError })}
        autoComplete="off"
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const FormUserInfo = () => {
  const { controller, handleSubmit } = useForm({ form: formUserInfo, resetUnmount: false });

  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
      <Input controller={controller({ name: 'profile.firstName' })} label="First name" />
      <Input controller={controller({ name: 'profile.lastName' })} label="Last name" />
      <button type="submit">Next step</button>
    </form>
  );
};

const FormContactInfo = () => {
  const { controller, handleSubmit } = useForm({ form: formContactInfo, resetUnmount: false });

  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'contactInfo.email', validate: validateRequired })} label="Email" />
      <Input controller={controller({ name: 'contactInfo.phone', validate: validateRequired })} label="Phone" />
      <button type="button" onClick={prevStep}>
        Previous step
      </button>
      <button type="submit">Next step</button>
    </form>
  );
};

const FormAdditionalInfo = () => {
  const { controller, handleSubmit } = useForm({ form: formAdditionalInfo, resetUnmount: false });

  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'profile.info', validate: validateRequired })} label="Info" />
      <button type="button" onClick={prevStep}>
        Previous step
      </button>
      <button type="submit">Next step</button>
    </form>
  );
};

const ThankForRegistration = () => (
  <div>
    <h2>Thank you for registering!</h2>
    <button type="button" onClick={prevStep}>
      Previous step
    </button>
  </div>
);

const steps = [FormUserInfo, FormContactInfo, FormAdditionalInfo, ThankForRegistration];

const Form = () => {
  const step = useStore(\$step);
  return <div>{React.createElement(steps[step])}</div>;
};

`;
