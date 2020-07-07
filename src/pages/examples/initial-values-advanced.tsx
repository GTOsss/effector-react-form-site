import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-intl';
import {useForm} from 'effector-react-form';
import JsonExample from '../../components/json-example';
import TemplateExamplePage from '../../string-examples/template-example-page';
import Layout from '../../components/layout';
import {createStore, createEvent} from 'effector';

const resetValuesToInitial = createEvent(); // for reset to initial values
const clearValues = createEvent(); // for clear all fields

const initialValues = {
  username: 'gtosss',
  profile: {
    firstName: 'Timofey',
    lastName: 'Goncharov',
  },
};

const $values = createStore(initialValues) // set initial values
  .reset(resetValuesToInitial); // add handler for reset to initial values

$values.on(clearValues, () => ({})); // add handler for clear fields

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
  const {handleSubmit, controller, $form, $fieldsInline} = useForm({$values});

  const onSubmit = ({values}) => {
    alert(JSON.stringify(values, null, '  '));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Username" controller={controller({name: 'username'})} />
        <Input label="First name" controller={controller({name: 'profile.firstName'})} />
        <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
        <button type="submit">submit</button>
        <button type="button" onClick={() => resetValuesToInitial()}>reset</button>
        <button type="button" onClick={() => clearValues()}>clear</button>
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

const InitialValuesAdvanced = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.initialValuesAdvanced.title" /></h1>
      <p><FormattedMessage id="examples.initialValuesAdvanced.description" values={{br: <br />}} /></p>
      <Form />
      <TemplateExamplePage formName="initialValuesAdvanced" />
    </Layout>
  );
});

export default InitialValuesAdvanced;
