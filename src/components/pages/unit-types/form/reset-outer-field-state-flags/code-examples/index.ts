export const resetOuterFieldStateFlagsExample = `import React from 'react';
import { createEvent, sample } from 'effector';
import { useEvent } from 'effector-react';
import { createForm } from 'effector-react-form';

const resetOuterFieldStateFlags = createEvent();

const form = createForm({});

sample({
  source: resetOuterFieldStateFlags,
  target: form.resetOuterFieldStateFlags,
});

const Component = () => {
  const events = useEvent({ resetOuterFieldStateFlags });
  return (
    <button type="button" onClick={() => events.resetOuterFieldStateFlags(true)}>
      Reset outer field state flags
    </button>
  );
};
`;
