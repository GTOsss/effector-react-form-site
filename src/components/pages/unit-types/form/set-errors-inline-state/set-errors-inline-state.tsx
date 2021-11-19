import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetErrorsInlineState = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetErrorsInlineState</h1>
    </div>
  );
};

export default memo(SetErrorsInlineState);
