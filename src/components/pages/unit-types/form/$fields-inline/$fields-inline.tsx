import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const FieldsInline = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>FieldsInline</h1>
    </div>
  );
};

export default memo(FieldsInline);
