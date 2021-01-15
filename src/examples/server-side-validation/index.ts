import ServerSideValidation, { form } from './example';
import jsx from './generate-results/server-side-validation-jsx';
import tsx from './generate-results/server-side-validation-tsx';

const examplesMap = { jsx, tsx };

export default ServerSideValidation;
export { form, examplesMap };
