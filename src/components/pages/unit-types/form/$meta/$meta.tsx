import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Meta = ({}: IProps) => {
  return (
    <div className={styles.root}>
      <h1>Meta</h1>
    </div>
  );
};

export default memo(Meta);
