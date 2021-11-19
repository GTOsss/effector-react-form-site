import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const GetNameStr = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>GetNameStr</h1>
    </div>
  );
};

export default memo(GetNameStr);
