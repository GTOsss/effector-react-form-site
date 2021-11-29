import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const DeleteIn = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>DeleteIn</h1>
    </div>
  );
};

export default memo(DeleteIn);
