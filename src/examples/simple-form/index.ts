import SimpleForm, { form } from './example';
import jsx from './generate-results/simple-form-jsx';
import tsx from './generate-results/simple-form-tsx';

const examplesMap = { jsx, tsx };

export default SimpleForm;
export { form, examplesMap };
