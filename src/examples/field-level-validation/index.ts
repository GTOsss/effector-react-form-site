import FieldLevelValidation, { form } from './example';
import jsx from './generate-results/field-level-validation-jsx';
import tsx from './generate-results/field-level-validation-tsx';

const examplesMap = { jsx, tsx };

export default FieldLevelValidation;
export { form, examplesMap };
