const removeExampleJs = `import { createFieldArray, createForm } from 'effector-react-form';

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm({
  initialValues,
});

const fieldArray = createFieldArray({ form });

fieldArray.remove({ fieldName: 'values', index: 2 });
`;

const removeExampleTs = `import { createFieldArray, createForm } from 'effector-react-form';

type Values = { values: number[] };

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm<Values>({
  initialValues,
});

const fieldArray = createFieldArray<Values>({ form });

fieldArray.remove({ fieldName: 'values', index: 2 });
`;

export const removeExample = {
  jsx: removeExampleJs,
  tsx: removeExampleTs,
};
