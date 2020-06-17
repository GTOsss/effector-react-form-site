import React from 'react';
import {useStore} from 'effector-react';
import {Store} from 'effector';
import styles from './style.module.scss';

const linkMap: Record<string, any> = {
  '$values': 'e',
  '$fieldsInline': 'e',
  '$form': 'e',
};

interface Props {
  source: Store<any>,
  title: React.ReactNode,
}

const JsonExample: React.FC<Props> = ({source, title}) => {
  const data = useStore(source);
  const code = JSON.stringify(data, null, 2);
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>
        {title}
        {(typeof title === 'string') && linkMap[title] && (
          <a className="state-info-icon" href="/some-url">?</a>
        )}
      </h3>
      <pre>{code}</pre>
    </div>
  );
}

export default JsonExample;
