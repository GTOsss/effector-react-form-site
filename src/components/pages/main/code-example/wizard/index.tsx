import { createForm, useForm } from 'effector-react-form';
import React from 'react';
import cn from 'classnames';
import { createEvent, createStore, sample } from 'effector';
import { useStore } from 'effector-react';
import styles from './styles.module.scss';

const initialValues = {
  username: '',
  profile: {
    firstName: '',
    lastName: '',
    info: '',
  },
  contactInfo: {
    email: '',
    phone: '',
  },
};

const nextStep = createEvent<any>();
const prevStep = createEvent<any>();
const $step = createStore(0)
  .on(nextStep, (step) => step + 1)
  .on(prevStep, (step) => step - 1);

const formUserInfo = createForm({
  onSubmit: nextStep,
});
const formContactInfo = createForm({
  onSubmit: nextStep,
});
const formAdditionalInfo = createForm({
  onSubmit: nextStep,
});

const formAllData = createForm({
  onSubmit: nextStep,
  initialValues,
});

sample({
  source: formAllData.$values,
  clock: [formUserInfo.$values, formContactInfo.$values, formAdditionalInfo.$values],
  fn: (state, data) =>
    data.profile ? { ...state, ...data, profile: { ...state.profile, ...data.profile } } : { ...state, ...data },
  target: formAllData.$values,
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
        className={cn('input', {
          'input-error': isShowError,
        })}
        autoComplete="off"
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const FormUserInfo = () => {
  const { controller, handleSubmit } = useForm({
    form: formUserInfo,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
      <Input controller={controller({ name: 'profile.firstName' })} label="First name" />
      <Input controller={controller({ name: 'profile.lastName' })} label="Last name" />
      <button type="submit">Next step</button>
    </form>
  );
};

const FormContactInfo = () => {
  const { controller, handleSubmit } = useForm({
    form: formContactInfo,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input controller={controller({ name: 'contactInfo.email', validate: validateRequired })} label="Email" />
      <Input controller={controller({ name: 'contactInfo.phone', validate: validateRequired })} label="Phone" />
      <button type="button" onClick={prevStep} className={styles.button}>
        Previous step
      </button>
      <button type="submit" className={styles.button}>
        Next step
      </button>
    </form>
  );
};

const FormAdditionalInfo = () => {
  const { controller, handleSubmit } = useForm({
    form: formAdditionalInfo,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input controller={controller({ name: 'profile.info', validate: validateRequired })} label="Info" />
      <button type="button" onClick={prevStep} className={styles.button}>
        Previous step
      </button>
      <button type="submit" className={styles.button}>
        Next step
      </button>
    </form>
  );
};

const AllData = () => {
  const { controller, handleSubmit } = useForm({
    form: formAllData,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
      <Input controller={controller({ name: 'profile.firstName' })} label="First name" />
      <Input controller={controller({ name: 'profile.lastName' })} label="Last name" />
      <Input controller={controller({ name: 'contactInfo.email', validate: validateRequired })} label="Email" />
      <Input controller={controller({ name: 'contactInfo.phone', validate: validateRequired })} label="Phone" />
      <Input controller={controller({ name: 'profile.info', validate: validateRequired })} label="Info" />
    </form>
  );
};

const ThankForRegistration = () => (
  <div className="column">
    <h2>Thank you for registering!</h2>
    <button type="button" onClick={prevStep} className={styles.button}>
      Previous step
    </button>
  </div>
);

const steps = [FormUserInfo, FormContactInfo, FormAdditionalInfo, ThankForRegistration];

const Form = () => {
  const step = useStore($step);
  return <div>{React.createElement(steps[step])}</div>;
};

const App = () => {
  return (
    <div className={styles.root}>
      <Form />
      <AllData />
    </div>
  );
};

export default App;

export const codeExample = `import { createForm, useForm } from 'effector-react-form';
import React from 'react';
import { createEvent, createStore, sample } from 'effector';
import { useStore } from 'effector-react';

const initialValues = {
  username: '',
  profile: {
    firstName: '',
    lastName: '',
    info: '',
  },
  contactInfo: {
    email: '',
    phone: '',
  },
};

const nextStep = createEvent<any>();
const prevStep = createEvent<any>();
const $step = createStore(0)
  .on(nextStep, (step) => step + 1)
  .on(prevStep, (step) => step - 1);

const formUserInfo = createForm({
  onSubmit: nextStep,
});
const formContactInfo = createForm({
  onSubmit: nextStep,
});
const formAdditionalInfo = createForm({
  onSubmit: nextStep,
});

const formAllData = createForm({
  onSubmit: nextStep,
  initialValues,
});

sample({
  source: formAllData.$values,
  clock: [formUserInfo.$values, formContactInfo.$values, formAdditionalInfo.$values],
  fn: (state, data) =>
    data.profile ? { ...state, ...data, profile: { ...state.profile, ...data.profile } } : { ...state, ...data },
  target: formAllData.$values,
});

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();
  return (
    <div>
      <label>{label}</label>
      <input {...input} value={input.value || ''} />
      {isShowError && <div>{error}</div>}
    </div>
  );
};

const FormUserInfo = () => {
  const { controller, handleSubmit } = useForm({
    form: formUserInfo,
    resetUnmount: false,
  });
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
  const { controller, handleSubmit } = useForm({
    form: formContactInfo,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'contactInfo.email', validate: validateRequired })} label="Email" />
      <Input controller={controller({ name: 'contactInfo.phone', validate: validateRequired })} label="Phone" />
      <button type="button" onClick={prevStep}>
        Previous step
      </button>
      <button type="submit">
        Next step
      </button>
    </form>
  );
};

const FormAdditionalInfo = () => {
  const { controller, handleSubmit } = useForm({
    form: formAdditionalInfo,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'profile.info', validate: validateRequired })} label="Info" />
      <button type="button" onClick={prevStep}>
        Previous step
      </button>
      <button type="submit">
        Next step
      </button>
    </form>
  );
};

const AllData = () => {
  const { controller, handleSubmit } = useForm({
    form: formAllData,
    resetUnmount: false,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
      <Input controller={controller({ name: 'profile.firstName' })} label="First name" />
      <Input controller={controller({ name: 'profile.lastName' })} label="Last name" />
      <Input controller={controller({ name: 'contactInfo.email', validate: validateRequired })} label="Email" />
      <Input controller={controller({ name: 'contactInfo.phone', validate: validateRequired })} label="Phone" />
      <Input controller={controller({ name: 'profile.info', validate: validateRequired })} label="Info" />
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
  const step = useStore($step);
  return <div>{React.createElement(steps[step])}</div>;
};

const App = () => {
  return (
    <div>
      <Form />
      <AllData />
    </div>
  );
};
`;
