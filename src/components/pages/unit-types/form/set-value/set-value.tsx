import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetValue = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetValue</h1>
    </div>
  );
};

export default memo(SetValue);
