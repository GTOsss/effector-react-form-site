import FieldArrayNested, { form } from './example';
import jsx from './generate-results/field-array-nested-jsx';
import tsx from './generate-results/field-array-nested-tsx';

const examplesMap = { jsx, tsx };

export default FieldArrayNested;
export { form, examplesMap };
