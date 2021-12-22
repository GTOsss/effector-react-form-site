import React from 'react';
import { useStore } from 'effector-react';
import { Store } from 'effector';
import cn from 'clsx';
import styles from './style.module.scss';
import { Link } from 'gatsby-plugin-intl';

const linkMap: Record<string, any> = {
  $values: '$values',
  $fieldsInline: '$fields-inline',
  $form: '$form',
  $errorsInline: '$errors-inline',
  $outerErrorsInline: '$outer-errors-inline',
  $meta: '$meta',
  $allFormState: '$all-form-state',
};

interface Props {
  source: Store<any>;
  title: React.ReactNode;
  center?: boolean;
  className?: string;
}

const JsonExample: React.FC<Props> = ({ source, title, center = false, className }) => {
  const data = useStore(source);
  const code = JSON.stringify(data, null, 2);
  return (
    <div className={cn(styles.wrap, { [styles.center]: center }, className)}>
      <h3 className={styles.title}>
        {title}
        {typeof title === 'string' && linkMap[title] && (
          <Link className="state-info-icon" to={`/api/unit-types/form/${linkMap[title]}`}>
            ?
          </Link>
        )}
      </h3>
      <pre>{code}</pre>
    </div>
  );
};

export default JsonExample;
