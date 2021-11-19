import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Form = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Form</h1>
    </div>
  );
};

export default memo(Form);
