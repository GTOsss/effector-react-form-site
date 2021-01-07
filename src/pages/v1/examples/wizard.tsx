import React, { useState } from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'gatsby-plugin-intl';
import JsonExample from '@components/json-example';
import Layout from '@components/v1/layout';
import TemplateExamplePage from '../../../string-examples/template-example-page';
import { createStore } from 'effector';
import { useForm } from 'effector-react-form-v1';

const $values = createStore({});

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

const FormUserInfo = ({ onSubmit }) => {
  const { controller, handleSubmit } = useForm({ $values, onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        controller={controller({
          name: 'username',
          validate: validateRequired,
        })}
        label="Username"
      />
      <Input
        controller={controller({ name: 'profile.firstName' })}
        label="First name"
      />
      <Input
        controller={controller({ name: 'profile.lastName' })}
        label="Last name"
      />
      <button type="submit">Next step</button>
    </form>
  );
};

const FormContactInfo = ({ onSubmit, onPreviousPage }) => {
  const { controller, handleSubmit } = useForm({ $values, onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        controller={controller({
          name: 'contactInfo.email',
          validate: validateRequired,
        })}
        label="Email"
      />
      <Input
        controller={controller({
          name: 'contactInfo.phone',
          validate: validateRequired,
        })}
        label="Phone"
      />
      <button type="button" onClick={onPreviousPage}>
        Previous step
      </button>
      <button type="submit">Next step</button>
    </form>
  );
};

const FormAdditionalInfo = ({ onSubmit, onPreviousPage }) => {
  const { controller, handleSubmit } = useForm({ $values, onSubmit });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        controller={controller({
          name: 'profile.info',
          validate: validateRequired,
        })}
        label="Info"
      />
      <button type="button" onClick={onPreviousPage}>
        Previous step
      </button>
      <button type="submit">Next step</button>
    </form>
  );
};

const ThankForRegistration = ({ onPreviousPage }) => (
  <div>
    <h2>Thank you for registering!</h2>
    <div>Your info:</div>
    <pre>{JSON.stringify($values.getState(), null, '  ')}</pre>
    <button type="button" onClick={onPreviousPage}>
      Previous step
    </button>
  </div>
);

const steps = [
  FormUserInfo,
  FormContactInfo,
  FormAdditionalInfo,
  ThankForRegistration,
];

const Form = () => {
  const [step, setStep] = useState(0);

  const onSubmit = ({ form }) => {
    if (!form.hasError) {
      setStep(step + 1);
    }
  };

  const onPreviousPage = () => setStep(step - 1);

  return (
    <div>
      {React.createElement(steps[step], { onPreviousPage, onSubmit })}

      <div className="row code-center">
        <JsonExample source={$values} title="$values" center />
      </div>
    </div>
  );
};

interface Props {}

const FieldLevelValidation = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.fieldLevelValidation.title" />
      </h1>
      <Form />
      <TemplateExamplePage formName="wizard" />
    </Layout>
  );
});

export default FieldLevelValidation;
