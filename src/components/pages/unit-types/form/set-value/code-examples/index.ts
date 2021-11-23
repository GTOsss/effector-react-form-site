export const setValueType = `type SetValueParams = {
  field: string | string[];
  value: any;
};`;

const setValueExampleJsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';

const initialValues = {
  user: {
    name: '',
    lastName: '',
  },
  serverId: 999,
}

const form = createForm({ initialValues });

const Input = ({ controller, label }) => {
  const { input } = controller();
  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

export const Component = () => {
  const { setValue, controller } = useForm<Values>({ form });

  useEffect(() => {
    setValue({ field: 'user.name', value: 'unknown' });
    setValue({ field: ['user', 'lastName'], value: 'unknown' });
    setValue({ field: 'serverId', value: 1 });
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'user.name' })} />
      <Input label="Last name" controller={controller({ name: 'user.lastName' })} />
      <Input label="Id" controller={controller({ name: form.getName('serverId') })} />
    </form>
  );
};
`;

const setValueExampleTsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';

type Values = {
  user: {
    name: string;
    lastName: string;
  };
  serverId: number;
};

const initialValues = {
  user: {
    name: '',
    lastName: '',
  },
  serverId: 999,
}

const form = createForm<Values>({ initialValues });

const Input = ({ controller, label }) => {
  const { input } = controller();
  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

export const Component = () => {
  const { setValue, controller } = useForm<Values>({ form });

  useEffect(() => {
    setValue({ field: 'user.name', value: 'unknown' });
    setValue({ field: ['user', 'lastName'], value: 'unknown' });
    setValue({ field: 'serverId', value: 1 });
  }, []);

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'user.name' })} />
      <Input label="Last name" controller={controller({ name: 'user.lastName' })} />
      <Input label="Id" controller={controller({ name: form.getName('serverId') })} />
    </form>
  );
};
`;

export const setValueExample = {
  jsx: setValueExampleJsx,
  tsx: setValueExampleTsx,
};
