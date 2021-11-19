import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ResetOuterFieldStateFlags = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>ResetOuterFieldStateFlags</h1>
    </div>
  );
};

export default memo(ResetOuterFieldStateFlags);
