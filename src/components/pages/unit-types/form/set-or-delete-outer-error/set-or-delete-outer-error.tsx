import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetOrDeleteOuterError = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetOrDeleteOuterError</h1>
    </div>
  );
};

export default memo(SetOrDeleteOuterError);
