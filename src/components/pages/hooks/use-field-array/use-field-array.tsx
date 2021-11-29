import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const UseFieldArray = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>UseFieldArray</h1>
    </div>
  );
};

export default memo(UseFieldArray);
