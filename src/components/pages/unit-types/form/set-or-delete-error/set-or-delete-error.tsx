import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetOrDeleteError = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetOrDeleteError</h1>
    </div>
  );
};

export default memo(SetOrDeleteError);
