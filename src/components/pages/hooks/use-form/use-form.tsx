import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const UseForm = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>UseForm</h1>
    </div>
  );
};

export default memo(UseForm);
