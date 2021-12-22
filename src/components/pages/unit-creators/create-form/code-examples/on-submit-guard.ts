export const onSubmitGuardExampleTs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

const postUserFx = createEffect( async({ values }) => /* your post method */)

const form = createForm<Values>({
  onSubmitGuardFn: ({ values }) => values.name.length >= 3,
  onSubmit: postUserFx,
});
`;

export const onSubmitGuardExampleJs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

const postUserFx = createEffect( async({ values }) => // your post method)

const form = createForm({
  onSubmitGuardFn: ({ values }) => values.name.length >= 3,
  onSubmit: postUserFx,
});
`;
