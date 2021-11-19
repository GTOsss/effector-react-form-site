import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetOuterErrorsInlineState = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>SetOuterErrorsInlineState</h1>
    </div>
  );
};

export default memo(SetOuterErrorsInlineState);
