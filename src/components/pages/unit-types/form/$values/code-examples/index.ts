export const withUseStore = `import React from 'react';
import { createForm } from "effector-react-form";
import { useStore } from "effector-react";

const form = createForm({
  initialValues: {
    text: 'HelloWorld!',
  };
});

const Component () => {
  const values = useStore(form.$values);

  return <div>{values.text}</div>
};
`;

export const withSample = `import { sample, createEffect } from "effector";
import { createForm } from "effector-react-form";

const form = createForm({
  initialValues: {
    text: 'HelloWorld!',
  };
});

const sayTextFx = createEffect(async (values) => console.log(values.text));

sample({
  source/clock: from.$values,
  fn: (values) => values,
  target: Unit,
})
`;

export const withWatch = `import { createForm } from "effector-react-form";

const form = createForm({
  initialValues: {
    text: 'HelloWorld!',
  };
});

form.$values.watch((value) => console.log(value));

`;

export const fromUnits = `import { createStore } from "effector";
import { createForm } from "effector-react-form";

const form = createForm({
  initialValues: {
    text: 'HelloWorld!',
  };
});

export const $phrases= createStore('New phrase');

sample({
  clock: $phrases,
  fn: (phrase) => ({ text: phrase }),
  target: form.$values,
});

`;
