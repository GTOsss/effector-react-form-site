export default `import { createForm } from 'effector-react-form';
import React from 'react';

type Values = any;
type Meta = any;

export const form = createForm({
  name?: string;

  validate?: (params: ValidateParams<Values, Meta>)) => ErrorsInline;
  
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
