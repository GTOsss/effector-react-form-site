import * as React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import simpleFormLocal from './simple-form-local';
import simpleFormGlobal from './simple-form-global';
import fieldLevelValidation from './field-level-validation';
import initialValues from './initial-values';
import initialValuesAdvanced from './initial-values-advanced';
import fieldArray from './field-array';
import wizardForm from './wizard-form';

const mapExamples = {
  simpleFormLocal,
  simpleFormGlobal,
  fieldLevelValidation,
  initialValues,
  initialValuesAdvanced,
  fieldArray,
  wizardForm,
};

export type ExampleKey = keyof typeof mapExamples;

interface IProps {
  exampleKey: ExampleKey;
}

export const SimpleExample = React.memo(({exampleKey}: IProps) => {

  return (
    <SyntaxHighlighter
      wrapLines
      language="jsx"
      style={darcula}
      customStyle={{backgroundColor: '#050a11', border: '0px solid #162A4E'}}
    >
      {mapExamples[exampleKey]}
    </SyntaxHighlighter>
  );
});

export default SimpleExample;
