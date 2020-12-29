import React from 'react';
import cn from 'classnames';
import {FormattedMessage} from 'gatsby-plugin-intl';
import JsonExample from '@components/json-example';
import Layout from '@components/v1/layout';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import {useForm, useFieldArray} from 'effector-react-form';
import {createStore} from 'effector';

const getId = (() => {
  let counter = 0;
  return () => counter++;
})();

const $values = createStore({});
const $fieldsInline = createStore({});

const validateRequired = (value) => !value ? 'Field is required' : undefined;

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

const Users = ({controller, name}) => {
  const {map, push, remove} = useFieldArray({name, $values, $fieldsInline});

  return (
    <div className="formsItem" role="formItem">
      {map(({formItemName, index, field}) => (
        <div key={field.id} className="formItem">
          <Input
            label="Username"
            controller={controller({name: `${formItemName}.username`, validate: validateRequired})}
          />
          <Input
            label="First name"
            controller={controller({name: `${formItemName}.profile.firstName`, validate: validateRequired})}
          />
          <button type="button" onClick={() => remove(index)} className="danger">remove user</button>
        </div>
      ))}
      <button type="button" onClick={() => push({id: getId(), username: '', profile: {}})} className="success">
        add user
      </button>
      <button
        type="button"
        onClick={() => push({id: getId(), username: 'test username', profile: {firstName: 'test firstName'}})}
        className="success"
      >
        add user with values
      </button>
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller, $form, $errorsInline} = useForm({
    $values,
    $fieldsInline,
    onSubmit: ({values, form}) => {
      if (!form.hasError) {
        alert(JSON.stringify(values, null, '  '));
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Users name="users" controller={controller} />
        <button type="submit">submit</button>
      </form>

      <div className="row">
        <JsonExample source={$values} title="$values" />
        <JsonExample source={$errorsInline} title="$errorsInline" />
        <JsonExample source={$fieldsInline} title="$fieldsInline" />
      </div>
      <JsonExample source={$form} title="$form" center />
    </div>
  );
};

interface Props {

}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.fieldArray.title" /></h1>
      <Form />
      <TemplateExamplePage formName="fieldArray" />
    </Layout>
  );
});

export default FieldLevelValidation;
