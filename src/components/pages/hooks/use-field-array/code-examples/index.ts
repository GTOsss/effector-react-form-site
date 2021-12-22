const useFieldArrayExampleJsx = `import React, { useEffect } from 'react';
import { createFieldArray, createForm, useFieldArray } from 'effector-react-form';

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm({
  initialValues,
});

const fieldArray = createFieldArray({ form });

const Component = () => {
  const { map, push, remove } = useFieldArray({ fieldArray, name: 'values' });

  useEffect(() => {
    remove(0);
    push(6);
  }, []);

  return (
    <div>
      {map(({ field, formItemName, index }) => (
        <div>
          {formItemName} has a value {field} and an index {index}
        </div>
      ))}
    </div>
  );
};

export default Component;
`;

const useFieldArrayExampleTsx = `import React, { useEffect } from 'react';
import { createFieldArray, createForm, useFieldArray } from 'effector-react-form';

type Values = { values: number[] };

const initialValues = { values: [0, 1, 2, 3, 4, 5] };

const form = createForm<Values>({
  initialValues,
});

const fieldArray = createFieldArray<Values>({ form });

const Component = () => {
  const { map, push, remove } = useFieldArray({ fieldArray, name: 'values' });

  useEffect(() => {
    remove(0);
    push(6);
  }, []);

  return (
    <div>
      {map(({ field, formItemName, index }) => (
        <div>
          {formItemName} has a value {field} and an index {index}
        </div>
      ))}
    </div>
  );
};

export default Component;
`;

export const useFieldArrayExample = {
  jsx: useFieldArrayExampleJsx,
  tsx: useFieldArrayExampleTsx,
};

export const mapReturn = `{
  field,
  fields,
  formItemName,
  index,
}`;
