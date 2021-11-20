import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const AllFormState = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$allFormState</h1>
      <div>Стор, содержащий в себе данные из всех остальных сторов формы:</div>
      <ol>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$values" className={styles.Link}>
            $values
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$errors-inline" className={styles.Link}>
            $errorsInline
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$outer-errors-inline" className={styles.Link}>
            $outerErrorsInline
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$fields-inline" className={styles.Link}>
            $fieldsInline
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$form" className={styles.Link}>
            $form
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/api/unit-types/form/$meta" className={styles.Link}>
            $meta
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default memo(AllFormState);
