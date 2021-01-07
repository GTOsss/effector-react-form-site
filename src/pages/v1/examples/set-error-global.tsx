import React from 'react';
import { useForm } from 'effector-react-form-v1';
import cn from 'classnames';
import { FormattedMessage } from 'gatsby-plugin-intl';
import JsonExample from '@components/json-example';
import Layout from '@components/v1/layout';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import { createEvent, createStore } from 'effector';

const setError = createEvent();

const $outerErrorsInline = createStore({});
const $fieldsInline = createStore({});

$outerErrorsInline.on(setError, (state, { field, error }) => ({
  ...state,
  [field]: error,
}));

$fieldsInline.on(setError, (state, { field }) => ({
  ...state,
  [field]: {
    ...state[field],
    touchedAfterOuterError: false,
    changedAfterOuterError: false,
    blurredAfterOuterError: false,
  },
}));

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

const Form = () => {
  const { handleSubmit, controller, $form } = useForm({
    $outerErrorsInline,
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
        <Input
          label="First name"
          controller={controller({
            name: 'profile.firstName',
            validate: validateRequired,
          })}
        />
        <Input
          label="Last name"
          controller={controller({
            name: 'profile.lastName',
            validate: validateRequired,
          })}
        />
        <button type="submit">submit</button>
        <button
          type="button"
          onClick={() =>
            setError({ field: 'profile.firstName', error: 'firstName error' })
          }
        >
          set firstName error
        </button>
        <button
          type="button"
          onClick={() =>
            setError({ field: 'profile.lastName', error: 'lastName error' })
          }
        >
          set lastName error
        </button>
      </form>

      <div className="row">
        <JsonExample source={$fieldsInline} title="$fieldsInline" />
        <JsonExample source={$outerErrorsInline} title="$outerErrorsInline" />
        <JsonExample source={$form} title="$form" />
      </div>
    </div>
  );
};

interface Props {}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.setErrorGlobal.title" />
      </h1>
      <p>
        <FormattedMessage
          id="examples.setErrorGlobal.description"
          values={{ br: <br /> }}
        />
      </p>
      <Form />
      <TemplateExamplePage formName="setErrorGlobal" />
    </Layout>
  );
});

export default FieldLevelValidation;
