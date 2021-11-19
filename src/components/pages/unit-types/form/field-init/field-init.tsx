import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const FieldInit = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>FieldInit</h1>
    </div>
  );
};

export default memo(FieldInit);
