import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Name = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Name</h1>
    </div>
  );
};

export default memo(Name);
