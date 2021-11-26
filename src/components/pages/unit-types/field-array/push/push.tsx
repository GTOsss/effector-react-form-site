import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Push = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>Push</h1>
    </div>
  );
};

export default memo(Push);
