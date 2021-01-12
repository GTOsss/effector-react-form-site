import InitialValues from './example';
import { form } from './example';
import jsx from './generate-results/initial-values-jsx';
import tsx from './generate-results/initial-values-tsx';

const examplesMap = { jsx, tsx };

export default InitialValues;
export { form, examplesMap };
