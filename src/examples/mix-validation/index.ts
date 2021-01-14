import MixValidation, { form } from './example';
import jsx from './generate-results/mix-validation-jsx';
import tsx from './generate-results/mix-validation-tsx';

const examplesMap = { jsx, tsx };

export default MixValidation;
export { form, examplesMap };
