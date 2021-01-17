export default `import React from 'react';
import cn from 'classnames';
import { useForm, useFieldArray, createFieldArray, createForm } from 'effector-react-form';

const getId = (() => {
  let counter = 0;
  return () => counter++;
})();

const form = createForm({ onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')) });
const fieldArray = createFieldArray({ form });

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

const Users = ({ controller, name }) => {
  const { map, push, remove } = useFieldArray({ fieldArray, name });

  return (
    <div className="formsItem" role="formItem">
      {map(({ formItemName, index, field }) => (
        <div key={field.id} className="formItem">
          <Input
            label="Username"
            controller={controller({ name: \`\${formItemName}.username\`, validate: validateRequired })}
          />
          <Input
            label="First name"
            controller={controller({ name: \`\${formItemName}.profile.firstName\`, validate: validateRequired })}
          />
          <button type="button" onClick={() => remove(index)} className="danger">
            remove user
          </button>
        </div>
      ))}
      <button type="button" onClick={() => push({ id: getId(), username: '', profile: {} })} className="success">
        add user
      </button>
      <button
        type="button"
        onClick={() => push({ id: getId(), username: 'test username', profile: { firstName: 'test firstName' } })}
        className="success"
      >
        add user with values
      </button>
    </div>
  );
};

const Form = () => {
  const { handleSubmit, controller } = useForm({ form });

  return (
    <form onSubmit={handleSubmit}>
      <Users name="users" controller={controller} />
      <button type="submit">submit</button>
    </form>
  );
};

`;
