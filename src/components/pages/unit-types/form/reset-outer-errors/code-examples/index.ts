export const resetErrorsExample = `import React from 'react';
import { createEvent, sample } from 'effector';
import { useEvent } from 'effector-react';
import { createForm } from 'effector-react-form';

const resetOuterErrors = createEvent();

const form = createForm({});

sample({
  source: resetOuterErrors,
  target: form.resetOuterErrors,
});

const Component = () => {
  const events = useEvent({ resetOuterErrors });
  return (
    <button type="button" onClick={() => events.resetOuterErrors(true)}>
      Reset outer errors
    </button>
  );
};
`;
