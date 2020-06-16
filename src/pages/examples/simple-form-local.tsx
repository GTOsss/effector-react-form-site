import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-intl';
import {useForm} from 'react-effector-form';
import JsonExample from '../../components/json-example';
import TemplateExamplePage from '../../string-examples/template-example-page';
import Layout from '../../components/layout';

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
  const {handleSubmit, controller, $values, $form, $fieldsInline} = useForm();

  const onSubmit = ({values}) => {
    alert(JSON.stringify(values, null, '  '));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <JsonExample source={$values} title="values" />
        <JsonExample source={$fieldsInline} title="fields state" />
        <JsonExample source={$form} title="form state" />
      </div>
    </div>
  );
};

interface Props {

}

const SimpleFormLocal = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.simpleFormLocal.title" /></h1>
      <p><FormattedMessage id="examples.simpleFormLocal.description" /></p>
      <Form />
      <TemplateExamplePage formName="simpleFormLocal" />
    </Layout>
  );
});

export default SimpleFormLocal;
