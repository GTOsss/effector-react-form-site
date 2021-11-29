import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const SetIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>SetIn</h1>
    </div>
  );
};

export default memo(SetIn);
