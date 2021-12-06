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
