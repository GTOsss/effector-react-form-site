import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const GetInAndGetInTs = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>GetInAndGetInTs</h1>
    </div>
  );
};

export default memo(GetInAndGetInTs);
