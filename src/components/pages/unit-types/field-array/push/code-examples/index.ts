const pushExampleJs = `import { createFieldArray, createForm } from 'effector-react-form';

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm({
  initialValues,
});

const fieldArray = createFieldArray({ form });

fieldArray.push({ fieldName: 'values', value: 6 });
`;

const pushExampleTs = `import { createFieldArray, createForm } from 'effector-react-form';

type Values = { values: number[] };

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm<Values>({
  initialValues,
});

const fieldArray = createFieldArray<Values>({ form });

fieldArray.push({ fieldName: 'values', value: 6 });
`;

export const pushExample = {
  jsx: pushExampleJs,
  tsx: pushExampleTs,
};
