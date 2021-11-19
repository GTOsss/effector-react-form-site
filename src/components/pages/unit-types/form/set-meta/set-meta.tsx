import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetMeta = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetMeta</h1>
    </div>
  );
};

export default memo(SetMeta);
