import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const CreateFieldArray = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>CreateFieldArray</h1>
    </div>
  );
};

export default memo(CreateFieldArray);
