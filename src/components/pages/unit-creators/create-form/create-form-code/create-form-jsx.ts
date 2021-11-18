export default `import { createForm } from 'effector-react-form';
import React from 'react';

export const form = createForm({
  name?: string;
  validate?: FormValidate<Values, Meta>;
  mapSubmit?: MapSubmit<Values, MappedValues, Meta>;
  onSubmit?: OnSubmit<MappedValues, Meta>;
  onSubmitGuardFn?: GuardFn<Values, Meta>;
  onChange?: OnChange<Values, Meta>;
  onChangeGuardFn?: GuardFn<Values, Meta>;
  initialValues?: Values;
  initialMeta?: Meta;
  domain?: Domain;
  resetOuterErrorsBySubmit?: boolean;
  resetOuterErrorByOnChange?: boolean;
});
`;
