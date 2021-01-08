import * as React from 'react';
import ExampleByKey, { ExampleKey } from './index';
import styles from './styles.module.scss';

interface Props {
  formName: ExampleKey;
  wizard?: boolean;
}

const TemplateExamplePage: React.FC<Props> = ({ formName }) => {
  return (
    <div className={styles.wrap}>
      <ExampleByKey exampleKey={formName} />
    </div>
  );
};

export default TemplateExamplePage;
