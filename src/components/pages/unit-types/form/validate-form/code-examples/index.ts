const validateFormExampleTsx = `import React, { useEffect, useState } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const initialValues = {
  name: '',
  lastName: '',
};

type ErrorsInline = {
  [x: string]: string;
};

type Values = {
  name: string;
  lastName: string;
};

const validateIsEmpty = ({ values }) => {
  const errors: ErrorsInline = {};
  if (!values.name) {
    errors.name = 'Past your name';
  }
  if (!values.lastName) {
    errors.lastName = 'Past your last name';
  }

  return errors;
};

const form = createForm<Values>({
  initialValues,
  validate: validateIsEmpty,
});

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

const ValidateFormExample = () => {
  const [disabled, setDisabled] = useState(true);
  const { validateForm, controller, setFieldState, reset } = useForm<Values>({ form });

  const fieldsInline = useStore(form.$fieldsInline);

  const handleSetTimerError = () =>
    setTimeout(() => {
      validateForm();
      setFieldState({
        field: 'name',
        state: {
          ...fieldsInline.name,
          blurred: true,
        },
      });
      setFieldState({
        field: 'lastName',
        state: {
          ...fieldsInline.name,
          blurred: true,
        },
      });
      setDisabled(false);
    }, 3000);
  {
  }

  const handleReset = () => {
    reset();
    handleSetTimerError();
    setDisabled(true);
  };

  useEffect(() => {
    handleSetTimerError();
  }, []);

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name' })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
      <button onClick={handleReset} disabled={disabled}>
        Сбросить таймер
      </button>
    </div>
  );
};

export default ValidateFormExample;
`;

const validateFormExampleJsx = `import React, { useEffect, useState } from 'react';
import { createForm, useForm } from 'effector-react-form';
import cn from 'classnames';
import { useStore } from 'effector-react';

const initialValues = {
  name: '',
  lastName: '',
};

const validateIsEmpty = ({ values }) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Past your name';
  }
  if (!values.lastName) {
    errors.lastName = 'Past your last name';
  }

  return errors;
};

const form = createForm({
  initialValues,
  validate: validateIsEmpty,
});

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

const ValidateFormExample = () => {
  const [disabled, setDisabled] = useState(true);
  const { validateForm, controller, setFieldState, reset } = useForm({ form });

  const fieldsInline = useStore(form.$fieldsInline);

  const handleSetTimerError = () =>
    setTimeout(() => {
      validateForm();
      setFieldState({
        field: 'name',
        state: {
          ...fieldsInline.name,
          blurred: true,
        },
      });
      setFieldState({
        field: 'lastName',
        state: {
          ...fieldsInline.name,
          blurred: true,
        },
      });
      setDisabled(false);
    }, 3000);
  {
  }

  const handleReset = () => {
    reset();
    handleSetTimerError();
    setDisabled(true);
  };

  useEffect(() => {
    handleSetTimerError();
  }, []);

  return (
    <div className="column">
      <form>
        <Input label="Name" controller={controller({ name: 'name' })} />
        <Input label="Last name" controller={controller({ name: 'lastName' })} />
      </form>
      <button onClick={handleReset} disabled={disabled}>
        Сбросить таймер
      </button>
    </div>
  );
};

export default ValidateFormExample;
`;

export const validateFormExampleCode = {
  jsx: validateFormExampleJsx,
  tsx: validateFormExampleTsx,
};
