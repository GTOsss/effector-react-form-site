import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-intl';
import {useForm, MapSubmit} from 'effector-react-form';
import JsonExample from '@components/json-example';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import Layout from '@components/v1/layout';

const mapSubmit: MapSubmit = ({values, ...rest}) => {
  const mappedValues = {profile: values, someData: 'example data'};
  return {...rest, values: mappedValues}
}

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
  const {handleSubmit, controller, $values, $form, $fieldsInline} = useForm({
    onSubmit: ({values}) => {
      alert(JSON.stringify(values, null, '  '));
    },
    mapSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          controller={controller({name: 'username'})}
        />
        <Input
          label="First name"
          controller={controller({name: 'profile.firstName'})}
        />
        <Input
          label="Last name"
          controller={controller({name: 'profile.lastName'})}
        />
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

const SimpleFormLocal = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.mapSubmit.title" /></h1>
      <p><FormattedMessage id="examples.mapSubmit.description" /></p>
      <Form />
      <TemplateExamplePage formName="mapSubmit" />
    </Layout>
  );
});

export default SimpleFormLocal;
