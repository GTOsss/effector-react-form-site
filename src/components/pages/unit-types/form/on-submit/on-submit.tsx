import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const OnSubmit = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>OnSubmit</h1>
    </div>
  );
};

export default memo(OnSubmit);
