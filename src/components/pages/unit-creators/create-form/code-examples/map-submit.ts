export const mapSubmitExampleTs = `import { createForm } from 'effector-react-form';

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

export const mapSubmitExampleJs = `import { createForm } from 'effector-react-form';

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
