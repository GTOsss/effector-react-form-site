import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const OnBlurFieldBrowser = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>OnBlurFieldBrowser</h1>
    </div>
  );
};

export default memo(OnBlurFieldBrowser);
