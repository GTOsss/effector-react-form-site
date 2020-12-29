import React from 'react';
import {FormattedMessage} from 'gatsby-plugin-intl';
import {useForm} from 'effector-react-form';
import JsonExample from '@components/json-example';
import StringExample from '../../../string-examples';
import {strStore, strComponents} from '../../../string-examples/set-values-advanced';
import Layout from '@components/v1/layout';
import {createStore, createEffect, sample, createEvent, combine} from 'effector';
import {useStore} from 'effector-react';
import isEqual from 'lodash.isequal';

const sleep = () => new Promise(resolve => setTimeout(resolve, 700));

const getUserFx = createEffect({
  handler: async () => {
    await sleep();
    return {
      username: 'gtosss',
      profile: {
        firstName: 'Timofey',
        lastName: 'Goncharov',
      },
    };
  },
});

const putUserFx = createEffect({
  handler: async params => {
    console.log('save: ', params.values);
    await sleep();
  },
});

const resetUser = createEvent();
const clearUser = createEvent();

const $isPending = combine([getUserFx.pending, putUserFx.pending], vars =>
  vars.includes(true),
);

const initialUser = {
  username: '',
  profile: {
    firstName: '',
    lastName: '',
  },
};

const $values = createStore(initialUser)
  .on(getUserFx.doneData, (_, user) => user)
  .reset(clearUser);

const $formSnapshot = createStore(initialUser)
  .on(putUserFx.done, (_, {params}) => params.values);

const $isChanged = combine(
  $values,
  $formSnapshot,
  (a, b) => !isEqual(a, b),
);

sample({
  source: $formSnapshot,
  clock: resetUser,
  target: $values,
});

const $isEmpty = $values.map(
  values =>
    !values.username && !values.profile.firstName && !values.profile.lastName,
);

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
  const {handleSubmit, controller} = useForm({$values, onSubmit: putUserFx});

  const disabled = useStore($isPending);
  const changed = useStore($isChanged);
  const empty = useStore($isEmpty);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input label="Username" controller={controller({name: 'username'})} />
        <Input label="First name" controller={controller({name: 'profile.firstName'})} />
        <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
        <button disabled={disabled} type="button" onClick={() => getUserFx()}>
          {useStore(getUserFx.pending) ? 'loading...' : 'load user'}
        </button>
        <button disabled={disabled || !changed} type="button" onClick={() => resetUser()}>reset</button>
        <button disabled={disabled || empty} type="button" onClick={() => clearUser()}>clear</button>
        <button disabled={disabled || !changed || empty} type="submit">
          {useStore(putUserFx.pending) ? 'saving...' : 'save'}
        </button>
      </form>

      <div className="row">
        <JsonExample source={$values} title="$values" />
        <JsonExample source={$formSnapshot} title="$formSnapshot (saved user)" />
      </div>
    </div>
  );
};

interface Props {

}

const SetValuesAdvanced = React.memo(({}: Props) => {
  return (
    <Layout menuKey="Examples">
      <h1><FormattedMessage id="examples.setValuesAdvanced.title" /></h1>
      <p><FormattedMessage id="examples.setValuesAdvanced.description" values={{br: <br />}} /></p>
      <Form />
      <h3>Store</h3>
      <StringExample>{strStore}</StringExample>
      <h3>Components</h3>
      <StringExample>{strComponents}</StringExample>
    </Layout>
  );
});

export default SetValuesAdvanced;
