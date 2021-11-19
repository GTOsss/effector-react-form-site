import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const OnChangeFieldBrowser = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>OnChangeFieldBrowser</h1>
    </div>
  );
};

export default memo(OnChangeFieldBrowser);
