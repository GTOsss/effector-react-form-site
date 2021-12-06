import { mapSubmitExampleJs, mapSubmitExampleTs } from './map-submit';
import { onSubmitExampleJs, onSubmitExampleTs } from './on-submit';
import { onSubmitGuardExampleJs, onSubmitGuardExampleTs } from './on-submit-guard';
import { validateExampleJs, validateExampleTs } from './validate';

export const validateTypes = `
type ValidateParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
};

type FieldState = {
  _type: 'fieldMeta';
  active: boolean;
  touched: boolean;
  changed: boolean;
  blurred: boolean;
  touchedAfterOuterError: boolean;
  changedAfterOuterError: boolean;
  blurredAfterOuterError: boolean;
  validate?: (value: any) => string | undefined;
};

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

export const validateExample = {
  jsx: validateExampleJs,
  tsx: validateExampleTs,
};

export const mapSubmitTypes = `type SubmitParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
};

type FieldState = {
  _type: 'fieldMeta';
  active: boolean;
  touched: boolean;
  changed: boolean;
  blurred: boolean;
  touchedAfterOuterError: boolean;
  changedAfterOuterError: boolean;
  blurredAfterOuterError: boolean;
  validate?: (value: any) => string | undefined;
};

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

export const mapSubmitExample = {
  jsx: mapSubmitExampleJs,
  tsx: mapSubmitExampleTs,
};

export const onSubmitTypes = `type SubmitParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
};

type FieldState = {
  _type: 'fieldMeta';
  active: boolean;
  touched: boolean;
  changed: boolean;
  blurred: boolean;
  touchedAfterOuterError: boolean;
  changedAfterOuterError: boolean;
  blurredAfterOuterError: boolean;
  validate?: (value: any) => string | undefined;
};

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

export const onSubmitExample = {
  tsx: onSubmitExampleTs,
  jsx: onSubmitExampleJs,
};

export const onSubmitGuardsTypes = `type SubmitParams<Values = any, Meta = any> = {
  values: Values;
  errorsInline: ErrorsInline;
  fieldsInline: FieldsInline;
  form: FormState;
  meta: Meta;
};

type ErrorsInline = {
  [x: string]: Message;
};

type Message = string | null | undefined;

type FieldsInline = {
  [x: string]: FieldState;
};

type FieldState = {
  _type: 'fieldMeta';
  active: boolean;
  touched: boolean;
  changed: boolean;
  blurred: boolean;
  touchedAfterOuterError: boolean;
  changedAfterOuterError: boolean;
  blurredAfterOuterError: boolean;
  validate?: (value: any) => string | undefined;
};

type FormState = {
  submitted: boolean;
  hasError: boolean;
  hasOuterError: boolean;
};
`;

export const onSubmitGuardExample = {
  jsx: onSubmitGuardExampleJs,
  tsx: onSubmitGuardExampleTs,
};
