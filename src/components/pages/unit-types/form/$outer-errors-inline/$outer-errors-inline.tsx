import { Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const OuterErrorsInline = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$outerErrorsInline</h1>
      <div>
        Стор, содержащий ошибки, добавленные вручную. Используется для <Link to="/examples/server-side-validation">серверной валидации</Link>.
      </div>
    </div>
  );
};

export default memo(OuterErrorsInline);
