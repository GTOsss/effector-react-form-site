export const onChangeGuardExampleTs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

const postUserFx = createEffect( async({ values }) => /* your post method */)

const form = createForm<Values>({
  onChangeGuardFn: ({ values }) => values.name.length >= 3,
  onChange: postUserFx,
});
`;

export const onChangeGuardExampleJs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

const postUserFx = createEffect( async({ values }) => // your post method)

const form = createForm({
  onChangeGuardFn: ({ values }) => values.name.length >= 3,
  onChange: postUserFx,
});
`;
