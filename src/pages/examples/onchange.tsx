import React from 'react';
import {useForm} from 'effector-react-form';
import {FormattedMessage} from 'gatsby-plugin-intl';
import JsonExample from '../../components/json-example';
import Layout from '../../components/layout';
import TemplateExamplePage from '../../string-examples/template-example-page';
import debounce from 'lodash.debounce';

const onSubmit = ({values}) => {
  alert(JSON.stringify(values, null, '  '))
}

const debouncedOnChange = debounce(onSubmit, 500)

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
  const {handleSubmit, controller, $values, $errorsInline, $form} = useForm({
    onChange: debouncedOnChange,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Search"
          controller={controller({name: 'search'})}
        />
        <Input
          label="Search by email"
          controller={controller({name: 'searchByEmail'})}
        />
        <button type="submit">search</button>
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
      <h1><FormattedMessage id="examples.onchange.title" /></h1>
      <p><FormattedMessage id="examples.onchange.description" values={{br: <br />}} /></p>
      <Form />
      <TemplateExamplePage formName="onchange" />
    </Layout>
  );
});

export default FieldLevelValidation;
