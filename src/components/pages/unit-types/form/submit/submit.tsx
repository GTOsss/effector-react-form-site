import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Submit = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Submit</h1>
    </div>
  );
};

export default memo(Submit);
