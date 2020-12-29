import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-intl';
import {useForm, setIn} from 'effector-react-form';
import JsonExample from '@components/json-example';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import Layout from '@components/v1/layout';
import {createStore, createEvent} from 'effector';

const setValue = createEvent();

const $values = createStore({});

$values.on(setValue, (state, {field, value}) => setIn(state, field, value))

const Input = ({
  controller,
  label,
}) => {
  const {input} = controller();

  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller, setValue, $form, $fieldsInline, $values} = useForm({
    onSubmit: ({values}) => {
      alert(JSON.stringify(values, null, '  '));
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label="Username" controller={controller({name: 'username'})} />
        <Input label="First name" controller={controller({name: 'profile.firstName'})} />
        <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
        <button
          type="button"
          onClick={() => setValue({field: 'profile.firstName', value: 'some value'})}
        >
          set first name
        </button>
        <button type="submit">submit</button>
      </form>

      <div className="row">
        <JsonExample source={$values} title="$values" />
        <JsonExample source={$fieldsInline} title="$fieldsInline" />
        <JsonExample source={$form} title="$form" />
      </div>
    </div>
  );
};

interface Props {

}

const SetValuesGlobal = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.setValuesGlobal.title" /></h1>
      <p><FormattedMessage id="examples.setValuesGlobal.description" values={{br: <br />}} /></p>
      <Form />
      <TemplateExamplePage formName="setValuesGlobal" />
    </Layout>
  );
});

export default SetValuesGlobal;
