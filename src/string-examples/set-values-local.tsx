export default `import React from 'react';
import {useForm} from 'effector-react-form';
import {useStore} from 'effector-react';
import cn from 'classnames';

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

const Code = ({source, title, className}) => {
  const data = useStore(source)
  const code = JSON.stringify(data, null, 2)
  return (
    <div className={cn('code', className)}>
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Username" controller={controller({name: 'username'})} />
        <Input label="First name" controller={controller({name: 'profile.firstName'})} />
        <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
        <button
          type="button"
          onClick={() => setValue({field: 'profile.fistName', value: 'some value'})}
        >
          set first name
        </button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}`;
