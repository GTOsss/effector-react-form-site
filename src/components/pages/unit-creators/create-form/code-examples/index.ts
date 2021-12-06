export const validateTypes = `
type ValidateParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
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

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

export const validateExampleTs = `import { createForm } from 'effector-react-form';

type Values = {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
};

type ErrorsInline = {
  [x: string]: string | null | undefined;
};

const validateForm = ({ values }: FormValidateParams<Values, any>) => {
  const errors: ErrorsInline = {};

  if (values.newPassword !== values.repeatPassword) {
    errors.newPassword = 'passwordsDontMatch';
    errors.repeatPassword = 'passwordsDontMatch';
  }

  if (values.newPassword && values.newPassword === values.oldPassword) {
    errors.newPassword = 'passwordMustDiffer';
  }

  return errors;
};

const formChangePassword = createForm<ValuesChangePassword>({
  validate: validateForm,
  onSubmit: submitFx,
});
`;

export const validateExampleJs = `import { createForm } from 'effector-react-form';

const validateForm = ({ values }) => {
  const errors = {};

  if (values.newPassword !== values.repeatPassword) {
    errors.newPassword = 'passwordsDontMatch';
    errors.repeatPassword = 'passwordsDontMatch';
  }

  if (values.newPassword && values.newPassword === values.oldPassword) {
    errors.newPassword = 'passwordMustDiffer';
  }

  return errors;
};

const formChangePassword = createForm({
  validate: validateForm,
  onSubmit: submitFx,
});
`;

export const validateExample = {
  jsx: validateExampleJs,
  tsx: validateExampleTs,
};

export const mapSubmitTypes = `type SubmitParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
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

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

const mapSubmitExampleTs = `import { createForm } from 'effector-react-form';

type Values = {
  name: string;
  lastName: string;
  isNewUser?: any;
};

const form = createForm<Values>({
  mapSubmit: ({ values, meta, ...rest }) => {
    const mappedValues = {
      ...values,
      isNewUser: meta.newUser,
    };
    return { ...rest, values: mappedValues, meta };
  },
  onSubmit: ({ values }) => postUserFx(values),
});
`;

const mapSubmitExampleJs = `import { createForm } from 'effector-react-form';

const form = createForm({
  mapSubmit: ({ values, meta, ...rest }) => {
    const mappedValues = {
      ...values,
      isNewUser: meta.newUser,
    };
    return { ...rest, values: mappedValues, meta };
  },
  onSubmit: ({ values }) => postUserFx(values),
});
`;

export const mapSubmitExample = {
  jsx: mapSubmitExampleJs,
  tsx: mapSubmitExampleTs,
};

export const onSubmitTypes = `type SubmitParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
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

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;
