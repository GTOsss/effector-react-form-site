export const formula = `
type FieldsInline = {
  [x: string]: FieldState;
}

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
};`;
