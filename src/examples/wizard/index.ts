import Wizard, { $allFormValues } from './example';
import jsx from './generate-results/wizard-jsx';
import tsx from './generate-results/wizard-tsx';

const examplesMap = { jsx, tsx };

export default Wizard;
export { $allFormValues, examplesMap };
