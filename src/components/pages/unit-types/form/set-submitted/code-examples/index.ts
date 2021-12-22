export const setSubmittedExampleTs = `import React from 'react';
import { createEvent, sample } from 'effector';
import { useEvent } from 'effector-react';
import { createForm } from 'effector-react-form';

const setSubmitted = createEvent<boolean>();

const form = createForm({
  onSubmit: () => console.log('Never fired by push on setSubmit button'),
});

sample({
  source: setSubmitted,
  target: form.setSubmitted, // will not fire onSubmit function
});

const Component = () => {
  const events = useEvent({ setSubmitted });
  return (
    <button type="button" onClick={() => events.setSubmitted(true)}>
      setSubmitted
    </button>
  );
};
`;

export const setSubmittedExampleJs = `import React from 'react';
import { createEvent, sample } from 'effector';
import { useEvent } from 'effector-react';
import { createForm } from 'effector-react-form';

const setSubmitted = createEvent();

const form = createForm({
  onSubmit: () => console.log('Never fired by push on setSubmit button'),
});

sample({
  source: setSubmitted,
  target: form.setSubmitted, // will not fire onSubmit function
});

const Component = () => {
  const events = useEvent({ setSubmitted });
  return (
    <button type="button" onClick={() => events.setSubmitted(true)}>
      setSubmitted
    </button>
  );
};
`;

export const setSubmittedExample = {
  jsx: setSubmittedExampleJs,
  tsx: setSubmittedExampleTs,
};
