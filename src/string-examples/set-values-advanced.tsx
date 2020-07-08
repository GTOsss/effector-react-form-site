export const strStore = `import {createStore, createEffect, sample, createEvent, combine} from 'effector';
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
);`;

export const strComponents = `import React from 'react';
import {useForm} from 'effector-react-form';
import {useStore} from 'effector-react';

const Input = ({controller, label}) => {
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
  );
};`;
