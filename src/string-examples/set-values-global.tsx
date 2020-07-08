export default `import React from 'react';
import {useForm, setIn} from 'effector-react-form';
import {createStore, createEvent} from 'effector';
import {useStore} from 'effector-react';

const setValue = createEvent();

const $values = createStore({});

$values.on(setValue, (state, {field, value}) => setIn(state, field, value))

const Input = ({controller, label}) => {
  const {input} = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Code = ({source, title}) => {
  const data = useStore(source)
  const code = JSON.stringify(data, null, 2)
  return (
    <div className="code">
      <h1 className="code-title">{title}</h1>
      <pre>{code}</pre>
    </div>
  )
}

const Form = () => {
  const {handleSubmit, controller, setValue} = useForm({
    onSubmit: ({values}) => {
      alert(JSON.stringify(values, null, '  '));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({name: 'username'})} />
      <Input label="First name" controller={controller({name: 'profile.firstName'})} />
      <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
      <button
        type="button"
        onClick={() => setValue({field: 'profile.fistName', value: 'some value'})}
      >
        set first name
      </button>
    </form>
  );
}`;
