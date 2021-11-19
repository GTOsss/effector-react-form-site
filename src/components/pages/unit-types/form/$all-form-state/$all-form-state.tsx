import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const AllFormState = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>AllFormState</h1>
    </div>
  );
};

export default memo(AllFormState);
