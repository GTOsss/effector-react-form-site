import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const ValidateForm = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>ValidateForm</h1>
    </div>
  );
};

export default memo(ValidateForm);
