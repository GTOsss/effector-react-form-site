export const initMeta = `import { createForm } from 'effector-react-form';

const defaultMeta = {
  redirectAfterSubmit: true,
  mode: 'edit',
};

export const form = createForm({
  initialMeta: defaultMeta,
});
`;

export const hookMeta = `import React from 'react';
import { useForm } from 'effector-react-form';
import form from 'some/path/to/your/form';

const FormComponent = () => {
  const { handleSubmit, controller } = useForm({ form, meta: { redirectAfterSubmit: false, mode: 'create' } });

  return //somejsx
};
`;
