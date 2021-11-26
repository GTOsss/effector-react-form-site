import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Remove = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>Remove</h1>
    </div>
  );
};

export default memo(Remove);
