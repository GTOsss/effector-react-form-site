import React from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import styles from './styles.module.scss';

const form = createForm({
  onSubmit: ({ values }) => alert(`Hi there, ${values.username}`),
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
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const SimpleForm = () => {
  const { controller, handleSubmit, submit } = useForm({ form });
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
        <Input controller={controller({ name: 'firstName' })} label="First name" />
        <Input controller={controller({ name: 'lastName' })} label="Last name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;

export const SimpleFormCode = `import React from 'react';
import { createForm, useForm } from 'effector-react-form';

const form = createForm({ onSubmit: ({ values }) => alert('Hi there, ' + values.username) });
const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const SimpleForm = () => {
  const { controller, handleSubmit } = useForm({ form });
  return (
    <form onSubmit={handleSubmit}>
      <Input controller={controller({ name: 'username', validate: validateRequired })} label="Username" />
      <Input controller={controller({ name: 'firstName' })} label="First name" />
      <Input controller={controller({ name: 'lastName' })} label="Last name" />
      <button type="submit">Submit</button>
    </form>
  );
};

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();
  return (
    <div>
      <label>{label}</label>
      <input {...input} value={input.value || ''}/>
      {isShowError && <div>{error}</div>}
    </div>
  );
};
`;
