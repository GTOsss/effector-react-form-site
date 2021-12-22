export default `import { createForm } from 'effector-react-form';
import React from 'react';

type Values = any;
type Meta = any;

export const form = createForm({
  name?: string;

  validate?: (params: ValidateParams<Values, Meta>)) => ErrorsInline;
  
  mapSubmit?: (params: SubmitParams<Values, Meta>,) => SubmitParams<ResultValues, Meta>;

  onSubmit?: (params: SubmitParams<Values, Meta>) => void;

  onSubmitGuardFn?: (params: SubmitParams<Values, Meta>) => boolean;

  onChange?: (params: SubmitParams<Values, Meta>) => void;

  onChangeGuardFn?: (params: SubmitParams<Values, Meta>) => boolean;

  initialValues?: Values;

  initialMeta?: Meta;

  domain?: Domain;
  
  resetOuterErrorsBySubmit?: boolean;
  resetOuterErrorByOnChange?: boolean;
});
`;
