export const inlineMapExplanation = `import { createForm, removeFromInlineMap } from 'effector-react-form';

const initialValues = {
  user: {
    name: 'Sergei',
    lastName: 'Sergeev',
  },
  serverId: 1,
};

const form = createForm({ initialValues });

const fieldsInline = form.$fieldsInline.getState(); // { 'user.name': {...}, 'user.lastName': {...}, serverId: {...} }

const newFieldsInline = removeFromInlineMap(fieldsInline, 'user'); // { serverId: {...} }
`;
