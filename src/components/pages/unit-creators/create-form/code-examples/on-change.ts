export const onChangeExampleTs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

type Values = {
  name: string;
  lastName: string;
};

const postUserFx = createEffect( async({ values }) => /* your post method */)

const form = createForm<Values>({
  onChange: postUserFx,
});
`;

export const onChangeExampleJs = `import { createForm } from 'effector-react-form';
import { createEffect } from 'effector';

const postUserFx = createEffect( async({ values }) => // your post method)

const form = createForm({
  onChange: postUserFx,
});
`;
