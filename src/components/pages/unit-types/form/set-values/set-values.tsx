import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetValues = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetValues</h1>
    </div>
  );
};

export default memo(SetValues);
