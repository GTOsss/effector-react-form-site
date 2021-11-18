import React from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'gatsby-plugin-intl';
import JsonExample from '@components/json-example';
import Layout from '@components/v1/layout';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import { useForm, useFieldArray } from 'effector-react-form-v1';
import { createStore } from 'effector';

const getId = (() => {
  let counter = 0;
  return () => counter++;
})();

const $values = createStore({});
const $fieldsInline = createStore({});

const validateRequired = (value) => (!value ? 'Field is required' : undefined);

const Input = ({ controller, label }) => {
  const { input, error, isShowError } = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ''}
        className={cn('input', { 'input-error': isShowError })}
        autoComplete="off"
      />
      {isShowError && <div className="input-error-message">{error}</div>}
    </div>
  );
};

const Friends = ({ controller, name }) => {
  const { map, push, remove } = useFieldArray({ name, $values, $fieldsInline });

  return (
    <div className="formsItem" role="formItem">
      {map(({ formItemName, index, field }) => (
        <div key={field.id} className="formItem">
          <Input
            label="First name"
            controller={controller({
              name: `${formItemName}.firstName`,
              validate: validateRequired,
            })}
          />
          <Input
            label="Last name"
            controller={controller({
              name: `${formItemName}.lastName`,
              validate: validateRequired,
            })}
          />
          <button type="button" onClick={() => remove(index)} className="danger">
            remove friend
          </button>
        </div>
      ))}
      <button type="button" onClick={() => push({ id: getId() })} className="success">
        add friend
      </button>
    </div>
  );
};

const Users = ({ controller, name }) => {
  const { map, push, remove } = useFieldArray({ name, $values, $fieldsInline });

  return (
    <div className="formsItem" role="formItem">
      {map(({ formItemName, index, field }) => (
        <div key={field.id} className="formItem">
          <Input
            label="Username"
            controller={controller({
              name: `${formItemName}.username`,
              validate: validateRequired,
            })}
          />
          <button type="button" onClick={() => remove(index)} className="danger">
            remove user
          </button>

          <Friends name={`${formItemName}.friends`} controller={controller} />
        </div>
      ))}
      <button type="button" onClick={() => push({ id: getId(), username: '', profile: {} })} className="success">
        add user
      </button>
    </div>
  );
};

const Form = () => {
  const { handleSubmit, controller, $form, $errorsInline } = useForm({
    $values,
    $fieldsInline,
    onSubmit: ({ values, form }) => {
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

interface Props {}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.fieldArrayNested.title" />
      </h1>
      <Form />
      <TemplateExamplePage formName="fieldArrayNested" />
    </Layout>
  );
});

export default FieldLevelValidation;
