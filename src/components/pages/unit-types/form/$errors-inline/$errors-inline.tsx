import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ErrorsInline = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>$errorsInline</h1>
    </div>
  );
};

export default memo(ErrorsInline);
