import React from 'react';
import {useForm} from 'react-effector-form';
import cn from 'classnames';
import {FormattedMessage} from "gatsby-plugin-intl";
import JsonExample from '../../components/json-example';
import Layout from '../../components/layout';
import TemplateExamplePage from '../../string-examples/template-example-page';

const formValidate = ({values}) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Field is required';
  } else if (values.username.length < 4) {
    errors.username = 'Minimum of 4 characters';
  }

  if (!values.profile || !values.profile.firstName) {
    errors['profile.firstName'] = 'Field is required'; // Field without nesting!
  }

  return errors;
};

const Input = ({
  controller,
  label,
}) => {
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
        <Input label="Username" controller={controller({name: 'username'})} />
        <Input label="First name" controller={controller({name: 'profile.firstName'})} />
        <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
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
