import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ResetOuterErrors = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>ResetOuterErrors</h1>
    </div>
  );
};

export default memo(ResetOuterErrors);
