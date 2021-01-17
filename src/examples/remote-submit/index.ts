import RemoteSubmit, { form } from './example';
import jsx from './generate-results/remote-submit-jsx';
import tsx from './generate-results/remote-submit-tsx';

const examplesMap = { jsx, tsx };

export default RemoteSubmit;
export { form, examplesMap };
