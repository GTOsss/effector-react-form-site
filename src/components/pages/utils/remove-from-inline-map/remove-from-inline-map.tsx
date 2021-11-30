import CodeHighlighter from '@components/code-highlighter';
import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import { inlineMapExplanation } from './code-examples';

interface IProps {}

const RemoveFromInlineMap = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>removeFromInlineMap</h1>
      <div>
        Метод для удаления из плоских (inline) объектов состояния формы. Главное особенность в том, что в
        псевдовложенных объектах, таких как состояни{' '}
        <Link to="/en/api/unit-types/form/$fields-inline" className="Link">
          $fieldsInline
        </Link>
        , где вложенные поля указываются таким образом
        <CodeHighlighter code={inlineMapExplanation} className="CodeHighlighter" />В основном этот метод используется
        при низкоуровневых манипуляций с формой, когда нужно напрямую удалять поля из состояния в дочерних компонентах,
        таких как{' '}
        <Link to="/api/hooks/use-field-array" className="Link">
          FieldArray
        </Link>
        . В большинстве случаев, достаточно описанного выше API.
      </div>
    </div>
  );
};

export default memo(RemoveFromInlineMap);

// import { useStore } from 'effector-react';
// import {
//   createFieldArray,
//   createForm,
//   deleteIn,
//   getIn,
//   removeFromInlineMap,
//   setIn,
//   useForm,
// } from 'effector-react-form';
// import React, { memo } from 'react';
// import { getNameStr } from './getNameMy';

// interface IProps {}
// let ob = {
//   user: {
//     name: 'name',
//   },
//   vas: { vas: 'nSADasd' },
//   'user.name': 'asd',
// };

// let fieldInlineB = {
//   'a.b[0]': { _type: 'fieldMeta', value: '0' },
//   'a.b.c': { _type: 'fieldMeta', value: '1' },
//   'a.b[2]': { _type: 'fieldMeta', value: '2' },
//   d: { _type: 'fieldMeta' },
// };

// const form = createForm({ initialValues: ob });

// const fieldArray = createFieldArray({ form });

// console.log(fieldArray.form);

// form.$fieldsInline.watch((value) => console.log('!!! ', value));
// form.$values.watch((value) => console.log('!!! ', value));

// const Input = ({ controller, label }) => {
//   const { input } = controller();
//   return (
//     <div className="input-wrap">
//       <label>{label}</label>
//       <input {...input} value={input.value || ''} className="input" />
//     </div>
//   );
// };

// const RemoveFromInlineMap = ({}: IProps) => {
//   const { controller } = useForm({ form });
//   const fields = useStore(form.$fieldsInline);
//   React.useEffect(() => {
//     ob = setIn(ob, 'key.val', 'val.key');
//     console.log(ob);
//   }, [fields]);
//   console.log(ob);
//   return (
//     <div className="ComponentRoot">
//       <h1>removeFromInlineMap</h1>
//       {/* <button onClick={() => console.log(deleteIn(ob, 'user.name', false))}>asd</button> */}

//       <button
//         onClick={() => {
//           console.log('### first state: ', fieldInlineB);

//           const newObj = { ...fieldInlineB };
//           delete newObj['a.b'];
//           const whatIf = removeFromInlineMap(fieldInlineB, 'a.b');
//           fieldInlineB = newObj;

//           console.log('### second state', fieldInlineB);
//           console.log('### whatIf: ', whatIf);
//         }}
//       >
//         asd
//       </button>
//       <div>
//         Метод для удаления из плоских (inline) объектов состояния формы. Использование ключевого слова delete может
//         повелечь за собой баги
//       </div>
//       <form>
//         <Input label="Name" controller={controller({ name: 'user.name' })} />
//         <Input label="Last name" controller={controller({ name: form.getNameStr('user.name') })} />
//         <Input label="Id" controller={controller({ name: form.getNameStr('user.name') })} />
//       </form>
//     </div>
//   );
// };

// export default memo(RemoveFromInlineMap);
