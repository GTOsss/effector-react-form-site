import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const MakeNested = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>MakeNested</h1>
    </div>
  );
};

export default memo(MakeNested);
