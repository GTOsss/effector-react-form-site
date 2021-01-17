import FieldArray, { form } from './example';
import jsx from './generate-results/field-array-jsx';
import tsx from './generate-results/field-array-tsx';

const examplesMap = { jsx, tsx };

export default FieldArray;
export { form, examplesMap };
