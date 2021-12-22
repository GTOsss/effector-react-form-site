export const onSubmitExampleTs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

const postUserFx = createEffect( async({ values }) => /* your post method */)

const form = createForm<Values>({
  onSubmit: postUserFx,
});
`;

export const onSubmitExampleJs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

const postUserFx = createEffect( async({ values }) => // your post method)

const form = createForm({
  onSubmit: postUserFx,
});
`;
