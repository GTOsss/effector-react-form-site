export const setFieldStateType = `type SetFieldStateParams = {
  field: string | string[];
  state: FieldState;
};

type FieldState = {
  _type: 'fieldMeta';
  active: boolean;
  touched: boolean;
  changed: boolean;
  blurred: boolean;
  touchedAfterOuterError: boolean;
  changedAfterOuterError: boolean;
  blurredAfterOuterError: boolean;
  validate?: (value: any) => string | undefined;
};
`;

const setOrDeleteErrorTsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm<Values>({ initialValues });

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });
  });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

const setOrDeleteErrorJsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm({ initialValues });

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });
  });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

export const setOrDeleteErrorExample = {
  jsx: setOrDeleteErrorJsx,
  tsx: setOrDeleteErrorTsx,
};

const setFieldsInlineTsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

type Values = {
  name: string;
  lastName: string;
};

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm<Values>({ initialValues });

form.$fieldsInline.watch((value) => console.log('###', value));

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { setFieldState, setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });

    setFieldState({
      field: 'name',
      state: {
        active: false,
        blurred: true,
        blurredAfterOuterError: false,
        changed: false,
        changedAfterOuterError: false,
        touched: false,
        touchedAfterOuterError: false,
        validate: undefined,
        _type: 'fieldMeta',
      },
    });
  });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

const setFieldsInlineJsx = `import React, { useEffect } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';

const initialValues = {
  name: '',
  lastName: '',
};

const form = createForm({ initialValues });

form.$fieldsInline.watch((value) => console.log('###', value));

const Input = ({ controller, label }) => {
  const { input, isShowError, error } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className={cn('input', { 'input-error': isShowError })} />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export const Component = () => {
  const { setFieldState, setOrDeleteError, controller } = useForm({ form });

  useEffect(() => {
    setOrDeleteError({
      field: 'name',
      error: 'Required field',
    });

    setFieldState({
      field: 'name',
      state: {
        active: false,
        blurred: true,
        blurredAfterOuterError: false,
        changed: false,
        changedAfterOuterError: false,
        touched: false,
        touchedAfterOuterError: false,
        validate: undefined,
        _type: 'fieldMeta',
      },
    });
  });

  return (
    <form>
      <Input label="Name" controller={controller({ name: 'name' })} />
      <Input label="Last name" controller={controller({ name: 'lastName' })} />
    </form>
  );
};
`;

export const setFieldsInlineExample = {
  jsx: setFieldsInlineJsx,
  tsx: setFieldsInlineTsx,
};
