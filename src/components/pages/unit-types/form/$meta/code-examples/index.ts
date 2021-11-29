export const initMeta = `import { createForm } from 'effector-react-form';

const defaultMeta = {
  redirectAfterSubmit: true,
  mode: 'edit',
};

export const form = createForm({
  initialMeta: defaultMeta,
});
`;

const hookMetaTsx = `import React from 'react';
import { createEffect } from 'effector;
import { createForm, useForm } from 'effector-react-form';

type Values = {
  feedback: string;
};

const initialValues = {
  feedback: '';
}

export const postFeedbackFx = createEffect(async (data) => ...);

export const putFeedbackFx = createEffect(async (data) => ...);

const modeMap = {
  create: postFeedbackFx,
  edit: putFeedbackFx,
} ;

const onSubmitFx = createEffect(async (params) => await modeMap[params.meta.mode](params));

const form = createForm<Values>({
  initialValues,
  onSubmit: onSubmitFx
});

const FormComponent = () => {
  const { handleSubmit, controller } = useForm({ form, meta: { redirectAfterSubmit: false, mode: 'create' } });

  return //sometsx
};
`;

const hookMetaJsx = `import React from 'react';
import { createEffect } from 'effector;
import { createForm, useForm } from 'effector-react-form';

const initialValues = {
  feedback: '';
}

export const postFeedbackFx = createEffect(async (data) => ...);

export const putFeedbackFx = createEffect(async (data) => ...);

const modeMap = {
  create: postFeedbackFx,
  edit: putFeedbackFx,
} ;

const onSubmitFx = createEffect(async (params) => await modeMap[params.meta.mode](params));

const form = createForm({
  initialValues,
  onSubmit: onSubmitFx
});

const FormComponent = () => {
  const { handleSubmit, controller } = useForm({ form, meta: { redirectAfterSubmit: false, mode: 'create' } });

  return //some jsx
};`;

export const hookMeta = {
  jsx: hookMetaJsx,
  tsx: hookMetaTsx,
};
