import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import simpleFormLocal from './simple-form-local';
import simpleFormGlobal from './simple-form-global';
import initialValues from './initial-values';
import initialValuesAdvanced from './initial-values-advanced';
import setValuesLocal from './set-values-local';
import setValuesGlobal from './set-values-global';
import fieldLevelValidation from './field-level-validation';
import formLevelValidation from './form-level-validation';
import mixValidation from './mix-validation';
import setErrorLocal from './set-error-local';
import setErrorGlobal from './set-error-global';
import serverSideValidation from './server-side-validation';
import virtualized from './virtualized';
import onchange from './onchange';
import wizard from './wizard';
import fieldArray from './field-array';
import fieldArrayNested from './field-array-nested';
import fieldArrayVirtualized from './field-array-virtualized';
import remoteSubmit from './remote-submit';
import mapSubmit from './map-submit';

const mapExamples = {
  simpleFormLocal,
  simpleFormGlobal,
  initialValues,
  initialValuesAdvanced,
  setValuesLocal,
  setValuesGlobal,
  fieldLevelValidation,
  formLevelValidation,
  mixValidation,
  setErrorLocal,
  setErrorGlobal,
  serverSideValidation,
  virtualized,
  onchange,
  wizard,
  fieldArray,
  fieldArrayNested,
  fieldArrayVirtualized,
  remoteSubmit,
  mapSubmit,
};

export type ExampleKey = keyof typeof mapExamples;

interface Props {
  exampleKey: ExampleKey;
}

export const SimpleExample: React.FC<Props> = React.memo(
  ({ exampleKey, children }) => {
    return (
      <SyntaxHighlighter
        wrapLines
        language="tsx"
        style={darcula}
        customStyle={{
          backgroundColor: '#242424',
          border: '0px solid #162A4E',
        }}
      >
        {children || mapExamples[exampleKey]}
      </SyntaxHighlighter>
    );
  }
);

export default SimpleExample;
