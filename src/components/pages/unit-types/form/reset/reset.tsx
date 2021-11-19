import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Reset = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Reset</h1>
    </div>
  );
};

export default memo(Reset);
