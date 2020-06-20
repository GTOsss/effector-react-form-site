import React from 'react';
import {useForm} from 'react-effector-form';
import cn from 'classnames';
import {FormattedMessage} from "gatsby-plugin-intl";
import JsonExample from '../../components/json-example';
import Layout from '../../components/layout';
import TemplateExamplePage from '../../string-examples/template-example-page';

const validatePassword = (value) => {
  if (!value) return 'Field is required';
  if (value.length < 4) return 'Minimum of 4 characters';
};

const formValidate = ({values, errorsInline}) => {
  const errors = {};

  // errorsInline contain fields-level errors
  const passwordsValid = !errorsInline.password && !errorsInline.passwordRepeat;
  const passwordsDontMatch = values.password !== values.passwordRepeat;
  if (passwordsValid && passwordsDontMatch) {
    errors.password = 'Passwords don\'t match';
    errors.passwordRepeat = 'Passwords don\'t match';
  }

  return errors;
};

const Input = ({controller,label}) => {
  const {input, error, form, fieldState} = controller();
  const showError = form.submitted || fieldState.blurred;

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', {'input-error': Boolean(showError && error)})}
        autoComplete="off"
      />
      {(form.submitted || fieldState.blurred) && error && (
        <div className="input-error-message">
          {error}
        </div>
      )}
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller, $values, $errorsInline, $form} = useForm({validate: formValidate});

  const onSubmit = ({values, form}) => {
    if (!form.hasError) {
      alert(JSON.stringify(values, null, '  '));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Password"
          controller={controller({name: 'password', validate: validatePassword})}
        />
        <Input
          label="Repeat password"
          controller={controller({name: 'passwordRepeat', validate: validatePassword})}
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
};

interface Props {

}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.formLevelValidation.title" /></h1>
      <Form />
      <TemplateExamplePage formName="formLevelValidation" />
    </Layout>
  );
});

export default FieldLevelValidation;
