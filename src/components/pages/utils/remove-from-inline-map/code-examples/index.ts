export const inlineMapExplanation = `import { createForm } from 'effector-react-form';

const initialValues = {
  user: {
    name: 'Sergei',
  },
  serverId: 1,
};

const form = createForm({ initialValues });

form.$fieldsInline.getState() => { 'user.name': {...}, serverId: {...} } `;
