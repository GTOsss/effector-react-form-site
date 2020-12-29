import React from 'react';
import {useForm} from 'effector-react-form';
import cn from 'classnames';
import {FormattedMessage} from "gatsby-plugin-intl";
import JsonExample from '@components/json-example';
import Layout from '@components/v1/layout';
import TemplateExamplePage from '../../../string-examples/template-example-page';

const validateRequired = (value) => !value ? 'Field is required' : undefined;

const validateUsername = (value) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;
  if (value.length < 4) return 'Minimum of 4 characters';
}

const Input = ({controller, label}) => {
  const {input, error, isShowError} = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {'input-error': isShowError})}
        autoComplete="off"
      />
      {isShowError && (<div className="input-error-message">{error}</div>)}
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller, $values, $errorsInline, $form} = useForm({
    onSubmit: ({values, form}) => {
      if (!form.hasError) {
        alert(JSON.stringify(values, null, '  '));
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          controller={controller({name: 'username', validate: validateUsername})}
        />
        <Input
          label="First name"
          controller={controller({name: 'profile.firstName', validate: validateRequired})}
        />
        <Input
          label="Last name"
          controller={controller({name: 'profile.lastName', validate: validateRequired})}
        />
        <button type="submit">submit</button>
      </form>

      <div className="row">
        <JsonExample source={$values} title="$values" />
        <JsonExample source={$errorsInline} title="$errorsInline" />
        <JsonExample source={$form} title="$form" />
      </div>
    </div>
  );
}

interface Props {

}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.fieldLevelValidation.title" /></h1>
      <Form />
      <TemplateExamplePage formName="fieldLevelValidation" />
    </Layout>
  );
});

export default FieldLevelValidation;
