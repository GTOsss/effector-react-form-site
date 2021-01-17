import React from 'react';
import cn from 'classnames';
import { useForm, useFieldArray, getIn, createFieldArray, createForm } from 'effector-react-form';
import { List } from 'react-virtualized';

const getId = (() => {
  let counter = 0;
  return () => counter++;
})();

const FORM_ITEM_HEIGHT = 220;

const form = createForm({
  onSubmit: ({ values }) => alert(JSON.stringify(values, null, '  ')),
});

const fieldArray = createFieldArray({ form });

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
  const { push, remove } = useFieldArray({ name, fieldArray });

  const fields = getIn(form.$values.getState(), name, []);

  return (
    <div className="formsItem" role="formItem">
      <div>Fields length: {fields.length}</div>

      <List
        height={350}
        width={420}
        rowCount={fields.length}
        rowHeight={FORM_ITEM_HEIGHT}
        rowRenderer={({ key, index, style }) => (
          <div key={key} style={{ ...style, height: '220px' }}>
            <div className="formItem" style={{ height: '210px', marginBottom: '10px' }}>
              <Input label="Username" controller={controller({ name: `${name}.${index}.username` })} />
              <Input label="First name" controller={controller({ name: `${name}.${index}.profile.firstName` })} />
              <button type="button" onClick={() => remove(index)} className="danger">
                remove user
              </button>
            </div>
          </div>
        )}
      />
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
      <button
        type="button"
        onClick={() =>
          push(
            new Array(1000).fill(null).map(() => {
              const id = getId();
              return { id, username: `username${id}` };
            }),
          )
        }
        className="success"
      >
        add 1000 elements
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

export default Form;
export { form };
