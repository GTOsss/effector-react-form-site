import FormLevelValidation, { form } from './example';
import jsx from './generate-results/form-level-validation-jsx';
import tsx from './generate-results/form-level-validation-tsx';

const examplesMap = { jsx, tsx };

export default FormLevelValidation;
export { form, examplesMap };
