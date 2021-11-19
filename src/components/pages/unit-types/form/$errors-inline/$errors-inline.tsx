import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ErrorsInline = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$errorsInline</h1>
      <div>
        Стор, содержащий ошибки, созданные функцией <Link to="/examples/field-level-validation">валидации</Link>.
      </div>
    </div>
  );
};

export default memo(ErrorsInline);
