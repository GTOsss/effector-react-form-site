import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const UseError = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>UseError</h1>
    </div>
  );
};

export default memo(UseError);
