import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetSubmitted = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetSubmitted</h1>
    </div>
  );
};

export default memo(SetSubmitted);
